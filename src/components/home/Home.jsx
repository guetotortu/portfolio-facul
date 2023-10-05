import React from 'react'
import "./home.css"
import Card from 'react-bootstrap/Card';
import Navbar from '../navbar/Navbar';
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';

function Home() {
  let cardImageHeight= '150px'

  const [cards, setCards] = useState([])

  const fetchCardsData = () => {
    fetch("http://localhost:3000/cards")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCards(data)
      })
  }

  useEffect(() => {
    fetchCardsData()
  }, [])

  return (
    <>
    <Navbar />
    <div className='home_page_container' >
      <h2 className='title_line'>Lojas de Cosmópolis</h2>
        <div className='cards_container' >
          {
            cards.map(item => (
              <div key={item.id}>
                <Card style={{ width: '36rem', height: '24rem', margin: '8px', overflow: 'hidden'}}>
                  <div className='image_container'>
                    <Card.Img className='card_item_image' variant="top" src={`${item.imgSrc}`} />
                    <script>{console.log(item.imgSrc)}</script>
                  </div>
                  <Card.Body className='card_body'>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
          }
        </div>
    </div>
    </>
  )
}

export default Home