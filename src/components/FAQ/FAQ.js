import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero></Hero>
    <h2>FAQ</h2>
    <ol>
      <li>{settings.faq.p_one}</li>
      <li>{settings.faq.p_two}</li>
      <li>{settings.faq.p_three}</li>
    </ol>
  </Container>
);

export default FAQ;