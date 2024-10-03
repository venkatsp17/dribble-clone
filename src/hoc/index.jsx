import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export const withHeaderFooter = (WrappedComponent) => {
  return function HeaderFooterHOC(props) {
    return (
      <div className='min-h-screen'>
        <Navbar />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };
};
