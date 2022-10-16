import { useState } from 'react';
import classes from  './Counter.module.scss'

export function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>{count}</h2>
            <button className={classes.simple} onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}
