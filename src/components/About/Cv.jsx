import React from "react";

class Cv extends React.Component {
  render() {
    return (
      <div className="p-4">
        <div className="text-center">
          James Savali,
          <strong className="text-bold">
            &nbsp;&nbsp;Senior Software Engineer
          </strong>
          <br></br>
          Email: <label className="text-muted">savalijey@gmail.com</label>
          <br></br>
          Languages: English
          <br></br>
          Nationality: Kenyan
          <br></br>
        </div>

        <hr></hr>

        <div className="text-left text-sm" style={{ fontSize: "15.5px" }}>
          <h6>
            <b>Profile</b>
          </h6>
          <p className="p-2 text-mute">
            Backed by 5 years of hands-on experience, I am an accomplished
            backend software engineer proficient in Python and Javascript. My
            expertise lies in developing scalable and robust applications,
            showcasing strong problem-solving skills and a commitment to
            innovation. Effective communication, coupled with successful
            collaboration within cross-functional teams, has consistently led to
            the on-time delivery of high-quality software solutions. Rooted in
            software engineering principles, I am driven by a commitment to
            ongoing professional development and consistently aim for
            exceptional results in backend development.
          </p>
        </div>
        <hr></hr>

        <div className="text-left text-sm" style={{ fontSize: "15.5px" }}>
          <h6>
            <b>Skills</b>
          </h6>
          <div className="container-fluid row">
            <div className="col-md-6 p-1">
              Languages & Frameworks
              <hr className="normal-hr-2"></hr>
              <ul className="pl-4">
                <li>Python</li>
                <li>Flask</li>
                <li>Django</li>
                <li>Django Rest Framework (DRF)</li>
                <li>Patterns: (MVC), Rest APIs and GraphQL.</li>
                <li>Bs4, Selenium, Scrapy, Numpy, Pandas</li>
                <li>PostgreSQL, MySQL, MongoDB</li>
                <li>Javascript</li>
                <li>React</li>
                <li>HTML/SCSS/Bootstrap/Tailwind</li>
              </ul>
            </div>
            <div className="col-md-6 p-1">
              Other Tech Skills & Tools
              <hr className="normal-hr-2"></hr>
              <ul className="pl-4">
                <li>Web development and integration of payment solutions</li>
                <li>
                  CI/CD: Github Actions, AWS, <br /> Digital Ocean
                </li>
                <li>Deployment, config & management of docker containers.</li>
                <li>Logging & Metrics tools - Cloudwatch, Datadog.</li>
                <li>Testing & linting: TravisCI, CircleCI</li>
                <li>Data scraping, analysis and visualization</li>
              </ul>
            </div>
          </div>

          <div className="text-left text-sm">
            <hr></hr>
            <h6>
              <b>Work Experience</b>
            </h6>
            <div className="text-left text-sm" style={{ fontSize: "15.5px" }}>
              <b>Senior Backend Engineer at Teya</b>
              <br></br>
              <label className="text-muted">March 2022 - Current</label>
              <br></br>
              <p className="pl-2 text-mute">
                Developing and integrating payment solutions using Python,
                Django, and JavaScript. Collaborating efficiently with the QA
                team, conducting thorough testing and addressing software
                defects to achieve a high level of application quality.
              </p>
            </div>
            <div className="text-left text-sm" style={{ fontSize: "15.5px" }}>
              <b>Lead Full stack Engineer at Playfooz</b>
              <br></br>
              <label className="text-muted">November 2021 - March 2022</label>
              <br></br>
              <p className="pl-2 text-mute">
                Led the development of the ArabMillionaire sports betting and
                online gaming web application, utilizing React.js & Django,
                resulting in a responsive, intuitive and robust user interface.
              </p>
            </div>
            <div className="text-left text-sm" style={{ fontSize: "15.5px" }}>
              <b>Senior Backend Engineer at UNXD</b>
              <br></br>
              <label className="text-muted">June 2021 - Oct 2021</label>
              <br></br>
              <p className="pl-2 text-mute">
                Orchestrated the implementation of RESTful APIs for an nft
                auctioning platform for the company, facilitating seamless
                communication between the front-end and back-end systems. The
                platform successfully ran the Dolce & Gabana 'Collezione Genesi'
                auction for a whole week, and the company was able to generate
                $5.7 Million worth of sales.
              </p>
            </div>
            <div className="text-left text-sm" style={{ fontSize: "15.5px" }}>
              <b>Freelance Software Engineer at Upwork</b>
              <br></br>
              <label className="text-muted">January 2021 - Current</label>
              <br></br>
              <p className="pl-2 pb-2 text-mute">
                Successfully delivered 8 complex projects on time, ensuring high
                client satisfaction. Conceptualized RESTful APIs and integrated
                third-party services to enhance application functionality.
                Applied Agile methodologies to guarantee the punctual delivery
                of projects.
              </p>
            </div>
            <div className="text-left text-sm" style={{ fontSize: "15.5px" }}>
              <b>Software Engineer at Medbook Africa, Nairobi</b>
              <br></br>
              <label className="text-muted">October 2019 - December 2020</label>
              <br></br>
              <p className="pl-2 text-mute">
                Contributed to the successful completion of 2 major projects
                aimed at facilitating medical insurance claims, meeting project
                timelines, and exceeding client satisfaction. Initiated
                comprehensive code reviews, resulting in an improvement in code
                quality.
              </p>
            </div>
            <b>Software Engineer at Andela, Nairobi</b>
            <br></br>
            <label className="text-muted">
              September 2018 - September 2019
            </label>
            <br></br>
            <p className="pl-2 text-mute">
              Developed an in-house Slack web application with Python, Django,
              and React, optimizing internal staff management. Integrated
              RESTful APIs to enhance system performance and reduce data
              transfer time. Conducted code reviews and implemented automated
              testing to minimize post-deployment issues, ensuring high software
              quality.
            </p>
          </div>
        </div>

        <hr></hr>
        <div className="text-left text-sm" style={{ fontSize: "15.5px" }}>
          <h6>
            <b>Education</b>
          </h6>
          Bachelor of Science in Computer Science, Multimedia University of
          Kenya, Nairobi
          <br></br>
          <label className="text-muted">September 2015 - April 2020</label>
          <p className="pl-2 text-mute">
            This course has helped to build my understanding of a wide range of
            software, and technological ICT skills required by the industry
          </p>
        </div>

        <hr></hr>
        <div className="text-left text-sm">
          <h6>
            <b>Hobbies</b>
          </h6>
          <p className="pl-2 text-mute">Travelling, Hiking</p>
        </div>

        <hr></hr>
        <div className="text-left text-sm" style={{ fontSize: "15.5px" }}>
          <h6>
            <b>References</b>
          </h6>
          <div className="container row">
            <div className="col-md-6 text-mute pb-4">
              Frank Magoba<br></br>
              Software Engineer, Medbook Africa<br></br>
              franklinmagoba4@gmail.com<br></br>
            </div>
            <div className="col-md-6 text-mute">
              Hesbon Maiyo<br></br>
              Software Engineer, Yoyo Wallet<br></br>
              hesbonkiptoo1996@gmail.com<br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cv;
