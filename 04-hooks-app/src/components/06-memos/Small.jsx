import React, { memo } from 'react'

// solo se  va a volver a  ejecutar cuando sus propiedades  cambien
export const Small = memo(({ value }) => {

    console.log('Me  volví a  llamar')

    return (
        <small> { value } </small>
    )
});
