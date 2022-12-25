import { getSuggestedQuery } from "@testing-library/react";
import React from "react";

import "./index.css"


class CartItem extends React.Component{

    constructor(){
        super();
        this.state={
            price:999,
            qty:1,
            tilte:"phone",
            img:''
        }
    }
    render(){
const {price , qty, title, img}=this.state;//this is object di struturing because the this will get the object key and pair and make that variable whom we can use 
//properly and directly
     
        return(
            <div className="cart-item ">
                <div className="left-block">
                    <img style={style.img} />
                </div>

                <div className="right-block">
                    <div>{this.state.tilte} {/*we are using directly without object distructuring*/}</div>
                    <div>Rs {price} {/*this is using distructring so we dont have to write this.state.price*/}</div>
                    <div>Qty {qty}</div>

                    <div className="cart-item-actions">


                  <img src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" alt="increase"/>
                  <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="decrease"/>
                  <img src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png" alt="delete"/>

                    </div>
                </div>
             
              
            </div>


        )
    }

}

const style={
    img:{
        height:110,
        width:100,
        borderRadius:4,
        border:4,
     

        

    }
}

export default CartItem;
