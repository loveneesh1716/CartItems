import React from 'react';
import CartItem from './CartItem'
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from './firebase';
// functional based component
class App extends React.Component {

    constructor(){
        super();
        this.state = {
            products: [],
            loading:true
        }
        this.db=firebase.firestore();
    }
    
    componentDidMount()
    {
        /* firebase
            .firestore()
            .collection('products')
            .get()
            .then((snapshot) => {
                console.log(snapshot);

                snapshot.docs.map((doc) => {
                    console.log(doc.data())
                })

                const products=snapshot.docs.map((doc) =>{
                    const data=doc.data();
                    data['id']=doc.id;
                    return data;
                })
                this.setState({
                    products:products,
                    loading:false
                })
            })
            */

           // firebase
            //.firestore()
            this.db
            .collection('products')
            //.where('price', '==' ,9)
           // .where('price','>=',0)
            .orderBy('price')
            .onSnapshot((snapshot) => {
                console.log(snapshot);

                snapshot.docs.map((doc) => {
                    console.log(doc.data())
                })

                const products=snapshot.docs.map((doc) =>{
                    const data=doc.data();
                    data['id']=doc.id;
                    return data;
                })
                this.setState({
                    products:products,
                    loading:false
                })
            })




    }

    handleIncreaseQuantity=(product) => {
        console.log('motherfucker',product)
        const {products}= this.state;
        const index=products.indexOf(product);
        //products[index].qty+=1;
        //this.setState({
        //    products:products
        //});
        const docRef=this.db.collection('products').doc(products[index].id);
        docRef
            .update({
                qty:products[index].qty+1
            })
            .then(() => {
                console.log("update")
            })
            .catch((error)=>{
                console.log('Error:',error);
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
         //   products[index].qty-=1;
         //   this.setState({
         //   products:products
         //       })
         const docRef=this.db.collection('products').doc(products[index].id);
         docRef
             .update({
                 qty:products[index].qty-1
             })
             .then(() => {
                 console.log("update")
             })
             .catch((error)=>{
                 console.log('Error:',error);
             })

        }
        handleDeleteProduct=(id) => {
            
            const{products} =this.state;
            //console.log('motherfucker',products)
            //const items = products.filter((item) => item.id !== id);
            //this.setState({
            //    products:items
            //});
            const docRef=this.db.collection('products').doc(id);
            docRef
            .delete()
            .then(() =>{
                console.log("Delete successfully")
            })
            .catch((error) =>{
                console.log('Error:',error)
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
                if(product.qty>0){
                cartTotal=cartTotal + product.qty * product.price;
                }
                return '';
            })
            return cartTotal;
        }

        addProduct = () =>{
            this.db
            .collection('products')
            .add({
                img:'',
                price:9,
                qty:1,
                title:'corona'
            })
            .then((docRef) =>{
                console.log("product added",docRef);
            })
            .catch((error)=>{
                console.log('Error :',error);
            })
        }
    render()
    {
        const{products, loading}=this.state;
        return (
             <div className = "App">
                <Navbar count={this.getCartCount()}/>
                <button style={{padding:20 , fontSize:20}}  onClick={this.addProduct}>Add a product</button>
                <h1><center> CART </center></h1>
                <Cart
                products={products}
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onDeleteProduct={this.handleDeleteProduct}

                />
                {loading &&<h1>Loading Products ..</h1>}
                <div style={{fontSize:30,padding:10}}> Total Price:{this.getCartTotal()}</div>
            </div >
        );
    }
}
export default App;