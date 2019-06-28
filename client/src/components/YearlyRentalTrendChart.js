import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts'

const YearlyRentalTrendChart = () => {
  const [dates, setDates] = useState([])

  useEffect(() => {
    axios.get('/api/yearly_rental_trend')
      .then(res => {
        setDates(res.data)
      })
  }, [])

  return (
    <ScatterChart
      width={1600}
      height={400}
      margin={{ top: 20, right: 20, bottom: 20, left: 20, }}
    >
      <CartesianGrid />
      <XAxis angle={-60} textAnchor='end' dataKey="rental_date" type='category' />
      <YAxis dataKey="rental_count" type='number' />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter line data={dates} fill="#0066cc" />
    </ScatterChart>
  )
}
 
export default YearlyRentalTrendChart
