import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(images/budapest_night.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Welcome on my page! <br />
                            I'm Tamás
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="http://tamasmezo.com/#about"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Check my Resume
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/mountain.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            Working hard to make the internet
                            <br /> AWSOME
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/codesignerTM"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
