import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <h2 className="colorlib-heading">#Me</h2>
                      <p>
                        Hello, I'm Tamás, a software engineer based in Budapest,
                        who enjoys building things that live on the internet. I
                        develop websites and web apps that provide intuitive,
                        pixel-perfect user interfaces with efficient and modern
                        backends. I'm experienced in developing products for the
                        web, from simple landing pages to full-fledged web apps.
                        I have a strong focus on user experience to engage
                        audience, but also love to work with modern backend
                        technologies to provide full scale solutions for
                        clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="colorlib-heading">#Experience</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Webpage development </h3>
                    <p>
                      Let's create your unique website to run across multiple
                      devices! I will make sure to cover the message you wanna
                      send to your audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Web Application developement</h3>
                    <p>
                      Do you need a web app with multiple pages and cool
                      features? Feel free to message me so we can discuss the
                      details. I will ensure to use the latest technologies out
                      there.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Mobile App developement</h3>
                    <p>
                      Mobile apps are so trending now! If your business could
                      use one, or you have a super idea of a mobile app product,
                      do not hesitate contact me.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
