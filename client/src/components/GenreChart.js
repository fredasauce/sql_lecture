import React from 'react'
import axios from 'axios'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

class GenreChart extends React.Component {
  state = { books: [] }

  componentDidMount() {
    axios.get('/api/books') 
      .then(res => {
        this.setState({ books: res.data })
      })
  }

  render() {
    return (
      <BarChart
        width={700}
        height={300}
        data={this.state.books}
        barSize={40}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="genre" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="Book Count" dataKey="total_rentals" fill="#0066cc" />
      </BarChart>
    )
  }
}

export default GenreChart
