# React Hooks

### `useState`
### `useRef`
### `useEffect`
### `useReducer`
### `useContext`

# React tunnel

```html
<div id="backdrop-root"></div>
```

```jsx
{
    ReactDOM.createPortal(<Backdrop/>, document.getElementById("backdrop-root"))
}
```

# CSS

```jsx
import styles from "./Button.module.css";

<button className={styles.button}/>
<div className={`${styles.card} ${props.className}`}/>
```

# Context API

```jsx
import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
});

export default AuthContext;
```
