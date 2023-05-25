import React, { useState, useEffect } from 'react';
import './App.css';

function RelojA() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getTransform = (hand, rotation) => ({
    transform: `rotate(${rotation}deg) translate(-50%, 0%)`
  });

  const secondRotation = date.getSeconds() * 6;
  const minuteRotation = date.getMinutes() * 6 + date.getSeconds() * 0.1;
  const hourRotation = (date.getHours() % 12) * 30 + date.getMinutes() * 0.5;

  return (
    <div className="App">
      <h1 className>Reloj Analógico</h1>
      <div className="clock">
        <div className="dial">
          <div className="hand hour-hand" style={getTransform('hour', hourRotation)}></div>
          <div className="hand minute-hand" style={getTransform('minute', minuteRotation)}></div>
          <div className="hand second-hand" style={getTransform('second', secondRotation)}></div>
        </div>
      </div>
    </div>
  );
}

export default RelojA;
