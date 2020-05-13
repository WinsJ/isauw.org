import React, { Component } from 'react';
import CarouselHome from "./carousel-home/Carousel";



export default class Home extends Component {
	render() {
		return (
			<div id="home">
                <h1 className="h1-responsive p-3 text-center">Indonesian Student Association <br/> at the <br/> University of Washington</h1>
                <CarouselHome />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="my-3">About Us</h1>
                            <p className="h2-responsive my-3">ISAUW (Indonesian Student Association at the UW) is a non-profit cultural organization with the purpose of uniting the Indonesian community within the university as well as to promote our Indonesian culture to the community in the greater Seattle Area.</p>
                            &nbsp;
                            <p className="h2-responsive my-3">Since 2001, we have established a platform for Indonesian students at University of Washington to create a unifying community based on common interest in Indonesian culture.</p>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}