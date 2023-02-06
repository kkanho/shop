import React from 'react';
import Cart from './components/Cart';
import SiteNavbar from './components/SiteNavbar';
import ProductList from './components/ProductList';
import { CartProvider } from "./context/cartContext";
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/Footer';

export default function App() {

  document.title = "Shop"
  return (
    <CartProvider>
      <SiteNavbar />
      <div style={{backgroundColor: "#ccc"}}>
        <Container>
          <Row className="d-flex justify-content-center pt-5">
            <Col className="col-8"><ProductList /></Col>
            <Col><Cart /></Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </CartProvider>
  );
}

