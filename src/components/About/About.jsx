import React, { Component } from 'react'
import Cv from './Cv';
import { PDFExport } from '@progress/kendo-react-pdf';

export class About extends Component {
    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
    }
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
                        <div className="row"><h2 className="title col-4">Resume</h2>
                        <button className="k-button col-7 float-right" onClick={this.exportPDFWithComponent}>Download Resume</button>
                        </div>
                        <hr className="normal-hr"></hr>
                        <br></br>
                        <PDFExport paperSize={'A4'}
                        margin="2cm"
                            fileName="james_savali_resume.pdf"
                            title=""
                            subject=""
                            keywords=""
                            ref={(component) => this.pdfExportComponent = component}
                            >
                            
                            <Cv />
                        </PDFExport>
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
