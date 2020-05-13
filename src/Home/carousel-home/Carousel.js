import carousel1 from "./1-isauwcamp.png";
import carousel2 from "./2-seathrough.png";
import carousel3 from "./3-seattle101.png";
import React from "react";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer} from
        "mdbreact";

const CarouselPage = () => {
    if (true) {
        return (
            <MDBContainer className="w-auto">
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={false}
                    showIndicators={true}
                    className="z-depth-1"
                    mobileGesture={false}
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1"><MDBView><img className="d-block w-100" src={carousel1}
                                                                  alt="ISAUW in ISAUW Camp"/></MDBView></MDBCarouselItem>
                        <MDBCarouselItem itemId="2"><MDBView><img className="d-block w-100" src={carousel2}
                                                                  alt="Indonesians in Seathrough, an ISAUW event"/></MDBView></MDBCarouselItem>
                        <MDBCarouselItem itemId="3"><MDBView><img className="d-block w-100" src={carousel3}
                                                                  alt="ISAUW leads and alumni in Seattle 101, an ISAUW event"/></MDBView></MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        );
    }
};

export default CarouselPage;