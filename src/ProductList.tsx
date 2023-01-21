import React from "react";
import Product from "./Product";
import style from "./styles.module.css";
import storeProducts from "./data/products.json";

export default function ProductList() {
    //style
    const container: string = style.container;
    const title: string = style.title;
    const productList: string = style.productList;

    return (
        <div className={container}>
            <div className={title}>Products</div>
            <span className={productList}>
                {storeProducts.map((product) => (
                    <div key={product.id}>
                        <Product {...product} />
                    </div>
                ))}
            </span>
        </div>
    );
}
