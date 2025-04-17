import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';

import { useState } from 'react';
import fruit from './images/fruit.png'; // Replace with your actual image paths
import vegtable from './images/vegtable.jpg';
import './index.css';
import { Button, Card, Row, Col, Badge, ButtonGroup } from 'react-bootstrap';
import bestproduct from './images/best-product-1.jpg';
import bestproduct1 from './images/best-product-2.jpg';
import bestproduct3 from './images/best-product-4.jpg';
import bestproduct5 from './images/best-product-5.jpg';
import bestproduct2 from './images/bread.jpg';
import bestproduct4 from './images/bread1.jpg';
import vegetable from './images/brinjal.jpeg';
import about from './images/about.jpg';
import vegetable2 from './images/vegetable-item-2.jpg';
import vegetable3 from './images/cauliflower.jpeg';
import vegetable4 from './images/vegetable-item-5.jpg';



function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmissionStatus('error');
        const errorData = await response.json();
        console.error('Email sending failed:', errorData);
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Error sending request:', error);
    
  }
  };

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample product data
  const products = [
    { id: 1, name: 'Orange', category: 'fruits', price: '$4.99 / kg', imgSrc: bestproduct },
    { id: 2, name: 'Raspberries', category: 'fruits', price: '$4.99 / kg', imgSrc: bestproduct1 },
    { id: 3, name: 'Brogoli', category: 'vegetables', price: '$2.99 / kg', imgSrc: vegetable2 },
    { id: 4, name: 'Whole Wheat Bread', category: 'bread', price: '$1.99 / loaf', imgSrc: bestproduct2 },
    { id: 5, name: 'Grapes', category: 'meat', price: '$9.99 / kg', imgSrc: bestproduct5 },
    { id: 6, name: 'Potato', category: 'vegetables', price: '$2.99 / kg', imgSrc: vegetable4 },
    { id: 7, name: 'Whole Wheat Bread', category: 'bread', price: '$1.99 / loaf', imgSrc: bestproduct4 },
    { id: 8, name: 'Papaya', category: 'meat', price: '$9.99 / kg', imgSrc: bestproduct3 },
  ];

  // Function to filter products based on selected category
  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);
    const scrollRef = useRef(null);


  return (
    <>
      <div className='container'>
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-center">
            {/* Left Side Content */}
            <div className="col-md-6 bg-light p-4 p-md-5">
              <h2 className="success">100% Organic Foods</h2>
              <p className='four'>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
              <h1 className="display-4 mb-4" id='one'>Organic Veggies & Fruits Foods</h1>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success" style={{ backgroundColor: '#81C408', border: 'none' }} type="button"> Submit Now</button>
              </div>
            </div>

            {/* Right Side Carousel */}
            <div className="col-md-6" id='img'>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
                style={{ height: '400px' }}
              >
                <div className="carousel-inner h-100">
                  <div className="carousel-item active h-100 position-relative">
                    <img
                      src={vegtable}
                      className="d-block w-100 h-100 object-fit-cover border-radius-20px"
                      alt="Vesitables"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h3 className="text-light bg-opacity-75 p-2 rounded" style={{ backgroundColor: '#FFB524' }}>Vegetables</h3>
                    </div>
                  </div>
                  <div className="carousel-item h-100 position-relative">
                    <img
                      src={fruit}
                      className="d-block w-100 h-100 object-fit-cover"
                      alt="Fruits"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h3 className="text-light bg-opacity-75 p-2 rounded" style={{ backgroundColor: '#FFB524' }}>Fruits</h3>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*about*/}

        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px', minWidth: '200px' }}>
            <div style={{ backgroundColor: '#FFC107', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 10px' }}>
              <i className="fas fa-truck" style={{ fontSize: '50px', color: '#FFF' }}></i>
            </div>
            <h3 style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#333' }}>Free Shipping</h3>
            <p style={{ fontSize: '0.9em', color: '#555' }}>Free on order over $300</p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '20px', minWidth: '200px' }}>
            <div style={{ backgroundColor: '#FFC107', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 10px' }}>
              <i className="fas fa-lock" style={{ fontSize: '50px', color: '#FFF' }}></i>
            </div>
            <h3 style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#333' }}>Security Payment</h3>
            <p style={{ fontSize: '0.9em', color: '#555' }}>100% security payment</p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '20px', minWidth: '200px' }}>
            <div style={{ backgroundColor: '#FFC107', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 10px' }}>
              <i className="fas fa-sync-alt" style={{ fontSize: '50px', color: '#FFF' }}></i>
            </div>
            <h3 style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#333' }}>30 Day Return</h3>
            <p style={{ fontSize: '0.9em', color: '#555' }}>30 day money guarantee</p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '20px', minWidth: '200px' }}>
            <div style={{ backgroundColor: '#FFC107', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 10px' }}>
              <i className="fas fa-headset" style={{ fontSize: '50px', color: '#FFF' }}></i>
            </div>
            <h3 style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#333' }}>24/7 Support</h3>
            <p style={{ fontSize: '0.9em', color: '#555' }}>Support every time fast</p>
          </div>
        </div>

{/*about us*/}
<center class="mb-5">ABOUT US</center>
<div class="container-fluid mb-5">
  <div class="row">
  <div class="col-md-6">
      <img src={about} class="img-fluid" alt="Venum Image" />
    </div>
    <div class="col-md-6 d-flex align-items-center">
      <div>
        <h2>Fruit & Vegetables</h2>
        <p>This is some content on the left side. Here, you can place detailed information, descriptions, or anything you'd like to show to the user.</p>
        <p>Available offers a wide variety of sportswear and equipment, including high-performance gear for combat sports, fitness, and more.</p>
        <ul>
          <li>Combat Sports Gear</li>
          <li>Fitness Clothing</li>
          <li>Boxing Gloves</li>
          <li>Training Accessories</li>
        </ul>
        <Button style={{ backgroundColor: '#81C408', border: 'none' }}>Show Now</Button>
      </div>
    </div>

  </div>
</div>
        {/*cart*/}
        <div className="mt-1">
          <h2 className="fw-bold">Our Organic Products</h2>

          <ButtonGroup className="my-3">
            <Button variant="warning" onClick={() => filterProducts('all')}>All Products</Button>
            <Button variant="light" onClick={() => filterProducts('vegetables')}>Vegetables</Button>
            <Button variant="light" onClick={() => filterProducts('fruits')}>Fruits</Button>
            <Button variant="light" onClick={() => filterProducts('bread')}>Bread</Button>
            <Button variant="light" onClick={() => filterProducts('meat')}>Meat</Button>
          </ButtonGroup>

          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} md={3} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={product.imgSrc} alt={product.name} />
                  <Card.Body className="text-center">
                    <Badge pill bg="warning" id='badge'>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</Badge>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
                    <p><strong>{product.price}</strong></p>
                    <Button style={{ backgroundColor: '#81C408', border: 'none' }}>Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
<div class="vegetables-section">
        <h2>Fresh Organic Vegetables</h2>
        <div className="navigation-arrows">
    <button onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })}>&larr;</button>
    <button onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })}>&rarr;</button>
  </div>
        <div class="vegetables-grid"     ref={scrollRef}>
            <div class="vegetable-card">
                <span class="vegetable-tag">Vegetable</span>
                <img src={vegetable} alt="Banana" />
                <div class="vegetable-details">
                    <h3 class="vegetable-title">Brinjal</h3>
                    <p class="vegetable-description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt.</p>
                    <p class="vegetable-price">$80.00 / kg</p>
                    <Button style={{ backgroundColor: '#81C408', border: 'none' }}><i class="fas fa-shopping-cart"></i> Add to cart</Button>
                </div>
            </div>
            <div class="vegetable-card">
                <span class="vegetable-tag">Vegetable</span>
                <img src={vegetable4} alt="Bell Pepper" />
                <div class="vegetable-details">
                    <h3 class="vegetable-title">Potato</h3>
                    <p class="vegetable-description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt.</p>
                    <p class="vegetable-price">$70.99 / kg</p>
                    <Button style={{ backgroundColor: '#81C408', border: 'none' }}><i class="fas fa-shopping-cart"></i> Add to cart</Button>
                </div>
            </div>
            <div class="vegetable-card">
                <span class="vegetable-tag">Vegetable</span>
                <img src={vegetable2} alt="Potatoes" />
                <div class="vegetable-details">
                    <h3 class="vegetable-title">Brogoli</h3>
                    <p class="vegetable-description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt.</p>
                    <p class="vegetable-price">$7.99 / kg</p>
                    <Button style={{ backgroundColor: '#81C408', border: 'none' }}><i class="fas fa-shopping-cart"></i> Add to cart</Button>
                </div>
            </div>
            <div class="vegetable-card">
                <span class="vegetable-tag">Vegetable</span>
                <img src={vegetable3}alt="Parsely" />
                <div class="vegetable-details">
                    <h3 class="vegetable-title">Cauliflower</h3>
                    <p class="vegetable-description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt.</p>
                    <p class="vegetable-price">$7.99 / kg</p>
                    <Button style={{ backgroundColor: '#81C408', border: 'none' }}><i class="fas fa-shopping-cart"></i> Add to cart</Button>
                </div>
            </div>
            <div class="vegetable-card">
                <span class="vegetable-tag">Vegetable</span>
                <img src={vegetable} alt="Banana" />
                <div class="vegetable-details">
                    <h3 class="vegetable-title">Brinjal</h3>
                    <p class="vegetable-description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt.</p>
                    <p class="vegetable-price">$80.00 / kg</p>
                    <Button style={{ backgroundColor: '#81C408', border: 'none' }}><i class="fas fa-shopping-cart"></i> Add to cart</Button>
                </div>
            </div>
            <div class="vegetable-card">
                <span class="vegetable-tag">Vegetable</span>
                <img src={vegetable4} alt="Bell Pepper" />
                <div class="vegetable-details">
                    <h3 class="vegetable-title">Potato</h3>
                    <p class="vegetable-description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt.</p>
                    <p class="vegetable-price">$70.99 / kg</p>
                    <Button style={{ backgroundColor: '#81C408', border: 'none' }}><i class="fas fa-shopping-cart"></i> Add to cart</Button>
                </div>
            </div>
            <div class="vegetable-card">
                <span class="vegetable-tag">Vegetable</span>
                <img src={vegetable2} alt="Potatoes" />
                <div class="vegetable-details">
                    <h3 class="vegetable-title">Brogoli</h3>
                    <p class="vegetable-description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt.</p>
                    <p class="vegetable-price">$7.99 / kg</p>
                    <Button style={{ backgroundColor: '#81C408', border: 'none' }}><i class="fas fa-shopping-cart"></i> Add to cart</Button>
                </div>
            </div>
            <div class="vegetable-card">
                <span class="vegetable-tag">Vegetable</span>
                <img src={vegetable3}alt="Parsely" />
                <div class="vegetable-details">
                    <h3 class="vegetable-title">Cauliflower</h3>
                    <p class="vegetable-description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt.</p>
                    <p class="vegetable-price">$7.99 / kg</p>
                    <Button style={{ backgroundColor: '#81C408', border: 'none' }}><i class="fas fa-shopping-cart"></i> Add to cart</Button>
                </div>
            </div>
            <div class="vegetable-card">
                <span class="vegetable-tag">Vegetable</span>
                <img src={vegetable3}alt="Parsely" />
                <div class="vegetable-details">
                    <h3 class="vegetable-title">Cauliflower</h3>
                    <p class="vegetable-description">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt.</p>
                    <p class="vegetable-price">$7.99 / kg</p>
                    <Button style={{ backgroundColor: '#81C408', border: 'none' }}><i class="fas fa-shopping-cart"></i> Add to cart</Button>
                </div>
            </div>
            
            </div>
    </div>

        {/* Contact Form */}
        <div className="container mt-4">
          <h2>Contact Us</h2>
          {submissionStatus === 'success' && (
            <div className="alert alert-success">Message sent successfully!</div>
          )}
          {submissionStatus === 'error' && (
            <div className="alert alert-danger">Failed to send message. Please try again later.</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={submissionStatus === 'submitting'}>
              {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </>
  );
}

export default ContactForm;