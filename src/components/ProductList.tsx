import React from "react";
import Product from "./Product";
import storeProducts from "../data/products.json";
import { Col, Row } from "react-bootstrap";


export default function ProductList() {

    return (
        <>
            <div className="d-flex justify-content-center fs-3">Products</div>
                <Row className="d-flex justify-content-center">
                    {storeProducts.map((product) => (
                        <Col className="m-1 mb-4 col-auto"
                            key={product.id}
                        >
                            <Product {...product} />
                        </Col>
                    ))}
                </Row>
        </>
    );
}
