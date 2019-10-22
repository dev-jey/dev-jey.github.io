import React from 'react';

class Cv extends React.Component{
    render(){
        return <div className="p-4">
        <div className="text-center">James Savali, <label className="text-muted"> Software Engineer</label>
            <br></br>
            Email: savalijey@gmail.com
            <br></br>
            Mobile No. +254708197333
            <br></br>
            Languages: English, Kiswahili
            <br></br>
            <div className="col-md-4 text-center mt-2 mx-auto">
            <a href="https://github.com/dev-jey"  target="_blank" rel="noopener noreferrer" className="text-dark"><i class="fab fa-github fa-2x p-1"></i></a>
            <a href="https://www.linkedin.com/in/devjey/"  target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x p-1"></i></a>
            <a href="https://stackoverflow.com/users/10687724/jey-savali/"  target="_blank" rel="noopener noreferrer"><i class="fab fa-stack-overflow fa-2x p-1"  style={{color:'orange'}}></i></a>   
            </div>
        </div>

        <hr></hr>

        <div className="text-left text-sm">
            <h6><i class="fas fa-user fa-sm"></i>&nbsp;Profile</h6>
            <p className="p-2 text-mute">
            I am a passionate software developer with over 2 years experience in the
            field. My main stack is Python (Flask/Django) but I also have experience with
            React-Redux. I am proficient in PostgreSQL, SQL, HTML, CSS. I have experience working with a team using an agile methodology to
            develop the applications
            </p>
        </div>
        <hr></hr>

        <div className="text-left text-sm">
            <h6><i class="fas fa-tools fa-sm"></i>&nbsp;Skills</h6>
            <div className="container-fluid row">
                <div className="col-6 p-1">Personal Attributes
                    <hr className="normal-hr-2"></hr>
                    <ul className="pl-4">
                        <li>Good communication skills</li>
                        <li>Team collaboration</li>
                        <li>Action on feedback</li>
                    </ul>
                    Other Skills
                    <hr className="normal-hr-2"></hr>
                    <ul className="pl-4">
                        <li>DevOps(aws & GCP) & CI/CD</li>
                        <li>Patterns (MVC). Rest APIs and GraphQL.</li>
                        <li>Testing & linting</li>
                        <li>UI/UX design with Invision</li>
                    </ul>
                </div>
                <div className="col-6 p-1">Professional skills
                    <hr className="normal-hr-2"></hr>
                    Flask
                    <div class="progress" style={{height: "6px" }}>
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    Django
                    <div class="progress" style={{height: "6px" }}>
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: "99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    Node js(express)
                    <div class="progress" style={{height: "6px" }}>
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: "93%"}} aria-valuenow="93" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    Angular
                    <div class="progress" style={{height: "6px" }}>
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    React
                    <div class="progress" style={{height: "6px" }}>
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: "99%"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    HTML/CSS/Sass
                    <div class="progress" style={{height: "6px" }}>
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    PostgreSQL, MySQL, MongoDB
                    <div class="progress" style={{height: "6px" }}>
                    <div class="progress-bar bg-dark" role="progressbar" style={{ width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>

        <hr></hr>
        <div  className="text-left text-sm">
            <h6><i class="fas fa-briefcase fa-sm"></i>&nbsp;Work Experience</h6>
            Software Engineer at Andela, Nairobi<br></br>
            <label className="text-muted">January, 2019 - September, 2019</label><br></br>
            <i className="p-2" style={{fontSize:"11px"}}>January, 2019 - April, 2019</i>
            <p className="pl-2 text-mute">
            I was part of a team that worked on a product called Authors Haven. This is
            a social platform that allowed authors to create articles as well as reading
            them. The stacks used are; Python Django for the back-end and React-Redux
            for the front-end.
            </p>
            <hr className="normal-hr-2"></hr>
            <i className="p-2" style={{fontSize:"11px"}}>May, 2019 - Sep, 2019</i>
            <p className="pl-2 text-mute">
            I was part of a team that worked on a product called Authors Haven. This is
            a social platform that allowed authors to create articles as well as reading
            them. The stacks used are; Python Django for the back-end and React-Redux
            for the front-end.<br></br>
            Achievements:<br></br>
            <ul className="pl-4">
                <li>Reduced the amount of money spend by the company on transport by more than 10%</li>
            </ul>
            </p>
            
            </div>
    </div>



        
    <hr></hr>
    <div  className="text-left text-sm">
            <h6><i class="fas fa-book-reader fa-sm"></i>&nbsp;Education</h6>
            Bachelor of Science in Computer Science, Multimedia University of Kenya, Nairobi
            <br></br>
            <label className="text-muted">September, 2015 - Present</label>
            <p className="pl-2 text-mute">
            This course helped to build my understanding of a wide range of software, technical and technological ICT skills required by the industry
            </p>
        </div>

    <hr></hr>
    <div  className="text-left text-sm">
            <h6><i class="fas fa-swimmer fa-sm"></i>&nbsp;Hobbies</h6>
            <p className="pl-2 text-mute">
                Skating, Swimming, Reading Novels
            </p>
    </div>

    <hr></hr>
    <div  className="text-left text-sm">
            <h6><i class="fas fa-user-friends fa-sm"></i>&nbsp;References</h6>
            <div className="container row">
                <div className="col-6 text-mute">
                Dr. Kiiru Dishon<br></br>
                Lecturer, Multimedia University<br></br>
                dtkiiru@gmail.com<br></br>
                +254722858508
                </div>
                <div className="col-6 text-mute">
                Christine Ndinda Nzioka<br></br>
                Business Woman,<br></br>
                    P.O Box 40-90125 Kikima.<br></br>
                +25490545499
                </div>
            </div>
    </div>


    </div>
    }
}
export default Cv;