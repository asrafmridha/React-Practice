import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOptionCard = ({ priceData }) => {
  const { name, price, features } = priceData;
  return (
    <div className="flex flex-col p-8 bg-blue-500 rounded-2xl">
      <h2>
        <span className="text-3xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-4xl">{name}</h4>
      <div className="grow">
        {features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
        <button className="mt-5 btn btn-block btn-primary hover:bg-green-900">
          Buy Now
        </button>
      </div>
    </div>
  );
};

PriceOptionCard.propTypes = {
  priceData: PropTypes.object,
};

export default PriceOptionCard;
