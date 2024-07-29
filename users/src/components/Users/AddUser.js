import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";
import {useRef, useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const usernameInputRef = useRef();
    const ageInputRef = useRef();

    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState()

    const addUserHandler = e => {
        e.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Error",
                message: "Please fill in all fields"
            })
            return;
        }

        if (+age < 1) {
            setError({
                title: "Error",
                message: "Please enter a valid age"
            })
            return;
        }
        props.onAddUser(username, age);
        setUsername("");
        setAge("");
    };

    const usernameChangeHandler = e => {
        setUsername(() => e.target.value);
    };

    const ageChangeHandler = e => {
        setAge(() => e.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <ErrorModal onClose={errorHandler} title={error.title} message={error.message}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username"> Username: </label>
                    <input id="username" type="text" onChange={usernameChangeHandler} value={username} ref={usernameInputRef}/>
                    <label htmlFor="age"> Age: </label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={age} ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;