import React, { Component } from 'react';
const postOption= {
  method:'POST',
  headers:{
        'Content-Type': 'application/json',
        'Authorization':'Bearer my token',
        'My-Custom-Header':'footer'
  },
  body: JSON.stringify({title: "post example"})
};

class AddTab extends Component {
  state = { getMsg: 'init'};


  componentDidMount(){


    this.setState({getMsg: 'loading'});
    this.apiGet().then((res => this. setState({getMsg: res.message}))).then(console.log('done')).catch(err =>console(err));
  };

  apiGet = async () =>{
    const response = await fetch('/get');
    const body = await response.json();

    if(response.status!== 200){
      throw Error(body.message);
    }

    return body;

  };

  apiSend = async () =>{
    const response = await fetch('/post',postOption);
    const body = await response.json();

    if(response.status!== 200){
      throw Error(body.message);
    }

    return body;

  };


    render() {
      return (
        <div>
          <h1>Tab</h1>
          <p>{this.state.getMsg}</p>
          <p>received</p>
        </div>        
      );
    }
  }
   
  export default AddTab;