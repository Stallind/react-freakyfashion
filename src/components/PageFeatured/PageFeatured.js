import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBNavItem} from "mdbreact";


const PageFeatured = () => {

    return (
        <MDBContainer fluid className="text-center block mt-5">
            <MDBRow className="justify-content-center">
                <MDBCol md="2" >
                    <img src="https://via.placeholder.com/300x200?text=Product" alt="logo" className="z-depth-2"/>
                    <p className="font-weight-bold mt-2">White leather jacket</p>
                </MDBCol>
                <MDBCol md="2" >
                    <img src="https://via.placeholder.com/300x200?text=Product" alt="logo" className="z-depth-2" />
                </MDBCol>
                <MDBCol md="2" className="text-center">
                    <img src="https://via.placeholder.com/300x200?text=Product" alt="logo" />
                </MDBCol>
                <MDBCol md="2" className="text-center">
                    <img src="https://via.placeholder.com/300x200?text=Product" alt="logo" />
                </MDBCol>
            </MDBRow>
            <MDBRow className="justify-content-center mt-5">
                <MDBCol md="3"></MDBCol>
                    <MDBCol md="3" >
                        <img src="https://via.placeholder.com/468x300?text=Product" alt="logo" className="z-depth-1"/>
                    </MDBCol>
                    <MDBCol md="3" >
                        <img src="https://via.placeholder.com/468x300?text=Product" alt="logo" className="z-depth-1"/>   
                    </MDBCol>
                <MDBCol md="3"></MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default PageFeatured;
