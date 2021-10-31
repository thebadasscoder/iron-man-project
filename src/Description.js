import React, { Component } from 'react';

class Description extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    const heroUrl = 'http://gateway.marvel.com/v1/public/characters';
    const publicKey = 'Cbb530c155c9e17b6ee5191f960ac608';
    const privateKey = '0fa56a9548b67cd96e06097e77e7c6f7a5f81647';
    const timeStamp = new Date().getTime();

    const md5 = require('md5');
    const hashKey = md5(publicKey + privateKey + timeStamp);
    console.log(hashKey, ': new key <====');

    // console.log(publicKey, privateKey, timeStamp);
  }
  render() {
    return (
      <div>
        <p>
          Wounded, captured and forced to build a weapon by his enemies,
          billionaire industrialist Tony Stark instead created an advanced suit
          of armor to save his life and escape captivity. Now with a new outlook
          on life, Tony uses his money and intelligence to make the world a
          safer, better place as Iron Man.
        </p>
      </div>
    );
  }
}

export default Description;
