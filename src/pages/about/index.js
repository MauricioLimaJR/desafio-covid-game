import React from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
// Material-UI
import { Grid } from '@material-ui/core'
import WhatsappIcon from '@material-ui/icons/WhatsApp'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
// Custom components
import Button from'../components/Button'
import Icon from'../components/Icon'
// Others
import * as colors from '../../constants/colors'

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 10px;
  text-align: center;

  a {
    /* color: white; */
    cursor: pointer;
    text-decoration: none;

    :hover {
      font-weight: bold;
    }
  }
`

const Description = styled.p`
  color: ${colors.white};
  font-size: 1rem;
  margin: 10px;
  text-align: justify;
`

const Title = styled(Description)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 5px 0;
  text-align: center;
`

const Contact = styled(Description)`
  margin: 5px;
  text-align: center;
`

const Ranking = () => {
  return (
    <MainContainer
      container
      alignContent="center"
      justify="center"
    >
      {/* Title */}
      <Grid item xs={12}>
        <Title>
          Vamos vencer o coronavírus!
        </Title>
      </Grid>

      {/* Description */}
      <Grid item xs={12}>
        <Description>
          Acreditamos que informação é poder e, bem utilizada, é a <b>maior arma contra o novo coronavírus</b>. Para essa missão, construímos o <b>Desafio Covid</b>, um jogo (quiz) educacional sobre o novo coronavírus, com um foco em <b>eliminar as notícias fakes</b> (informações caluniosas).
        </Description>
      </Grid>

      {/* Description */}
      <Grid item xs={12}>
        <Description>
          Entre em contato via e-mail, <b>desafiocovidbrasil@gmail.com</b>. Ou diretamente com os criadores:
        </Description>
      </Grid>

      {/* Contact */}
      <Grid item xs={12}>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs='auto'>
            <Contact>Maurício Lima</Contact>
          </Grid>
          <Grid item xs='auto'>
            <a href='https://api.whatsapp.com/send?phone=5581985939388' target='./'>
              <Icon
                color='secondary'
                MIcon={WhatsappIcon}
              />
            </a>
          </Grid>
          <Grid item xs='auto'>
            <a href='https://www.linkedin.com/in/mauricio-lima-junior/' target='./'>
              <Icon
                color='secondary'
                MIcon={LinkedInIcon}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>


      {/* Contact */}
      <Grid item xs={12}>
        <Grid container justify='center' alignItems='center'>
          <Grid item xs='auto'>
            <Contact>Davi Pradines</Contact>
          </Grid>
          <Grid item xs='auto'>
            <a href='https://api.whatsapp.com/send?phone=5582998011109' target='./'>
              <Icon
                color='secondary'
                MIcon={WhatsappIcon}
              />
            </a>
          </Grid>
          <Grid item xs='auto'>
            <a href='https://www.linkedin.com/in/davipradines/' target='./'>
              <Icon
                color='secondary'
                MIcon={LinkedInIcon}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>


      {/* Button */}
      <Grid item xs={12} style={{ marginTop: '20px' }}>
        <Link to="/">
          <Button
            color='secondary'
          >
            Início
          </Button>
        </Link>
      </Grid>
    </MainContainer>
  )
}

export default Ranking
