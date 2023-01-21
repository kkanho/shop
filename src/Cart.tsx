import React, { useState } from 'react'
import storeProducts from "./data/products.json";
import { CartProvider, useCartContext } from './context/cartContext'
import style from './styles.module.css'
import CartItem from './CartItem'

export default function Cart() {

    //style
    const container: string = style.container
    const title: string = style.title
    const cart: string = style.cart
    const head: string = style.head
    const column: string = style.column
    const largerFont: string = style.largerFont
    const conclude: string = style.conclude

    const [numberOfItem, setNumberOfItem] = useState(0);

    const { cartItems } = useCartContext()

    return (
            <div className={container}>
                <div className={title}>Cart</div>
                <table className={cart}>
                    <thead>
                        <tr className={head}>
                            <td className={column}>Item</td> 
                            <td className={column}>Total Cost</td>
                            <td className={column}>Quantity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems == null?(
                                <tr>
                                    <td className={`${column} ${largerFont}`} colSpan={4}>Your cart is currently empty</td>
                                </tr>
                            ) : (
                                cartItems.map(cartItem => (
                                    <CartItem key={cartItem.id} {...cartItem} />
                                ))
                            )
                        }
                        <tr>
                            <td className={`${column} ${conclude}`}></td>
                            <td className={`${column} ${conclude}`}>Cart Total:</td>
                            <td className={`${column} ${conclude}`}>$
                                {cartItems.reduce((total, cartItem) => {
                                    const product = storeProducts.find(product => product.id === cartItem.id)
                                    if (product == null) return total
                                    return total + cartItem.quantity * product.price
                                }, 0)}
                            </td>
                        </tr>
                    </tbody>
                </table>            
            </div>
    )
}
