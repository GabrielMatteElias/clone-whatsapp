import React from 'react';
import './NumberInput.css'
//Input  de texto sem restricoes
// aceita numero, letras, caracteres especiais
// maxLength

export default function NumberInput({ nome, maximo, setValor, valor, placeHolder, bgColor, width, height, border, transition }) {

    return (
        <label className='label-input-span'>
            <span>{nome}</span>
            <input
                type='tel'
                className='input'
                maxLength={maximo}
                onChange={(value) => setValor(value.target.value)}
                value={valor}
                placeholder={placeHolder}
                style={{
                    padding: '0.6rem',
                    paddingLeft: '3rem',
                    fontSize: '1.5rem',
                    backgroundColor: bgColor,
                    height: height,
                    outline: 'none',
                    width: width,
                    borderRadius: '6px',
                    border: border,
                    "&:hover": {
                        border: border,
                        transition: transition
                    },
                    "&:focus": {
                        border: border,
                        transition: transition
                    },
                }}
            />
        </label>
    )
}