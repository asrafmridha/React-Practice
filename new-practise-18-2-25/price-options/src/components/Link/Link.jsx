import PropTypes from 'prop-types';


const Link = ({route}) => {
    console.log(route);
  return (
    <div>
      <li className="mr-3" key={route.id}>
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};
Link.protoTypes={
    route : PropTypes.object,
}
export default Link;
