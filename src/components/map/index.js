import React, { Component } from 'react'
import styles from './styles.css'

export default class Map extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
    })
  }

  render() {
    return <div className={styles.map} ref="map" />
  }
}
