import "./StarsRating.css";

const StarsRating = ({ value }) => {
  const handleRating = () => {
    return (value * 100) / 5 + "%";
  };

  return (
    <div className="stars">
      <div className="star-outer">
        <div className="star-inner" style={{ width: handleRating() }}></div>
      </div>
    </div>
  );
};

export default StarsRating;
