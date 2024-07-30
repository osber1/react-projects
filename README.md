# React Hooks

### `useState`
### `useRef`
### `useEffect`
### `useReducer`

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