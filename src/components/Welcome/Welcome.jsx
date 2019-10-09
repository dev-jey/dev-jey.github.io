import React, { Component } from 'react';
import './Welcome.css';

export class Welcome extends Component {
    render() {
        return (
            <section className="intro text-center" id="title-section">
                <div className="title-text wow slideIn col-sm-10 col-sm-12 col-lg-12">
                    <div>
                        <img src="https://res.cloudinary.com/dw675k0f5/image/upload/v1570647972/__254_708_197333__20190127_223752.jpg"
                            width="200"
                            height="200"
                            className="rounded-circle mx-auto d-block img-responsive"
                            alt="" />
                        <div class="rank-label-container">
                            <label htmlFor="file-upload" class="rank-label">
                                <img src="https://res.cloudinary.com/dw675k0f5/image/upload/v1570648506/flag.png" width="20" alt="" />
                            </label>
                        </div>
                    </div>
                    <i>Oh! Hello, Nice to meet you</i>
                    <h1 className="title">Hi there, &nbsp;
          <label class="typewrite" data-period="2000" data-type='[ "Am J.Savali.", "Am Creative.", "Am full stack Js.", "I Love Coding." ]'>
                            <span class="wrap"></span>
                        </label></h1>
                    <p>
                        I am an experienced software developer with a deep passion in programming.
        <br></br>
                        I am focused in my passion, and I believe I will positively<br></br> impact the world with my skills.
        </p>
                </div>
                <i className="fas fa-arrow-circle-down fa-5x"></i>
            </section>
        )
    }
}

export default Welcome
