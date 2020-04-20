import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
// Others
import * as colors from '../../../constants/colors'
import { getLimitedString } from '../../../lib/utils'

const MainContainer = styled(Grid)`
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2px 10px;
  text-align: center;

  p {
    color: ${colors.concrete};
    margin: 0;
  }

  .name {
    font-size: 0.9rem;
  }
  .instagram {
    font-size: 0.6rem;
  }
  .time {
    color: ${colors.brightTurquoiseGreen};
  }
  .mistake {
    color: ${colors.ecstasyOrange};
  }
  .score {
    color: ${colors.brightTurquoiseGreen};
    font-weight: bold;
  }
`

const Item = styled(Grid)`
  border: solid 1px ${colors.lividBrown};
  padding: 1px 1px;
  text-overflow: ellipsis;
  overflow: hidden;
`

const RankingTable = ({
  list
}) => {

  return (
    <MainContainer
      container
      alignContent="center"
      justify="center"
    >
      {
        list.map((user, k) => {
          const { name, instagram, time, mistakes, score } = user

          return <Grid
            key={score}
            container
          >
            <Item item xs={1}>
              <p className='name'>{k+1}</p>
            </Item>
            <Item item xs={5}>
              <p className='name'>{getLimitedString(name)}</p>
              <p className='instagram'>{instagram}</p>
            </Item>
            <Item item xs={2}>
              <p className='time'>{time}</p>
            </Item>
            <Item item xs={2}>
              <p className='mistake'>{mistakes}</p>
              <p className='instagram'>erros</p>
            </Item>
            <Item item xs={2}>
              <p className='score'>{score}</p>
            </Item>
          </Grid>

        })
      }
    </MainContainer>
  )
}

export default RankingTable
