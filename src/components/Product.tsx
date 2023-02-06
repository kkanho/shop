import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/esm/Button'
import { useCartContext } from '../context/cartContext'
import FormatCurrency from '../utilities/FormatCurrency'

type productProps = {
    id: number
    name: string
    price: number
    image: string
}

export default function Product({id, name, price, image}:productProps) {
    
    const { getItemQuantity, increaseCartQuantity, removeFromCart } = useCartContext()
    const quantity = getItemQuantity(id)

    return (
        <Card border="secondary" style={{ width: '260px' }}>
            <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Title className="d-flex justify-content-center fw-bold">
                {name}
            </Card.Title>
            <Card.Img src={image} alt="item name"/>
            <div className="d-flex justify-content-center fs-5">
                {FormatCurrency(price)}
            </div>
            {
                quantity === 0 ? 
                (<Button variant="outline-primary" onClick={() => increaseCartQuantity(id)}>
                    Add to Cart
                </Button>) : 
                (<Button variant="outline-danger" onClick={() => removeFromCart(id)}>
                    Remove Item
                </Button>)
            }
            </Card.Body>
        </Card>
    )
}