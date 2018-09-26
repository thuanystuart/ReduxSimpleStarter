import React from 'react'
import styles from './styles.css'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'

const average = data => {
  return _.round(_.sum(data) / data.length)
}

export default props => {
  const { data, color, unit } = props

  return (
    <div>
      <Sparklines data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(data)} {unit}
      </div>
    </div>
  )
}
