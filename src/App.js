import React, { Component } from 'react'
import './App.css';
import Table from './Table.js';



class App extends Component {

  constructor(props){
    super(props);

    this.state =  {
      users: {
        userData: [],
        userRepos: []
      }
    }
  }
    async componentDidMount () {
      this.getUser('https://api.github.com/users/Jeanluca-Moren0')
      .then(this.getUser('https://api.github.com/users/Vicpepe12'));
  }
  
  
    async getUser(url) {
      async function getAPI(url) {
        let response = await fetch(url);
        let userJson = await response.json();
        return userJson; 
      }

      let userJson = await getAPI(url);
      let reposURL = userJson.repos_url;
      let response = await fetch(reposURL);
      let reposJson = await response.json();
      this.setState({
        users: {
          userData: [...this.state.users.userData, userJson],
          userRepos: [...this.state.users.userRepos, reposJson]
        }
      })
    }
    

  
  render(){
    console.log(this.state.users.userData)
    const user = this.state;
    return(
    <><h1>Fetch API GitHub</h1>
    <hr/>

    
    <div className='container'>
        <Table array={user.users.userData}/>
    </div>
    </>)
  }
} 

export default App
