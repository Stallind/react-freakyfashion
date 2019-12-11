import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

const products = [{
        name: "White leather jacket",
        img: "https://via.placeholder.com/300x200?text=Product"
    },
    {
        name: "Black jacket",
        img: "https://via.placeholder.com/300x200?text=Product"
    },  
    { 
        name: "Green trenchcoat",
        img: "https://via.placeholder.com/300x200?text=Product"
    },
    {
        name: "Blue jeans",
        img: "https://via.placeholder.com/300x200?text=Product"
}];

const PageFeatured = () => {

    return (
        <MDBContainer fluid className="text-center block mt-5 pb-5">
            <MDBRow className="justify-content-center">

                {products.map(item => (
                    <MDBCol key={item.name} md="2" >
                    <img src={item.img} alt="product" className="z-depth-2"/>
                    <p className="font-weight-bold mt-2">{item.name}</p>
                </MDBCol>

                ))}

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
