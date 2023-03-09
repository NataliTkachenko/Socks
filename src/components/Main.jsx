import React from 'react';
import Footer from './Footer';

export default function Main() {
  const styles = {
    backgroundColor: 'white',
    padding: '20px',
    dipslay: 'flex',
    textAlign: 'center',
    marginTop: '100',
    minHeight: '100vh',
  };

  const btnStyles = {
    backgroundColor: 'turquoise',
    color: 'black',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    width: '500px',
    height: '100px',
    marginTop: '50px',
    fontSize: '23px',

  };

  const socksCont = {
    marginTop: '40px',
    display: 'flex',
    flexWrap: 'wrap',
    paddingRight: '10px',
    justifyContent: 'space-around',
  };

  const oneSock = {
    width: '550px',
    height: '450px',
    paddingLeft: '5px',
    paddingTop: '5px',

  };

  return (
    <>
      <div style={styles}>
        <h1>Самое время быть уникальным!</h1>
        <a href="/sockscreate"><button style={btnStyles} type="submit">Смоделируй свою любимую пару носков!</button></a>
        <div style={socksCont}>
          <div>
            <img src="./Img/socks/s1.png" style={oneSock} alt="sock1" />
          </div>
          <div>
            <img src="./Img/socks/s2.png" style={oneSock} alt="sock2" />
          </div>
          <div>
            <img src="./Img/socks/s3.png" style={oneSock} alt="sock3" />
          </div>
          <div>
            <img src="./Img/socks/s4.png" style={oneSock} alt="sock4" />
          </div>
          <div>
            <img src="./Img/socks/s5.png" style={oneSock} alt="sock5" />
          </div>
          <div>
            <img src="./Img/socks/s6.png" style={oneSock} alt="sock6" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
