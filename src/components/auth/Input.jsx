import classes from "./Input.module.css";

export default function Input({ label, name, type, value, placeholder, onChange }) {
    return (
        <div className={classes.wrapper}>
            <label htmlFor={label}>{label}</label>
            <input
                className={classes.input}
                type={type} name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange} required />
        </div>
    );
}
