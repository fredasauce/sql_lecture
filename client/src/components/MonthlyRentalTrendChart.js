import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

const MonthlyRentalTrendChart = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('/api/monthly_rental_trend')
      .then(res => {
        setBooks(res.data)
      })
  }, []) 

  return (
    <BarChart
      width={700}
      height={300}
      data={books}
      barSize={40}
      margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="rental_date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar name="Rental Count" dataKey="rental_count" fill="#0066cc" />
    </BarChart>
  )
}

export default MonthlyRentalTrendChart
