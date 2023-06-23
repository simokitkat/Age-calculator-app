import btn from "../assets/images/icon-arrow.svg";

const Button = ({ onSmash }) => {
  return (
    <div className="age-btn">
      <button onClick={onSmash}>
        <img src={btn} alt="button-icon" />
      </button>
      <div className="line"></div>
    </div>
  );
};

export default Button;
