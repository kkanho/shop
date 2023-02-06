import React from 'react'
import storeProducts from "../data/products.json";
import { useCartContext } from '../context/cartContext'
import CartItem from './CartItem'
import { Button, Table } from 'react-bootstrap';
import FormatCurrency from '../utilities/FormatCurrency';

export default function Cart() {

    const { cartItems, clearCart } = useCartContext()

    return (
        <>
            <div className="d-flex justify-content-center fs-3">Cart</div>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Item</th> 
                        <th>Total Cost</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (cartItems && cartItems.length > 0)?(
                            cartItems.map(cartItem => (
                                <CartItem key={cartItem.id} {...cartItem} />
                            ))
                        ) : (
                            <tr>
                                <td style={{textAlign:"center", color: "rgb(220,60,69)"}} colSpan={4}>Your cart is currently empty</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td></td>
                        <td>Cart Total:</td>
                        <td>
                            {FormatCurrency(
                                cartItems.reduce((total, cartItem) => {
                                    const product = storeProducts.find(product => product.id === cartItem.id)
                                    if (product == null) return total
                                    return (total + cartItem.quantity * product.price)
                                }, 0)
                            )}
                        </td>
                    </tr>
                </tbody>
            </Table>           
            <div className="d-flex justify-content-end">
                <Button
                    onClick={() => {
                        clearCart()
                    }}
                    className="primary"
                >
                    Checkout
                </Button>
            </div>
        </>
    )
}
