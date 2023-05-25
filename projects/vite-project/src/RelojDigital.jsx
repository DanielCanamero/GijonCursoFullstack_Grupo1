import React, { Component } from 'react';

class RelojDigital extends Component { 
  constructor(props) { //definimos el constructor de la clase RD, toma el objeto props como argumento
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() { //pasan los segundos
    this.timerID = setInterval(
      () => this.tick(), //actualiza el estado de date
      1000
    );
  }

  componentWillUnmount() { //detiene la actualización del reloj
    clearInterval(this.timerID);
  }

  tick() { //actualiza el estado de date 
    this.setState({
      date: new Date()
    });
  }

  render() { 
    return ( //pasa la hora regional del usuario
      <div>
        <h1>Reloj Digital</h1>
        <h2>Son las: {this.state.date.toLocaleTimeString()}.</h2> 
      </div>
    );
  }
}

export default RelojDigital;
