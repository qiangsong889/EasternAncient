import React, { Component } from 'react';
import MainPage from '../components/mainPageComponent';
import Contact from '../components/ContactComponent';

export const componentRoutes = [
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/',
    component: MainPage
  }
];
