import { getSuggestedQuery } from "@testing-library/react";
import React from "react";

import "./index.css"


class CartItem extends React.Component{
    

  
    render() {


console.log("pro",this.props);
   const {title,price,img,qty}=this.props.product;
        return (
        
            <div className="cart-item ">
             
                <div className="left-block">
                    <img style={style.img} src={img} />
                </div>

                <div className="right-block">
                    <div>{title}</div>
                    <div>price:{price}</div>
                    <div>Qty:{qty}</div>

                    <div className="cart-item-actions">


                        <img src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" alt="increase" onClick={()=>this.props.increaseQuantity(this.props.product)}  />
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="decrease" onClick={()=>this.props.decreaseQuantity(this.props.product)}  />
                        <img src="https://cdn-icons-png.flaticon.com/512/3096/3096687.png" alt="delete" onClick={()=>this.props.delete(this.props.product.id)} />

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
