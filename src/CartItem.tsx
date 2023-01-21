import { isTemplateExpression } from "typescript";
import { useCartContext } from "./context/cartContext"
import storeProducts from "./data/products.json";
import style from './styles.module.css'

type CartItemProps = {
    id: number
    quantity: number
}


export default function CartItem({ id, quantity }: CartItemProps) {
    
    //style
    const column: string = style.column
    const cartContainer: string = style.cartContainer
    const btn: string = style.btn

    const { getItemQuantity,increaseCartQuantity, decreaseCartQuantity, cartItems} = useCartContext()
    const product = storeProducts.find(product => product.id === id)
    
    //product not exist
    if(product == null) return (null)

    return (
        <tr>
            <td className={column}>{product.name}</td>
            <td className={column}>${product.price}</td>
            <td className={column}>
                <div className={cartContainer}>
                    <button className={btn} onClick={() => decreaseCartQuantity(id)}>-</button>
                    <div>{quantity}</div>
                    <button className={btn} onClick={() => increaseCartQuantity(id)}>+</button>
                </div>
            </td>
        </tr>
    )
}
