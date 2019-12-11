import React, {useState} from 'react';
import { MDBCol, MDBContainer, MDBRow} from "mdbreact";




const PageDetail = () => {

    const [productColor, setProductColor] = useState("");
    const [productSize, setProductSize] = useState("");

    const logMe = () => {
        console.log(productColor)  
        console.log(productSize)
    }
    
    const selectColor = (e) =>{
        setProductColor(e.currentTarget.value)
    }


    return (
        <MDBContainer fluid className="text-center justify-content-center block mt-2 mb-3 bg-light">
        <MDBRow>
            
      
            <MDBCol md="6" className="text-right mt-5">
            <img src="https://via.placeholder.com/468x700?text=Product" alt="prod" />
    
            </MDBCol>  
            <MDBCol md="6" className="text-left mt-5">
                <h1>Product name</h1>
                <p>Detta är en fin produkt som luktar friterad snus om du har på dig den efter 10.00 på lördagar.</p>
                <p className="font-weight-bold pt-4 pb-4">4999:-</p>

                <p>Välj färg</p>
                <input type="radio" name="color" value="green" onChange={selectColor} />
                <strong> Grön</strong>
                <input className="ml-4" name="color" type="radio" value="yellow" onChange={selectColor} />
                <strong> Gul</strong> 
                <input className="ml-4" name="color" type="radio" value="blue" onChange={selectColor} />
                <strong> Blå</strong> 
                
                <div className="mt-5 mb-5">
                <select onChange={(e) => setProductSize(e.currentTarget.value)}>
                    <option value="null" hidden>Välj storlek</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                </div>
                <button type ="button" className="btn btn-success m-3" onClick={logMe}>Köp</button>
                <button type ="button" className="btn btn-success m-3">Spara</button>
                
            </MDBCol>  
                
            
            
     </MDBRow>       
    </MDBContainer>
    )
}


export default PageDetail;