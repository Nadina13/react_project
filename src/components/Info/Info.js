import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={'Info'} imageMain={settings.info.image} />
    <h2>{settings.info.pageTitle}</h2>
    <p>{settings.info.pageContent}</p>
  </Container>
);

export default Info;