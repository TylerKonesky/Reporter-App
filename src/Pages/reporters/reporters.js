import React, { Component } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import "./reporters.css"
import Logo from "../../images/logo.jpeg"
import ReporterModal from "./new-reporter-modal"


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
            blogModalIsOpen: false
        }
        this.renderReporters = this.renderReporters.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
        this.handleNewReporterClick = this.handleNewReporterClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        axios.get('https://desolate-bastion-18101.herokuapp.com/journalists').then(response => {
            this.setState({
                reporters: response.data
            })
            console.log(this.state.reporters)
        })
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
                        <Link  to={`/reporter/${reporter.id}`}>View Profile</Link>
                        <button onClick={this.handleDelete} id={reporter.ID}>x</button>
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


    render(){
        return(
            <div className="reporters-page-wrapper">
                <div className="navbar-wrapper">
                    <div className="navbar-logo">
                        <img src={Logo}></img>
                    </div>
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
                    <div className="navbar-username">Username</div>
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