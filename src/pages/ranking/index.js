import React from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
// Material-UI
import { CircularProgress, Grid, Slider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
// Custom components
import Button from '../components/Button'
import RankingTable from './components/RankingTable'
// Others
import * as colors from '../../constants/colors'
import { GetRanking } from '../../collections/operations'
import Podium from '../../static/images/podium.svg'
import { fontFamily } from '@material-ui/system';

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 10px;
  text-align: center;
  overflow-y: auto;

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

const CustomSlider = withStyles({
  root: {
    color: colors.razzmatazzPink,
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  markLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  mark: {
    backgroundColor: colors.razzmatazzDarkPink,
    height: 16,
    width: 3,
    marginTop: -3,
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const Ranking = () => {
  const [ranking, setRanking] = React.useState([])
  const [isLoading, SetIsLoading] = React.useState(true)
  const [interval, setInterval] = React.useState(0)

  const intervals = [
    { value: 0, label: '2H atrás' },
    { value: 50, label: '1 dia atrás' },
    { value: 100, label: 'Geral' },
  ]

  const getIntervalString = v => v === 0 ? 'fresh' : v === 50 ? 'day' : 'global'

  const getIntervalLabel = value => {
    let label = ''
    const obj = intervals.forEach(o => o.value === value ? label = o.label : null)
    return label
  }

  React.useEffect(() =>{
    (async () => {
      SetIsLoading(true)
      const users = await GetRanking(getIntervalString(interval))
      setRanking(users)
      SetIsLoading(false)
    })()
  }, [getIntervalString(interval)])


  return (
    <MainContainer
      container
      alignContent="center"
      justify="center"
    >
      {isLoading ? (
        <Grid item xs={12}>
          <CircularProgress color="secondary" />
        </Grid>
      )
      : (
        <>
          {/* Ranking interval */}
          <Grid item xs={8}>
            <CustomSlider
              color='secondary'
              defaultValue={interval}
              valueLabelFormat={v => getIntervalLabel(v)}
              aria-labelledby="discrete-slider-custom"
              step={50}
              valueLabelDisplay="auto"
              marks={intervals}
              onChange={(e, v) => setInterval(v)}
            />
          </Grid>

          {/* Icon */}
          <Grid item xs={12}>
            <img height={60} src={Podium} alt='Pódio'/>
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
        </>
      )}
    </MainContainer>
  )
}

export default Ranking
