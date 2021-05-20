import React from 'react';
const Navbar =(props) => {
        return (
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://img-premium.flaticon.com/png/512/1170/1170678.png?token=exp=1621434499~hmac=44ccb76a47c9b7e9bf7ede7d97543f7c" alt="cart-icon"/>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        );
    }


const styles={
    cartIcon:
    {
        height:32,
        marginRight:20
    },
    nav:
    {
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    cartIconContainer:
    {
        position:'relative'
    },
    cartCount:
    {
        background:'yellow',
        borderRadius:'50%',
        padding: '4px 8px',
        position:'absolute',
        right:0,
        top:-9
    }
};

export default Navbar;