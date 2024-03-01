const Button = (props) => {
  return (
    <div className={props.className}>
      <img src={props.icon} />
      <h5>{props.text}</h5>
    </div>
  );
};

export default Button;
