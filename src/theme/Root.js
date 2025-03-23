import React from 'react';
import BackToTopButton from '../components/BackToTopButton';

export default function Root({ children }) {
  return (
    <>
      {children}
      <BackToTopButton />
    </>
  );
}