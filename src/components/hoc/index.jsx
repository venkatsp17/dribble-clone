import Navbar from '../header/navbar'
import Footer from '../footer'

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
