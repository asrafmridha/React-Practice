
import PropTypes from 'prop-types';
import { GoVerified } from "react-icons/go";
const Features = ({feature}) => {
    return (
        <div>
            <div className='flex mt-4'>
            <span className='mr-3 text-2xl '>
            <GoVerified />
            </span>
                   {
                    feature
                   }
            </div>
        </div>
    );
};
Features.propTypes = { 
    feature :PropTypes.string
};

export default Features;