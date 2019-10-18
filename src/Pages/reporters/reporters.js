import React, { Component } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import "./reporters.css"
import Logo from "../../images/logo.jpeg"
import ReporterModal from "./new-reporter-modal"
import Cookie from "js-cookie"


export default class Reporters extends Component{
    constructor(){
        super();

        this.state = {
            reporters: [
                // {
                //     id: 1,
                //     picture: "https://images.app.goo.gl/Wmdb1r6xjBL85jf27",
                //     name: "Tina",
                //     description: "Likes long ted talks! In fact, so long that you cant even"
                // },
                // {
                //     id: 2,
                //     picture: "picture url",
                //     name: "Tina",
                //     description: "Likes long ted talks!"
                // },
                // {   
                //     id: 3,
                //     picture: "picture url",
                //     name: "Tina",
                //     description: "Likes long ted talks!"
                // },
                // {
                //     id: 4,
                //     picture: "picture url",
                //     name: "Tina",
                //     description: "Likes long ted talks!"
                // },
                // {
                //     id: 5,
                //     picture: "picture url",
                //     name: "Tina",
                //     description: "Likes long ted talks!"
                // },
                // {
                //     id: 6,
                //     picture: "picture url",
                //     name: "Tina",
                //     description: "Likes long ted talks!"
                // },
                // {
                //     id: 7,
                //     picture: "picture url",
                //     name: "Tina",
                //     description: "Likes long ted talks!"
                // },
                // {
                //     id: 8,
                //     picture: "picture url",
                //     name: "Tina",
                //     description: "Likes long ted talks!"
                // },
                // {
                //     id: 9,
                //     picture: "picture url",
                //     name: "Tina",
                //     description: "Likes long ted talks!"
                // },
                // {
                //     id: 10,
                //     picture: "picture url",
                //     name: "Tina",
                //     description: "Likes long ted talks!"
                // },
            ], 
            blogModalIsOpen: false,
            username: '',
            password: '', 
            loggedIn: false
        }
        this.renderReporters = this.renderReporters.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
        this.handleNewReporterClick = this.handleNewReporterClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount(){
        axios.get('https://desolate-bastion-18101.herokuapp.com/journalists').then(response => {
            this.setState({
                reporters: response.data
            })
            console.log(this.state.reporters)
        })
    }

    handleLogin(event){
        event.preventDefault();
        Cookie.set("USERNAME", this.state.username, {expires: 3})
        Cookie.set("PASSWORD", this.state.password, {expires: 3})
        this.setState({
            loggedIn: true
        })
    }

    handleUsername(event){
        this.setState({
            username: event.target.value
        })
        console.log(this.state.username)
    }

    handlePassword(event){
        this.setState({
            password: event.target.value
        })
        console.log(this.state.password)
    }

    renderReporters(){
        return this.state.reporters.map(reporter =>{
            return(
                <div className="individual-reporter-wrapper">
                    <div className="individual-reporter">
                        <img src="https://source.unsplash.com/random" className="reporter-picture"/>
                        <div className="reporter-name">{reporter.FName} {reporter.LName}</div>
                        <div className="reporter-description">{reporter.Description}</div>
                    </div>
                    <div className="link-button">   
                        <Link  to={`/reporter/${reporter.ID}`}>View Profile</Link>
                        {Cookie.get("USERNAME") && Cookie.get("PASSWORD") ? 
                        <button onClick={this.handleDelete} id={reporter.ID}>x</button>:
                        null
                    }
                        
                    </div> 
                </div>
                
            )
        })
    }

    handleModalClose() {
        this.setState({
          blogModalIsOpen: false
        });
        
      }
    handleNewReporterClick(){
        this.setState({
            blogModalIsOpen: true
        })
    }
    handleDelete(event){
        axios.delete(`https://desolate-bastion-18101.herokuapp.com/delJournal/${parseInt(event.target.id)}`).then(response =>{
            window.location.reload();
        }).catch(error =>{
            console.log(error)
        })
        
    }

    handleLogout(){
        Cookie.remove("USERNAME")
        Cookie.remove("PASSWORD")
        this.setState({
            username: '',
            password: ''
        })
    }


    render(){
        return(
            <div className="reporters-page-wrapper">
                <div className="navbar-wrapper">
                    <div className="navbar-logo">
                        <img src={Logo}></img>
                    </div>
                    
                        { Cookie.get("USERNAME") && Cookie.get("PASSWORD") ?
                        <div className="navbar-links">
                            <div className="link-wrapper">
                            <a href="/">Link 1</a>
                            </div>
                            <div className="link-wrapper">
                            <a href="/">Link 2</a>
                            </div>
                            <div className="link-wrapper">
                            <a href="/">Link 3</a> 
                            </div>
                            <div className="link-wrapper">
                            <a onClick={this.handleNewReporterClick}>Add Reporter</a>
                            </div>
                        </div>
                        :
                           null 

                        }
                        
                    <div className="navbar-username">{
                        Cookie.get("USERNAME") && Cookie.get("PASSWORD") ?
                        <div>
                            {Cookie.get("USERNAME")}
                            <button className="log-button" onClick={()=>{this.handleLogout()}}>Logout</button>
                        </div>

                         :
                        
                        <div> 
                            <input onChange={(event)=>{this.handleUsername(event)}} type="text" placeholder="Username"></input>
                            <input onChange={(event)=>{this.handlePassword(event)}} type="password" placeholder="Password"></input>
                            <button className="log-button" onClick={(event)=>{this.handleLogin(event)}}>Login</button>
                        </div>
                    }
                        
                    </div>
                </div>
                <div className="main-reporters-wrapper">
                    <ReporterModal
                        handleModalClose={this.handleModalClose}
                        modalIsOpen={this.state.blogModalIsOpen}
                        handleSubmit={this.handleSubmit}
                    />
                    {this.renderReporters()}
                </div>

                <footer className="footer-wrapper">
                    <div className="footer-links-wrapper">
                        <div className="footer-link-wrapper">
                            <a href="/">Link 1</a>
                        </div>
                        <div className="footer-link-wrapper">
                        <a href="/">Link 2</a>
                            </div>
                        <div className="footer-link-wrapper">
                            <a href="/">Link 3</a> 
                        </div>
                        <div className="footer-link-wrapper">
                            <a href="/">Link 4</a>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        &copy;2019 ReporterLove Inc. 
                    </div>
                </footer>
            </div>
        )
    }
}