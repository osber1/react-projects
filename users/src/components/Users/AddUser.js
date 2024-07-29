import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";
import {useRef, useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const usernameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState()

    const addUserHandler = e => {
        e.preventDefault();
        const enteredUsername = usernameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Error",
                message: "Please fill in all fields"
            })
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Error",
                message: "Please enter a valid age"
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        usernameInputRef.current.value = "";
        ageInputRef.current.value = "";
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
                    <input id="username" type="text" ref={usernameInputRef}/>
                    <label htmlFor="age"> Age: </label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;