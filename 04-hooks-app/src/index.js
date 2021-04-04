import React from 'react';
import ReactDom from 'react-dom';

// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';

// import { MultiplesCustomHooks } from './components/03-examples/MultiplesCustomHooks';

import { FocusScreen } from './components/04-useRef/FocusScreen';

// import { MainApp }  from './components/09-useContext/MainApp';

// import { HooksApp } from './HooksApp';

ReactDom.render(
    <FocusScreen />,
    document.getElementById('root')
);