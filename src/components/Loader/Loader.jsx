import React, { Component } from 'react';
import './Loader.css';

export class Loader extends Component {
    render() {
        return (
            <div id="loading-spinner">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div class="spin-icon"></div>
                <br></br>
                <div className="text-center mx-auto my-auto">Loading</div>
            </div>

        )
    }
}

export default Loader
