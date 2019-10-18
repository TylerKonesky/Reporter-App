import React, { Component } from "react";
import { FaBars, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// import { SideNav, Nav, NavContext } from "react-sidenav";
import ScrollUpButton from "react-scroll-up-button";

import "./reporter-detail.css";
import transparentLogo from "../../img/Reported_Logo_transparent.png";
import blancImg from "../../img/img_square.png";
import { tsPropertySignature } from "@babel/types";

export default class ReportersDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navside: false
    };

    this.toggleNavSide = this.toggleNavSide.bind(this);
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
                <button className="btn">button</button>
                <button className="btn">button</button>
                <button className="btn">button</button>
                <button className="btn">button</button>
                <button className="btn">button</button>
                <button className="btn">button</button>
              </div>
            </div>
          </div>
        ) : null}

        <div className="content-wraper">
          <div className="article-img">
            <img src={blancImg} />
          </div>

          <div className="title">
            <h1>Header</h1>
            <h4>Subheader</h4>
          </div>

          <div className="content">
            <p className="opening-text">opening text</p>

            <div className="picture-n-text-wrapper">
              <div className="pic-n-text">
                <img src={blancImg} />
                <p>text</p>
              </div>

              <div className="pic-n-text">
                <p>Text</p>
                <img src={blancImg} />
              </div>
            </div>

            <div className="scroll-btn">
              <ScrollUpButton />
            </div>
          </div>
          <div className="footer">
            <div className="social-media-links">
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
            </div>
            <div className="copyright">
              <p>copyright</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
