import React, { useMemo, useState } from 'react';
import { hardProcess } from '../../helpers/hardProcess';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(100);
    const [show, setShow] = useState(true);

    

    const memoHardProcess = useMemo(() => hardProcess(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small> {counter} </small> </h3>
            <hr/>

            <p>{ memoHardProcess }</p>

            <button
                className="btn btn-primary mr-3"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
