import classNames from "classnames/bind"
import styles from "./Button.module.css"

const cx = classNames.bind(styles);

const Button = ({ children, onClick, active}) => {
  const className = cx({
    button: true,
    active: active
  });
  
  return (
    <button className={className} onClick={onClick}>{children}</button>
  );
}

export default Button;