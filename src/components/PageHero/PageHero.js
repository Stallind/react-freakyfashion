import React from 'react';
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";


const PageHero = () => {

    return (
        <MDBContainer fluid className="text-center justify-content-center block mt-2 mb-5 z-depth-1">
            <MDBRow>
                <MDBCol md="3" ></MDBCol>
                <MDBCol md="3" className="text-center">
                    <h1>White leather jacket</h1>
                    <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet </p>
                    <button type ="button" className="btn btn-primary">Read more</button>
                               
                </MDBCol>
                <MDBCol md="3" className="text-center">
                    <img src="https://via.placeholder.com/468x300?text=Product" alt="logo" />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default PageHero;
