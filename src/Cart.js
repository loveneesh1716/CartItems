import React from 'react';
import CartItem from './CartItem'
// class based component 
class Cart extends React.Component{
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
            console.log('motherfucker',products)
            const{products} =this.state;
            const items = products.filter((item) => item.id !== id);
            this.setState({
                products:items
            })
        }
    render ()
    {
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                    <CartItem 
                        product = {product} 
                        key     = { product.id} 
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct={this.handleDeleteProduct}

                      />
                    ) 
                })}
            </div>
        );
    }
    
}

export default Cart;





