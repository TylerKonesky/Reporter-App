import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { LoremIpsum } from "react-lorem-ipsum";
import ScrollUpButton from "react-scroll-up-button";

import "./reporter-detail.css";
import transparentLogo from "../../img/Reported_Logo_transparent.png";
import Axios from "axios";

export default class ReportersDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navside: false,
      userArticles: []
    };

    this.toggleNavSide = this.toggleNavSide.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    Axios.get(
      `https://desolate-bastion-18101.herokuapp.com/getArticle/${this.props.match.params.id}`
    ).then(response => {
      console.log(response.data);
      this.setState({ userArticles: response.data });
    });
  }

  toggleNavSide() {
    this.setState({
      navside: !this.state.navside
    });
  }

  render() {
    return (
      <div className="report-detail">
        <div onClick={this.toggleNavSide} className="toggle">
          <FaBars />
        </div>

        {this.state.navside ? (
          <div className="navbar">
            <div className="navbar-up">
              <div className="logo-img">
                <img src={transparentLogo} />
              </div>

              <div className="links-wrapper">
                <Link to={"/"} className="btn">
                  Link 1
                </Link>
                <Link to={"/"} className="btn">
                  Link 2
                </Link>
                <Link to={"/"} className="btn">
                  Link 3
                </Link>
                <Link to={"/"} className="btn">
                  Link 4
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        <div className="navbardefault">
          <div className="navbar-up">
            <div className="logo-img">
              <img src={transparentLogo} />
            </div>

            <div className="links-wrapper">
              <Link to={"/"} className="btn">
                Link 1
              </Link>
              <Link to={"/"} className="btn">
                Link 2
              </Link>
              <Link to={"/"} className="btn">
                Link 3
              </Link>
              <Link to={"/"} className="btn">
                Link 4
              </Link>
            </div>
          </div>
        </div>

        <div className="content-wraper">
          <div className="article-img">
            <img src="https://source.unsplash.com/random" />
          </div>

          <div className="title">
            <h1>{this.state.userArticles.Heading}</h1>
            <h4>{this.state.userArticles.Subheading}</h4>
          </div>

          <div className="content">
            <p className="opening-text">{this.state.userArticles.Body}</p>

            <div className="picture-n-text-wrapper">
              <div className="pic-n-text">
                <img
                  src="https://source.unsplash.com/random"
                  className="picture"
                />

                <LoremIpsum p={1} className="text" />
              </div>

              <div className="pic-n-text">
                <LoremIpsum p={1} className="text" />

                <img
                  src="https://source.unsplash.com/random"
                  className="picture"
                />
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="social-media-links">
              <FaFacebookF />

              <FaTwitter />

              <FaInstagram />
            </div>
            <div className="copyright">
              <p>copyright</p>
            </div>
            <div className="scroll-btn">
              <ScrollUpButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
