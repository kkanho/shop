import React from 'react'
import style from './styles.module.css'

export default function Product() {

    const productContainer: string = style.productContainer
    const productName: string = style.productName
    const productImg: string = style.productImg
    const productPrice: string = style.productPrice
    const addToCart: string = style.addToCart
    
    

    return (
        <div className={productContainer}>
            <div className={productName}>
                ProductName
            </div>
            <img className={productImg} src="https://picsum.photos/200" alt="item name"/>
            <div className={productPrice}>
                $10.00
            </div>
            <button className={addToCart}>
                Add to Cart
            </button>
        </div>
    )
}
