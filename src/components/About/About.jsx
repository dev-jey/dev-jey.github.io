import React, { Component } from 'react'
import Cv from './Cv';
import { PDFExport } from '@progress/kendo-react-pdf';
import ReactGA from 'react-ga';

import Loader from '../Loader/Loader';


function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1500));
  }
export class About extends Component {

    state = {
        loading: true
      };

    exportPDFWithComponent = () => {
        ReactGA.event({
            category: 'Downloads',
            action: 'Downloaded my CV'
          });
        this.pdfExportComponent.save();
    }

  componentDidMount(){
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
    
    render() {

    const { loading } = this.state;
    if(loading) { 
      return <Loader />; 
    }
        return (
            <section className="about-me container-fluid" id="about-me">
                <br></br>
                <br></br><br></br>
                <div className="row">
                    <div className="card about-info col-md-6 mx-auto">
                        <div className="row">
                        <button className="btn btn-warning col-md-4 d-block ml-auto mt-3" onClick={this.exportPDFWithComponent}>Download Resume</button>
                        </div>
                        <br></br>
                        <PDFExport paperSize={'A4'}
                            margin="1.5cm"
                            forcePageBreak=".page-break"
                            scale={0.7}
                            fileName="james_savali_resume.pdf"
                            title=""
                            subject=""
                            keywords=""
                            ref={(component) => this.pdfExportComponent = component}
                            >
                            
                            <Cv />
                        </PDFExport>
                    </div>
                </div>
            </section>
        )
    }
}

export default About
