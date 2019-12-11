import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

const products = [{
    name: "White Shirt",
    img: "https://via.placeholder.com/468x300?text=Recommended+Product"
},
{
    name: "Police jacket",
    img: "https://via.placeholder.com/468x300?text=Recommended+Product"
}  
];

const PageRecommended = () => {

    return (
        <MDBContainer fluid className="text-center block mt-5 pt-5 pb-5">
            <p className="text-center font-weight-bolder">Rekommenderas för dig</p>
            <MDBRow className="justify-content-center mt-5">
                <MDBCol md="3"></MDBCol>

                    {products.map(item => (
                        <MDBCol key={item.name} md="3" >
                        <img src={item.img} alt="prodpic" className="z-depth-1"/>
                        </MDBCol>
                    ))}
                <MDBCol md="3"></MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default PageRecommended;
