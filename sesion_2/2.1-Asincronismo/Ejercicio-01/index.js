//                   10        0    (err, result)
const dividir = (dividendo, divisor, callback) => {
    if (divisor === 0) {
        callback({
            error: true,
            message: 'No se puede dividir por 0'
        })
        // (err,        result       )
        // { error: true, message: 'No se puede dividir por 0' }
    } else {
        //              5
        const value = dividendo / divisor;
        callback(null, {
            error: false,
            value
        })
        // (err,        result       )
        // null, { error: false, value (5) };
    }
}

dividir(
    10,

    2,


    (err, result) => {
        if (err) {
            console.log('Ha ocurrido un error', err.message)
        } else {
            console.log('Resultado obtenido correctamente y es: ', result.value)
        }
    }
)

dividir(
    10,

    0,

        // (err,        result       )
        // { error: true, message: 'No se puede dividir por 0' }
    (err, result) => {
        if (err) {
            console.log('Ha ocurrido un error', err.message)
        } else {
            console.log('Resultado obtenido correctamente y es: ', result.value)
        }
    }
)