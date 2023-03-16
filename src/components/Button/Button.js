import "./Button.scss";

const Button = ({ value }) => {
    return (
        <button className="button__submit">{value}</button>
    )
};
export default Button;