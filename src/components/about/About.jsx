import React from 'react'
import Card from 'react-bootstrap/Card';
import Navbar from '../navbar/Navbar';
import "./about.css"
import { useEffect, useState } from 'react';

const About = () => {

  return (
    <>
    <Navbar />
    <div className='contact_page_container' >
      <h2 className='contact_title_line'>Contato e mais informações</h2>
        <div className='contact_card_container' >
          <Card style={{ width: '68rem', height: '34rem', margin: '8px', overflow: 'hidden'}}>
            <div className='contact_image_container'>
              <Card.Img className='contact_card_item_image' variant="top" src='https://atqaeastsqldiags.blob.core.windows.net/images/371/2/46711186_m.f47d66b7d6b34039b22fb3c5662a1a10.jpg' />
            </div>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text className='contact_card_text'>
                <h2 className='h2'>Feito por Tiago de Souza Gueto</h2>
                <h6 className='h6'>email: tiago.guetoall@gmail.com</h6>
                <h6 className='h6'>RU uninter: 4234639</h6>
                <h8 className='h8'>*Nenhum dos conteúdos exibidos neste site me pertencem e todos os direitos estão reservados a seus respectivos donos</h8>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    </div>
    </>
  )
}

export default About