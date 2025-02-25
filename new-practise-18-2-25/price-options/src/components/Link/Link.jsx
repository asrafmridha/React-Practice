import PropTypes from 'prop-types';

const Link = ({route}) => {
    console.log(route);
  return (
    <div className=''>
      <li className="mr-5 " key={route.id}>
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = { 
  route: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
};
export default Link;
