import React from 'react';
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";


const PageHero = ({heroContent}) => {
    
    return (
        <MDBContainer fluid className="text-center justify-content-center block mt-2 mb-3 bg-light">
            <MDBRow>
                <MDBCol md="3" ></MDBCol>

                {heroContent.map(content => (
                <>
                    <MDBCol md="3" className="text-center mt-5">
                        <h1>{content.title}</h1>
                        <p>{content.text}</p>
                        <button type ="button" className="btn btn-primary">Read more</button>
                    </MDBCol>
                   
                    <MDBCol md="3" className="text-center">
                        <img src={content.img} alt={content.altText} />
                    </MDBCol>
                </>
                ))}
                
         </MDBRow>       
        </MDBContainer>
    )
}

export default PageHero;
