import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthService from '../services/AuthService';
import { withRouter } from "react-router-dom";
import {UserContext} from '../context/currentUser';
const fetch = require("node-fetch");



class Login extends Component {
    static propTypes= {
        setCurrentUser: PropTypes.func
    }

    

    constructor(props) {    
        super(props);    
        this.state = {      
            email: null,
            password: null
        };  
        this.submitHandler = this.submitHandler.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    static contextType = UserContext;
    
    submitHandler = async (event) => {
        event.preventDefault();
        const jwt_token = await AuthService.login(this.state.email, this.state.password)
   
    //   const response = await fetch('http://127.0.0.1:8000/account/api/login', {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: "email=dsf@gmail.com&password=123456789"
    //     })
        // const jwt_token =await  response.headers.get('auth-token');
        if (typeof(jwt_token)!=='undefined') {
            this.context.setCurrentUser(jwt_token) 
            this.props.history.push('/');
        }
    }

    handleInputChange(event) {
        // this.props.history.push('/');
        const target = event.target;
        let email;
        let password;
        if (target.name === "email") {
            email = target.value;
        } else if (target.name === "password") {
            password = target.value;
        }
        if (typeof(password) !== "undefined") {
            this.setState({
                password: password    
            });
        }
        if (typeof(email) !== "undefined") {
            this.setState({
                email: email
            });
        } 
    }

    render() {
      return (
        <body className="login-content">
                <div className="login-panel">
                    <form onSubmit={this.submitHandler}>
                    <div className="title">XXX区块链后台管理平台<br/>管理员登录</div>
                    <input id="username" type="text" name="email" placeholder="type your username" 
                    onChange={this.handleInputChange}/>
                    <input id="password" type="password" name="password" placeholder="type your password" 
                    onChange={this.handleInputChange}/>
                    <div style={{height: "5px"}}></div>
                    <input type="checkbox"  value="type your password" /><label>Remeber the password</label>
                    <input type="submit" value="login"/>
                    <div className="error-info"></div>
                </form>
                </div> 
            </body>
            );
        }
  }

export default withRouter(Login);
