import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../PageFooter/PageFooter.css'

const shoppingLinks = [{
    name: "Vinterjackor",
    url: "#"
},
{
    name: "Kappa",
    url: "#"
},
{
    name: "Trenchcoats",
    url: "#"
},
{
    name: "Pufferjackor",
    url: "#"
}];

const myPagesLinks = [{
        name: "Mina Ordrar",
        url: "#"
    },
    {
        name: "Mitt Konto",
        url: "#"
    }
];

const customerServiceLinks = [{
    name: "Returnpolicy",
    url: "#" 
},
{
name: "Interitetspolicy",
    url: "#"
}
];



const PageFooter = () => {

    return ( //fixed-bottom
        <MDBFooter className=" font-small pt-4 mt-4 blue-grey-text font-weight-bold mt-5 bg-light">
        <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
                <MDBCol md="12" className="text-center">
                    <i className="fa fa-globe fa-2x ml-1 ml-5"></i> <span>Gratis frakt och returer</span>
                    <i className="fa fa-plane fa-2x ml-1 ml-5"></i> <span>Expressfrakt</span>
                    <i className="fa fa-shield-alt fa-2x ml-1 ml-5"></i> <span>Säkra betalningar</span>
                    <i className="fa fa-smile fa-2x ml-1 ml-5"></i> <span>Nyheter varje dag</span>            
                </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5 ">
                <MDBCol md="3">
                    <h5 className="title">Shopping</h5>
                    <ul className="list-unstyled">
                        {shoppingLinks.map(link => (
                            <li key={link.name}>
                                <a href={link.url}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </MDBCol>
                <MDBCol md="3">
                    <h5 className="title">Mina sidor</h5>
                    <ul className="list-unstyled">
                    {myPagesLinks.map(link => (
                            <li key={link.name}>
                                <a href={link.url}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </MDBCol>
                <MDBCol md="3">
                    <h5 className="title">Kundtjänst</h5>
                    <ul className="list-unstyled">
                    {customerServiceLinks.map(link => (
                            <li key={link.name}>
                                <a href={link.url}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </MDBCol>
                <MDBCol md="3">
                    <h5 className="title">Välj land och språk</h5>
                    <ul className="list-unstyled">
                    <li>
                        <div>Land</div>
                        <select>
                            <option value="sverige">Sverige</option>
                            <option value="england">England</option>
                        </select>
                    </li>
                    <li>
                        <div>Språk</div>
                        <select>
                            <option value="svenska">Svenska</option>
                            <option value="english">English</option>
                        </select>
                    </li>
                    </ul>
                </MDBCol>
              
            </MDBRow>
      </MDBContainer>
      <div className="text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Freakyfashion.com 
        </MDBContainer>
      </div>
    </MDBFooter>
    )
}

export default PageFooter;