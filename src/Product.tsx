import React from 'react'
import { useCartContext } from './context/cartContext'
import style from './styles.module.css'

type productProps = {
    id: number
    name: string
    price: number
    image: string
}

export default function Product({id, name, price, image}:productProps) {

    //style
    const productContainer: string = style.productContainer
    const productName: string = style.productName
    const productImg: string = style.productImg
    const productPrice: string = style.productPrice
    const addToCart: string = style.addToCart    
    const removeFromCartStyle: string = style.removeFromCartStyle    
    
    const { getItemQuantity, increaseCartQuantity, removeFromCart } = useCartContext()
    const quantity = getItemQuantity(id)

    return (
        <div className={productContainer}>
            <div className={productName}>
                {name}
            </div>
            <img className={productImg} src={image} alt="item name"/>
            <div className={productPrice}>
                ${price}
            </div>
            {
                quantity === 0 ? 
                (<button className={addToCart} onClick={() => increaseCartQuantity(id)}>
                    Add to Cart
                </button>) : 
                (<button className={removeFromCartStyle} onClick={() => removeFromCart(id)}>
                    Remove
                </button>)
            }
        </div>
    )
}