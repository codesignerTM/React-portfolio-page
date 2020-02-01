import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h2 className="colorlib-heading animate-box">#Story</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-label">
                        <h2>
                          Full-stack JS engineer / Team lead{" "}
                          <span>2019.02-present</span>
                        </h2>
                        <p>
                          Improving the inner softwares of the company.
                          Developing a complete admin system to automate the
                          workflow of the sales and office departments. Creating
                          landing pages, implementing new features and design
                          changes concerning the client side of the webapps.
                          Developing APIs and handling the databases of the
                          systems.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-label">
                        <h2>
                          IT Project manager / Freelance web developer{" "}
                          <span>2017-2019</span>
                        </h2>
                        <p>
                          Connecting the management and the software developer
                          agency to ensure effective IT development.
                          Participating in the feature and functionality
                          planning of the app and communicating them to the
                          engineers. Developing and maintaining the webpageof
                          the company and undertaking other webpage projects as
                          a freelance webdeveloper
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-label">
                        <h2>
                          Consultant <span>2015-2017</span>
                        </h2>
                        <p>
                          Offering advices and expertise to organizations to
                          help them improve their business performance in terms
                          of operation, profitability, management, structure and
                          strategy. Conducting research and surveys, analyzing
                          statistics, detecting isues and implementing the
                          agreed solutions.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
