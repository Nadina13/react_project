import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={'FAQ'} imageMain={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}></Hero>
    <h2>FAQ</h2>
    <ol>
      <li>{settings.faq.p_one}</li>
      <li>{settings.faq.p_two}</li>
      <li>{settings.faq.p_three}</li>
    </ol>
  </Container>
);

export default FAQ;