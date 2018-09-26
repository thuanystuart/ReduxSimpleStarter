import React from 'react'
import styles from './styles.css'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

const average = data => {
  return Math.round(data.reduce / data.length)
}

const Chart = props => {
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

export default Chart
