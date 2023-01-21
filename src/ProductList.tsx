import React, {  } from 'react'
import Product from './Product'
import style from './styles.module.css'

export default function ProductList() {

    const container: string = style.container
    const title: string = style.title
    const productList: string = style.productList

    return (
        <div className={container}>
            <div className={title}>Products</div>
            <span className={productList}>
                <Product/>
                <Product/>
            </span>
        </div>
    )
}

