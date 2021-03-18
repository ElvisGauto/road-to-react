import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FirstApp = ( { saludo, subtitle } ) => {



    return (        
        <>
            <h1>{saludo}</h1>
            <p>{ subtitle }</p>
        </>
    );
}

FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'Soy un subtitle'
}

export default FirstApp;