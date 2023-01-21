import React, { useState } from 'react'
import style from './styles.module.css'

export default function Cart() {

    const container: string = style.container
    const title: string = style.title
    const cart: string = style.cart
    const head: string = style.head
    const column: string = style.column
    const cartContainer: string = style.cartContainer
    const btn: string = style.btn

    const [numberOfItem, setNumberOfItem] = useState(0);

    const minus = () => {
        if (numberOfItem > 0){
            setNumberOfItem(prevNumberOfItem => (prevNumberOfItem - 1))
        }
    }
    const plus = () => {
        setNumberOfItem(prevNumberOfItem => (prevNumberOfItem + 1))
    }


    return (
        <div className={container}>
            <div className={title}>Cart</div>
            <table className={cart}>
                    <tr className={head}>
                        <td className={column}>Item</td>
                        <td className={column}>Total Cost</td>
                        <td className={column}></td>
                    </tr>
                    <tr>
                        <td className={column}>ItemName</td>
                        <td className={column}>$100</td>
                        <td className={column}>
                            <div className={cartContainer}>
                                <button className={btn} onClick={minus}>-</button>
                                <div className="">{numberOfItem}</div>
                                <button className={btn} onClick={plus}>+</button>
                            </div>
                        </td>
                    </tr>
                    <tr >
                        <td className={column}></td>
                        <td className={column}>Cart Total:</td>
                        <td className={column}>$final price</td>
                    </tr>
            </table>
        </div>
        
    )
}
