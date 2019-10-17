import React, { Component } from "react";
// import axios from "axios";
import "./reporter-detail.css";
import transparentLogo from "../../img/Reported_Logo_transparent.png";
import blancImg from "../../img/img_square.png";

export default class ReportersDetail extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="report-detail">
        <div className="navbar">
          <div className="navbar-up">
            <div className="logo-img">
              <img src={transparentLogo} />
            </div>

            <div className="toggle">
              <i class="fas fa-bars"></i>
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

          <div className="navbar-end">
            <div className="logo-img2">
              {/* <img src={transparentLogo} /> */}
            </div>
          </div>
        </div>

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

            <div className="back-button">
              <button className="btn-top">back to top button</button>
            </div>
          </div>
          <div className="footer">
            <div className="social-media-links">
              <i class="fas fa-hashtag"></i>
              <i class="fas fa-hashtag"></i>
              <i class="fas fa-hashtag"></i>
              <i class="fas fa-hashtag"></i>
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
