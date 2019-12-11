import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink } from "mdbreact";
import '../PageHeader/PageHeader.css'

const PageHeader = () => {

    return (
        <Router>
        <MDBNavbar color="white" className="blue-grey-text" expand="md">
        <MDBNavbarBrand>
          <strong className="">Navbar</strong>
          <img src="https://via.placeholder.com/120x60?text=Freaky+Fashion.com" alt="Freaky fashion logo"/>
        </MDBNavbarBrand>
          <MDBNavbarNav left>
            <MDBNavItem active>
            <i className="fa fa-search mr-1"></i> 
            <input type="text" placeholder=" Search" />                 
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem className="center p-1 mt-2 mr-4">
              <select>
                <option value="svenska">Svenska</option>
                <option value="english">English</option>
              </select>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <i className="fa fa-eye fa-2x ml-1"></i>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <i className="fa fa-heart fa-2x ml-1"></i>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                    <i className="fa fa-shopping-bag fa-2x ml-1 mr-5"></i>
                </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

      </MDBNavbar>
      <MDBNavbar color="white" light expand="md">
      <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
      </MDBNavbar>
    </Router>


       
    )
}

export default PageHeader;
