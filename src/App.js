import React from 'react';
import './App.css';
<<<<<<< HEAD
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Pastwork from './components/Pastwork/Pastwork';
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
        <Welcome />
        <br></br>
        <br></br>
        <br></br>
        <About />
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <Skills />
        <br></br>
        <br></br>
        <br></br>
        <Pastwork />
      </div>
    );
  }
=======
const App = () => {
  return (
    <div className="App mx-auto">
      <section className="intro text-center">
        <i>Oh! Hello. Nice to meet you</i>
        <h1 className="title">Hi there,
        My name is James Savali.</h1>
        <p>
          I am an experienced software developer witha deep passion in programming.
        <br></br>
          I am focused in my passion, and i believe i will positively<br></br> impact the world with my skills.
        </p>
      </section>
    </div>
  );
>>>>>>> Create react app boiler plate
}

export default App;
