import React from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom components
import firebase from '../../firebase/firebase'
import Button from '../components/Button'
import RankingTable from './components/RankingTable'
import Toast from '../../lib/toastfy'
// Others
import * as colors from '../../constants/colors'
import Podium from '../../static/images/podium.svg'

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 10px;
  text-align: center;

  h3 {
    margin: 5px 0;
    color: ${colors.razzmatazzDarkPink};
  }

  b {
    color: ${colors.white};
  }
`

const Title = styled.p`
  color: ${colors.white};
  font-size: 1.2rem;
  margin: 0 5px 0;
`

const Ranking = () => {
  const db = firebase.firestore()
  const [ranking, setRanking] = React.useState([])

  const getRanking = async () => {
    try {
      const usersList = []

      await db.collection("users")
        .where("score", ">", 0)
        .orderBy("score", "desc")
        .limit(10)
        .get()
        .then(querySnapshot => {
          if (!querySnapshot) Toast.show('Ninguém jogou ainda..')

          querySnapshot.forEach(user =>
            usersList.push({ ...user.data(), uid: user.id }),
          );
        })

      return usersList
    } catch (err) {
      Toast.error('Houve algum erro 😰')
    }
  }

  React.useEffect(() =>{
    (async () => {
      Toast.show('Carregando o ranking 👾')
      const users = await getRanking()
      setRanking(users)
    })()
  }, [1])

  return (
    <MainContainer
      container
      alignContent="center"
      justify="center"
    >
      {/* Icon */}
      <Grid item xs={12}>
        <img height={80} src={Podium} alt='Pódio'/>
      </Grid>

      {/* Title */}
      <Grid item xs={12}>
        <Title>Ranking</Title>
      </Grid>

      {/* Ranking Table */}
      <Grid item xs={12}>
        <RankingTable list={ranking} />
      </Grid>

      {/* Button */}
      <Grid item xs={12}>
        <Link to="/">
          <Button
            color='secondary'
            size='large'
          >
            Jogar
          </Button>
        </Link>
      </Grid>
    </MainContainer>
  )
}

export default Ranking
