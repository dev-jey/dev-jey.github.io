import React from 'react';
import './App.css';
class App extends React.Component {
  componentDidMount() {

    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName('typewrite');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };
  }
  render() {
    return (
      <div className="App mx-auto">
        <section className="intro text-center" id="title-section">
          <div className="title-text wow slideIn">
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
        <br></br>
        <br></br>
        <section className="about-me container-fluid" id="about-me">
        <div className="row">
          <div className="card about-info col-md-6">
            <h2 className="title">About me</h2>
            <hr></hr>
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
          <div className="col-md-5">
            <img src="https://b.kisscc0.com/20180705/kzw/kisscc0-programmer-computer-programming-download-hacker-african-programmer-with-slower-internet-5b3e30f90c1952.9016927115308024250496.png" alt=""  width="70%" height="375" 
            className="mx-auto d-flex flex-wrap align-items-center"/>
          </div>
          </div>
        </section>
        <section>
          Skills
        </section>
      </div>
    );
  }
}

export default App;
