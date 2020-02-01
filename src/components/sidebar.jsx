import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/spring2.png)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Tamás Mező</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> hello@tamasmezo.com
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      Me
                    </a>
                  </li>
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Story
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="colorlib-footer">
              <div>
                <a
                  href="https://www.facebook.com/tamas.mezo.58"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-facebook2" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/tam%C3%A1s-mez%C5%91-b80aa6136/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin2" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/codesignerTM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github"></i>
                </a>
              </div>
              <p>
                <small>
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    #colorlib
                  </a>
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
