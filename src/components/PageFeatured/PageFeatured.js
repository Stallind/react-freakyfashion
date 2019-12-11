import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";


const PageFeatured = ({products}) => {

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
        </MDBContainer>
    )
}

export default PageFeatured;
