import React from 'react';
import CartItem from './CartItem'
import Cart from './Cart';
import Navbar from './Navbar'
// functional based component
class App extends React.Component {

    constructor(){
        super();
        this.state = {
            products: [
                {
                    price : 9,
                    title : 'Nirma',
                    qty   : 1 ,
                    id    : 1,
                    img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zdnet.com%2Farticle%2Fbest-samsung-phone%2F&psig=AOvVaw2rP8K8SPmkzSFXaJxRUsvt&ust=1621461896946000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCP8r6e1PACFQAAAAAdAAAAABAP'
                },
                {
                    price : 99,
                    title : 'Washing',
                    qty   : 11 ,
                    id    : 2,
                    img:''
                },
                {
                    price : 999,  
                    title : 'Powder',      
                    qty   : 111 ,
                    id    : 3,
                    img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zdnet.com%2Farticle%2Fbest-samsung-phone%2F&psig=AOvVaw2rP8K8SPmkzSFXaJxRUsvt&ust=1621461896946000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCP8r6e1PACFQAAAAAdAAAAABAP'
                }
            ]
        }
    }


    handleIncreaseQuantity=(product) => {
        console.log('motherfucker',product)
        const {products}= this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products
        })
    }

    handleDecreaseQuantity=(product) => {
        console.log('motherfucker',product)
        const {products}= this.state;
        const index=products.indexOf(product);
        if(products[index].qty === 0)
        {
            return;
        }
            products[index].qty-=1;
            this.setState({
            products:products
                })
        }
        handleDeleteProduct=(id) => {
            
            const{products} =this.state;
            console.log('motherfucker',products)
            const items = products.filter((item) => item.id !== id);
            this.setState({
                products:items
            })
        }
        getCartCount =() =>{
        
        const{products}=this.state;
        let count=0;
        products.forEach((product) =>{
        count+=product.qty;

        })
        return count;
        }
        getCartTotal=()=>{
            const{products}=this.state;
            let cartTotal=0;
            products.map((product) =>{
                cartTotal=cartTotal + product.qty * product.price

            })
            return cartTotal;
        }
    render()
    {
        const{products}=this.state;
        return (
             <div className = "App">
                <Navbar count={this.getCartCount()}/>
                <h1><center> CART </center></h1>
                <Cart
                products={products}
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onDeleteProduct={this.handleDeleteProduct}

                />
                <div style={{fontSize:50,padding:10}}> Total Price:{this.getCartTotal()}</div>
            </div >
        );
    }
}
export default App;