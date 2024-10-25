import React, { useEffect, useState } from 'react'

function CountText() {

    const [ValorImput, setValorImput] = useState("")
    const [ContarTexto, setContarTexto] = useState(0)
    const [Color, setColor] = useState('red')

    const cambio = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valor = event.target.value;
        setValorImput(valor);
        setContarTexto(valor.length)

    }

    useEffect(() => {

        if (ContarTexto < 10) {
            setColor('red');
        } else if (ContarTexto >= 10 && ContarTexto <= 20) {
            setColor('orange')
        } else {
            setColor('green')
        }

    }, [ContarTexto]);


    return (
        <div>

            <input type="text"
                value={ValorImput}
                onChange={cambio}
                placeholder='Escriba' />

            <p style={{ color: Color }}>Cantidas de letras: {ContarTexto}</p>

        </div>
    )
}

export default CountText