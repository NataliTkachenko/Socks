import React from 'react';

export default function Main() {
  const styles = {
    backgroundColor: 'grey',
    padding: '20px'
  };

  const btnStyles = {
    backgroundColor: 'turquoise',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={styles}>
      <h1>Самое время быть уникальным!</h1>
      <a href = "/sockscreate"><button style={btnStyles} type="submit">Смоделируй свою любимую пару носков!</button></a>
    </div>
  );
}