import PropTypes from 'prop-types'; 
import { Error, Loading } from '../assets';

const withDataLayout = (WrappedComponent) => {
  const HOC = ({ data, error, isLoading }) => {

    // console.log(data);
    // console.log(error);
    // console.log(isLoading);
    
    
    
    
    if (isLoading) {
      return (
        <div className='min-h-80 flex justify-center items-center'>
          <img src={Loading} alt="Loading..." className='h-12 w-12' />
        </div>
      );
    }

    if (error) {
      return (
        <div className='min-h-80 flex justify-center items-center bg-transparent'>
          <img src={Error} alt="Error" className='h-40 w-40 mix-blend-multiply' />
        </div>
      );
    }

    return <WrappedComponent data={data} />;
  };

 
  HOC.propTypes = {
    data: PropTypes.any,             
    error: PropTypes.any,           
    isLoading: PropTypes.bool
  };

  return HOC;
};

export default withDataLayout;
