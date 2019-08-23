import React, { Component } from 'react';
import User from './components/User';
import Loading from './components/Loading';
import Header from './components/Header';
import './app.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:'',
      loading: false
    }
  }

  //Chamada da API
  getUser = () =>{
    this.setState({
      loading: true
    })
    const name = this.refs.name.value;

    setTimeout( () => {
      fetch(`http://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => {
        
        this.setState({
          user:data,
          loading:false
        });
    })
  },1000)

} 
  render(){
    const name = this.state.user.name
    let userPerfil;
    if(this.state.loading === true) {
      userPerfil = <div className='loagin-user-card'><Loading/></div>
    } else if (name) {
      userPerfil=<User user={this.state.user}/>
    }
    return (
      <div className='app'>
      <Header/>
        <div className='section-search'>
            <div id='search-bar'>
              <input type='text' placeholder='Digite um UserName' ref='name'/>
              <button className='search-btn' onClick={this.getUser}><i className="fas fa-search"></i>
              </button>
            </div>
        </div>
      {userPerfil}
      </div>
    )


  }
}
