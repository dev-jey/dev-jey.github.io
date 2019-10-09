import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <section className="about-me container-fluid" id="about-me">
                <div className="text-center">
                    <h2 style={{textTransform:"uppercase"}}>Personal Info</h2>
                    <hr className="normal-hr"></hr>
                    <div className="text-muted col-8 mx-auto">ipsum dolor sit amet, consectetur adipiscing elit,
                                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                             </div>
                </div>
                <br></br><br></br>
                <div className="row">
                    <div className="card about-info col-md-6">
                        <h2 className="title">About me</h2>
                        <hr className="normal-hr"></hr>
                        <br></br>
                        <div className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                             nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>
                    <div className="col-md-5 mx-auto">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1200px-Code.org_logo.svg.png" alt="" width="100%" height="100%"
                            style={{ paddingTop: "3%" }} />
                    </div>
                </div>
            </section>
        )
    }
}

export default About
