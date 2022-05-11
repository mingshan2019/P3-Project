import React, { Component } from 'react';


class AddTab extends Component {
  state = { getMsg: 'init'};

  componentDidMount(){
    this.setState({getMsg: 'loading'});
    this.callAPI().then((res => this. setState({getMsg: res.message}))).then(console.log('done')).catch(err =>console(err));
  };

  callAPI = async () =>{
    const response = await fetch('/connect');
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