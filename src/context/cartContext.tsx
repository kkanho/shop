import { createContext, ReactNode, useContext, useState } from 'react'

const ShoppingCartContext = createContext({} as CartContext)

export function useCartContext() {
    return (
        useContext(ShoppingCartContext)
    )
}

type CartProviderProps = {
    children: ReactNode
}

type CartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartItems: CartItem[]
}

export type CartItem = {
    id: number
    quantity: number
}

export function CartProvider( { children } : CartProviderProps){

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number){
        setCartItems(currentItems => {
            //if the item not yet in the cart, add it to the cart
            if (currentItems.find(item => item.id === id) == null){
                return [...currentItems, {id, quantity: 1 }]
            }else {//if the item has already been added to the cart, quantity + 1
                return currentItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity + 1};
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number){
        setCartItems(currentItems => {
            //if the item quantity is one, remove the item
            if (currentItems.find(item => item.id === id)?.quantity === 1){
                return currentItems.filter(item => item.id !== id)
            }else {//if the item has already been added to the cart, quantity - 1
                return currentItems.map(item => {
                    if(item.id === id) {
                        return {...item, quantity: item.quantity - 1};
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number){
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems }}>
        {children}
    </ShoppingCartContext.Provider>
    )
}
