import React, { Component } from 'react';

class Description extends Component {
  state = {
    data: []
  };

  getData() {
    // const url = 'https://superheroapi.com/api';
    // const tokenKey = '5173967472619665';
    // const heroId = '346';

    // let newUrl = url + '/' + parseInt(tokenKey) + '/' + parseInt(heroId);

    fetch('https://superheroapi.com/api/5173967472619665/346', {
      "method": "GET"
    })
    .then((response) => response.json())
    .then((result) => this.setState({data: result}))
  }

  componentDidMount() {
    this.getData();
    // ** INITIAL API KEY IMPLEMENTATION BEGINS HERE **
    // const  ts = new Date().getTime();
    // const  publicKey = 'Cbb530c155c9e17b6ee5191f960ac608';
    // const privateKey = '0fa56a9548b67cd96e06097e77e7c6f7a5f81647';
    // const md5 = require('md5');
    // const hashKey = md5(ts + publicKey + privateKey);
    // fetch('http://gateway.marvel.com/v1/comics/?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hashKey, {
    //   "method": "GET"
    // })
    // .then((response) => response.json())
    // .then((result) => this.setState({data: result.response}))
    // .catch(err => {
    //   console.log(err, 'there is an error!')
    // })
    // console.log(this.state.data ,'<=== before')
    // console.log(ts);
    
    // ** INITIAL API KEY IMPLEMENTATION ENDS HERE **
  }

  render() {
    // console.log(this.state.data);
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
