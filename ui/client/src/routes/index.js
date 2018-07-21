import React, { Component } from 'react';
import MainPage from '../components/mainPageComponent';
import Test from '../components/testComponent';
import Contact from '../components/ContactComponent';

export const componentRoutes = [
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/',
    component: MainPage
  }
];
