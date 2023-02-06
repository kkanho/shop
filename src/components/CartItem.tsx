import Button from "react-bootstrap/esm/Button";
import { useCartContext } from "../context/cartContext"
import storeProducts from "../data/products.json";
import FormatCurrency from "../utilities/FormatCurrency";


type CartItemProps = {
    id: number
    quantity: number
}


export default function CartItem({ id, quantity }: CartItemProps) {

    const { increaseCartQuantity, decreaseCartQuantity} = useCartContext()
    const product = storeProducts.find(product => product.id === id)
    
    //product not exist
    if(product == null) return (null)

    return (
        <tr>
            <td className={""}>{product.name}</td>
            <td className={""}>{FormatCurrency(product.price)}</td>
            <td className={""}>
                <div className="d-flex justify-content-center">
                    <Button variant="outline-primary" onClick={() => decreaseCartQuantity(id)}>-</Button>
                        <div className="fs-5 ms-2 me-2 mt-1">{quantity}</div>
                    <Button variant="outline-primary" onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
            </td>
        </tr>
    )
}
