import React, { Component } from 'react';
import './Pastwork.css';

export class Pastwork extends Component {
    render() {
        return (
            <div>
                <div class="p-5 p-work rounded mb-5">
                <br></br><br></br>
                    <header class="mb-5 text-center">
                        <h2 class="text-uppercase">My Previous Works</h2>
                        <hr className="normal-hr"></hr>
                    </header>
                    <ul id="myTab2" role="tablist" class="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center">
                        <li class="nav-item flex-sm-fill">
                            <a id="home2-tab" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true" class="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 active">Web Apps</a>
                        </li>
                        <li class="nav-item flex-sm-fill">
                            <a id="profile2-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile2" aria-selected="false" class="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0">Others</a>
                        </li>
                    </ul>
                    <div id="myTab2Content" class="tab-content">
                        <div id="home2" role="tabpanel" aria-labelledby="home-tab" class="tab-pane fade px-4 py-5 show active">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                                    <div class="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294929/matthew-hamilton-351641-unsplash_zmvozs.jpg" alt="" class="img-fluid card-img-top" />
                                        <div class="p-4">
                                            <h5> <a href="http://www.fadhilanetwork.com" target="_blank" rel="noopener noreferrer" class="text-dark">Fadhila Network</a></h5>
                                            <p class="small text-muted mb-0">Key aspects</p>
                                            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                <p class="small mb-0"><i class="fab fa-python mr-2"></i><i class="fab fa-js mr-2"></i> <span class="font-weight-bold">Fadhila</span></p>
                                                <a href="http://www.fadhilanetwork.com" target="_blank" rel="noopener noreferrer" class="badge badge-danger px-3 rounded-pill font-weight-normal">Visit Site</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="profile2" role="tabpanel" aria-labelledby="profile-tab" class="tab-pane fade px-4 py-5">
                            <div className="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                                    <div class="bg-white rounded shadow-sm"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg" alt="" class="img-fluid card-img-top" />
                                        <div class="p-4">
                                            <h5> <a href="http://www.fadhilanetwork.com" class="text-dark">Blorange</a></h5>
                                            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                                <p class="small mb-0"><i class="fa fa-picture-o mr-2"></i><span class="font-weight-bold">PNG</span></p>
                                                <div class="badge badge-primary px-3 rounded-pill font-weight-normal">Trend</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pastwork
