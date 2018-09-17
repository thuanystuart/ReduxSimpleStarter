import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styles from './styles.css'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import Chart from '../chart'
import Map from '../map'

class WeatherList extends PureComponent {
  renderWeather = cityData => {
    const name = cityData.city.name
    const temps = cityData.list.map(data => data.main.temp)
    const pressures = cityData.list.map(data => data.main.pressure)
    const humidities = cityData.list.map(data => data.main.humidity)
    const { lon, lat } = cityData.city.coord

    return (
      <div key={cityData.city.name} className={styles.row}>
        <Map lat={lat} lon={lon} />
        <Chart data={temps} color="red" unit="K" />
        <Chart data={pressures} color="orange" unit="hPa" />
        <Chart color="purple" data={humidities} unit="%" />
      </div>
    )
  }

  render() {
    return (
      <div className={styles.list}>
        <div className={styles.header}>
          <span className={styles.head}>City</span>
          <span className={styles.head}>Temperature (K)</span>
          <span className={styles.head}>Pressure (hPa)</span>
          <span className={styles.head}>Humidity (%)</span>
        </div>
        <div className={styles.content}>{this.props.weather.map(this.renderWeather)}</div>
      </div>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
