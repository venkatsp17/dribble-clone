import PropTypes from 'prop-types';

const OutlineButton = ({text, width, padding, borderColor="black"}) => {
  return (
    <button className={`text-sm font-bold p-${padding} bg-transparent text-black border border-${borderColor} rounded-full w-${width} hover:opacity-60`}>{text}</button>
  )
}

OutlineButton.propTypes = {
  text: PropTypes.any,             
  width: PropTypes.any,           
  padding: PropTypes.string,
  borderColor: PropTypes.string,
};

export default OutlineButton