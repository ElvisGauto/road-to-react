import React from 'react';
import ReactDom from 'react-dom';

// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';

// import { MultiplesCustomHooks } from './components/03-examples/MultiplesCustomHooks';

// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';

// import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';

// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { CallbackHook } from './components/06-memos/CallbackHook';

import { TodoApp } from './components/08-useReducer/TodoApp';

// import { MainApp }  from './components/09-useContext/MainApp';

// import { HooksApp } from './HooksApp';

ReactDom.render(
    <TodoApp />,
    document.getElementById('root')
);
