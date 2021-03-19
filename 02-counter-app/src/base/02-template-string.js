


const name   = 'Mauro';
const apellido = 'Herrera';


// const nameCompleto = name + ' ' + apellido;
const nameCompleto = `${ name } ${ apellido }`;

// console.log( nameCompleto );


export const getGreeting = (name = 'Carlos') => {
    return 'Hello ' + name;
}

// console.log( `Este es un texto: ${] getSaludo( name ) }  ` );