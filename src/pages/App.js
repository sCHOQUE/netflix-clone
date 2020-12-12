import React, { Component } from 'react';
import api from '../api.js';
import Boxes from '../components/boxes';


class App extends Component {
  state = {
    series: []
  };
  componentDidMount () {
    this.getSeries();
  }

  getSeries = async () => {
    const response = await api.get('');
    console.log(response)
    this.setState({
      series: response.data
    })
  }

  renderSeries = () => {
    const { series } = this.state;


    return series.map((data) => (
      <Boxes 
        key={data.id}
        info={data}
      />
    ))
  }

  render(){
    return(
      <div className = "main_div">
        <div className = "boxes_series">
          {this.renderSeries()}
        </div>
      </div>
    )
  }
}

export default App;
