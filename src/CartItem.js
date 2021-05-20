import React from 'react';
// class based component 
const CartItem =(props) =>{
const {price,title,qty,img}=props.product;
const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct }=props;
return (
    <div className="cart-item">
        <div className="left-block">
            <img style={styles.image} src={img}/>
        </div>
        <div className="righr-block">
            <div style={{fontSize:25 }}> {title}</div>
            <div style={{color:'#777'}}> Rs {price}</div>
            <div style={{color:'#777'}}> Qty : {qty}</div>
            <div className="cart-item-action">
                {/* Button */ }
                <img alt="increase" onClick={() => onIncreaseQuantity(product)} className="action-icons" src="https://img-premium.flaticon.com/png/512/2716/2716401.png?token=exp=1621366842~hmac=231eca31473d03ecd242f8523162a165"/>
                <img alt="decrease" onClick={() => onDecreaseQuantity(product)}style={{height:22 , width:22}} classNmae="action-icons" src="https://img-premium.flaticon.com/png/512/2716/2716405.png?token=exp=1621367145~hmac=ecdf91177bf9f9a5afe5c023374b1067"/>
                <img alt="delete"   onClick={() => onDeleteProduct(product.id) } className="action-icons" src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"/>
                </div>
        </div>
    </div>

);
}
//styling using object
const styles ={
    image:{
        height: 110,
        width:110,
        borderRadius:4,
        background: '#ccc'
    }
}
export default CartItem;