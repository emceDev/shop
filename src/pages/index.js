import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"

class Button extends React.Component{
  componentDidMount(){
    this.stripe = window.Stripe('pk_test_mub8sxpoqgONQmgynNjwH8h300dQ8VD5zv');
  }render(){
    return(
    <form onSubmit={event=>{
      event.preventDefault();
      this.stripe.redirectToCheckout({
        items: [
          // Replace with the ID of your SKU
          {sku: 'sku_GYNhNbLVeKnLVN', quantity: 1}
        ],
        successUrl: 'http://localhost:8000/succes/',
        cancelUrl: 'http://localhost:8000/cancel/',
      }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
    }}><button>Buy it</button></form> 
    )
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Button />
  </Layout>
)

export default IndexPage
