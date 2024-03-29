import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const pageData = {
    header: [{
        linkName: "Nyheter",
        linkUrl: "/news"
    },
    {
        linkName: "Kategorier",
        linkUrl: "/category"
    },
    {
        linkName: "Topplistan",
        linkUrl: "/toplist"
    },
    {
        linkName: "Rea",
        linkUrl: "/sale"
    },
    {
        linkName: "Kampanjer",
        linkUrl: "/campain"
    },
    {
        linkName: "Varumärken",
        linkUrl: "/brands"
    },
    {
        linkName: "Shop",
        linkUrl: "/shop"
    },
    {
        linkName: "Instagram",
        linkUrl: "/instagram"
    }],

    hero: [{
        title: "Hero title",
        text: "Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet",
        img: "https://via.placeholder.com/468x300?text=Product",
        altText: "product"
    }],

    products:[{
        name: "White leather jacket",
        img: "https://via.placeholder.com/300x200?text=Featured+Product",
        articleNumber: "1234-000000456-789",
        text: "Detta är en fin produkt som luktar friterad snus om du har på dig den efter 10.00 på lördagar.",
        price: 4999
    },
    {
        name: "Black jacket",
        img: "https://via.placeholder.com/300x200?text=Featured+Product",
        articleNumber: "1234-456-789"
    },  
    { 
        name: "Green trenchcoat",
        img: "https://via.placeholder.com/300x200?text=Featured+Product",
        articleNumber: "1234-456-789"
    },
    {
        name: "Blue jeans",
        img: "https://via.placeholder.com/300x200?text=Featured+Product",
        articleNumber: "1234-456-789"
    }]
}




ReactDOM.render(<App pageData={pageData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
