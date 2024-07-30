import React, {useEffect, useState} from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {
    },
    onLogin: (email, password) => {
    }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserIsLoggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(storedUserIsLoggedIn === '1');
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;