// withDataLayout.js
import React from 'react';
import { Error, Loading } from '../../assets';

const withDataLayout = (WrappedComponent, title) => {
  return ({ data, error, isLoading }) => {
    if (isLoading) {
      return (
        <div className='min-h-screen flex justify-center items-center'>
          <img src={Loading} alt="Loading..." className='h-12 w-12'/>
          {/* <p>Loading...</p> */}
        </div>
      );
    }

    if (error) {
        return (
          <div className='min-h-screen flex justify-center items-center bg-transparent'>
            <img src={Error} alt="Error" className='h-40 w-40 mix-blend-multiply' />
            {/* <p>Error loading {title.toLowerCase()}</p> */}
          </div>
        );
      }
      

    return (
     <WrappedComponent data={data} />
    );
  };
};

export default withDataLayout;
