import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <section className="about-me container-fluid" id="about-me">
                <br></br>
                <div className="text-center">
                    <h2 style={{ textTransform: "uppercase" }}>Personal Info</h2>
                    <hr className="normal-hr"></hr>
                </div>
                <br></br><br></br>
                <div className="row">
                    <div className="card about-info col-md-6">
                        <h2 className="title">About me</h2>
                        <hr className="normal-hr"></hr>
                        <br></br>
                        <div className="text-muted">
                            Hey there, I am a young aspiring Kenyan-based intermediate software developer. I am a skilled programmer with the standard best practices and conventions in contemporary programming.  I am a professional software developer, majorly dealing with mobile and web development. On mobile development, I have skills in ios and android development (languages: flutter, java, and react-native). On web app development, my specialty is in
                            both frontend and backend frameworks.
     In addition, I have project management skills, and I majorly work with Jira and pivotal tracker in the teams I have worked with before. I have worked with both SQL and NoSQL database management systems, and I am highly proficient in PostgreSQL, MySQL, SQLite and MongoDB.  I also regularly use other online tools to help in development and design. I've been a web and native apps programmer(both desktop and mobile) for the last 3 years and I'm looking for some additional work to fill in the gaps between my longer-term projects.
                        </div>
                    </div>
                    <div className="col-md-5 mx-auto">
                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" width="100%" height="100%"
                            style={{ paddingTop: "3%" }} />
                    </div>
                </div>
            </section>
        )
    }
}

export default About
