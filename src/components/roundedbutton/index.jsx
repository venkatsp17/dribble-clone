import PropTypes from 'prop-types'; 
import { FcGoogle } from 'react-icons/fc';
// import { FcGoogle } from 'react-icons/fc';

const RoundedButton = ({text, width, padding, weight, color="white", bgcolor="black"}) => {
  return (
    <button className={`font-${weight} p-${padding} bg-${bgcolor} text-${color} border-none rounded-full w-${width} hover:opacity-60 flex items-center justify-center`}>{text.includes("Sign") && width!=26 ?<FcGoogle size={20} className='mx-1' />:<></>}{text}</button>
  )
}

RoundedButton.propTypes = {
  text: PropTypes.any,             
  width: PropTypes.any,           
  padding: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string
};

export default RoundedButton