import PropTypes from 'prop-types';

const Example = ({name, userName, valor}) => {
    return (
    <>
        <h1>{name} {userName} {valor + 2}</h1>
        <p>¡Soy nueva en esto!</p>
    </>
  )
}

// Definir los tipos de las propiedades
Example.propTypes = {
    name: PropTypes.string.isRequired,
    userName: PropTypes.number.isRequired,
    valor: PropTypes.number
}

Example.defaultProps ={
    name: 'No hay contenido',
    userName: 'No hay contenido',
    valor: 'No hay contenido'
}

export {Example};