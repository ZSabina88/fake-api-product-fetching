import Input from "./Input";
import classes from "./LoginForm.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { loginUser } from "../../store/authSlice";

export default function LoginForm() {
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    function handleLogin(e) {
        e.preventDefault();
        let userCredentials = {
            firstname,
            email,
            password
        }
        dispatch(loginUser(userCredentials));
    }


    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleLogin}>
                <h1 className={classes.h1}>Sign Up</h1>
                <div>
                    <Input
                        label="Firstname"
                        name="firstname"
                        type="text"
                        placeholder="  Firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="  Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="  Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className={classes.button}>Login</button>
            </form>
        </div>
    );
}
