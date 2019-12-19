import React, { Component } from 'react';
// import Login from './Login'
// import Signup from './Signup'
import Home from './Home'
import NavBar from './NavBar'
import Registration from './Registration'
import Recipes from './Recipes'
import { connect } from 'react-redux'
import Account from './Account'
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";



//   const login = (props) => {
//       return (
//           <Login handleLogin={this.props.handleLogin} loggedInStatus={this.props.isLoggedIn}/>
//       )
//   }

  
//   const signup = (props) => {
//     return(
//         <Signup handleLogin={this.props.handleLogin} loggedInStatus={this.props.isLoggedIn} />
//     )
//   }


//   const home = (props) => {

//     return (
     
//         <div>HOME</div>
//     )
// }


const messages = (props) => {
    return (
        <div>MESSAGES</div>
    )
}








class MainContainer extends Component {



    handleRedirect = (event) => {
        const type = event.target.innerText

        if(type === "Account"){
            
        }
    }
    

    render() {
        return (

            <BrowserRouter>
            <div >
                {
                    this.props.auth.isLoggedIn ?
               
                
                <Switch>
                    
                    <Route 
                    exact path='/' 
                    render={props => (
                    <Home {...props} handleRedirect={this.handleRedirect}/>
                     )}
                    />

                

                    {/* <Route exact path = "/">
                      
                        <Home {...props} handleRedirect={this.handleRedirect} />
                        
                        </Route> */}

                    {/* <Route exact path = "/messages" component={messages}>

                        </Route> */}

                    <Route exact path = "/account">
                        
                        <Account handleRedirect={this.handleRedirect} auth={this.props.auth}/>
                        </Route>

                    </Switch>
                    :
                    <Registration handleLogin={this.props.handleLogin} loggedInStatus={this.props.isLoggedIn} /> 
                    }
            </div>
            </ BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
  })

export default connect(mapStateToProps)(MainContainer);