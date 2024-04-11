import { Collapse, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import InputNumero from './components/NumberInput';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import './Conversas.css'
import { formataData } from './Utils/FormataDatas';
import { isEmpty } from './Utils/Validadores'

const listaConversas =
    [
        {
            "numero": "5184247855",
            "clientes": [
                {
                    "numero": "5186851502",
                    "mensagens": [
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Olá, bom dia!!",
                            "midia": null,
                            "fromMe": true
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Bom dia!",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Como você está??",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Estou bem e você?",
                            "midia": null,
                            "fromMe": true
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Também!!",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Amanhã irei ao parque, gostaria de ir comigo?",
                            "midia": null,
                            "fromMe": true
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Claro",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Que horas??",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Passo aí as 15h, o que acha?",
                            "midia": null,
                            "fromMe": true
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Por mim está bem",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Ótimo!",
                            "midia": null,
                            "fromMe": true
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Até amanhã então",
                            "midia": null,
                            "fromMe": true
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Até mais",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Fica bem!",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Você também!",
                            "midia": null,
                            "fromMe": true
                        },
                    ]
                },
                {
                    "numero": "5198981478",
                    "mensagens": [
                        {
                            "data": "2024-01-30T11:00:11",
                            "msg": "Qual o preço do armário?",
                            "midia": null,
                            "fromMe": true
                        }
                    ]
                }
            ]
        },
        {
            "numero": "1198152486",
            "clientes": [
                {
                    "numero": "2684789858",
                    "mensagens": [
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Olá, bom dia!!",
                            "midia": null,
                            "fromMe": true
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Bom dia!",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Como você está??",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Estou bem e você?",
                            "midia": null,
                            "fromMe": true
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Também!!",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Amanhã irei ao parque, gostaria de ir comigo?",
                            "midia": null,
                            "fromMe": true
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Claro",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Que horas??",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Passo aí as 15h, o que acha?",
                            "midia": null,
                            "fromMe": true
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Por mim está bem",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Ótimo!",
                            "midia": null,
                            "fromMe": true
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Até amanhã então",
                            "midia": null,
                            "fromMe": true
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Até mais",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Fica bem!",
                            "midia": null,
                            "fromMe": false
                        },
                        {
                            "data": "2024-02-08T14:52:33",
                            "msg": "Você também!",
                            "midia": null,
                            "fromMe": true
                        },
                    ]
                },
                {
                    "numero": "5186354785",
                    "mensagens": [
                        {
                            "data": "2024-01-30T11:00:11",
                            "msg": "Qual o preço do armário?",
                            "midia": null,
                            "fromMe": true
                        }
                    ]
                }
            ]
        },

    ]

console.log(listaConversas);

const Whatsapp = ({ }) => {
    const [pesquisa, setPesquisa] = useState(''); // pesquisa numeros nas conversas
    const [ultimaMensagem, setUltimaMensagem] = useState(''); // pega length da ultima mensagem na conversa
    const [expandirClientes, setExpandirClientes] = useState(null); //expandir dropdown numero hoepers

    const conversaNumeros = { funcionario: '', cliente: '' }
    const [numeros, updateNumeros] = React.useReducer((state, updates) => ({ ...state, ...updates }), conversaNumeros);
    const [conversaJson, setConversaJson] = useState(null)

    const objDiv = document.getElementById("ultima-mensagem");
    window.scrollTo(0, objDiv);

    const spanRef = useRef(null);

    // Função para rolar até a ultima mensagem
    useEffect(() => {
        if (spanRef.current) {
            spanRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    })

    const buscaConversaMap = (json) => {
        console.log(json);
        const conversaIndividual = json.map((numH) =>
            numH.clientes.find((numCLi) => numeros.cliente === numCLi.numero)
        )
        return conversaIndividual
    }

    //Expande leque de conversas de um usuário
    const handleAbrirConversa = (numero, cliente) => {
        updateNumeros({ funcionario: numero, cliente: cliente })
    }

    //Pegar conversas a partir de numero hoepers e numero cliente
    useEffect(() => {

        const conversaMensagens = buscaConversaMap(listaConversas)

        for (let convValida of conversaMensagens) {
            if (convValida !== undefined) {
                setConversaJson(convValida)
            }
        }

    }, [numeros.cliente])

    useEffect(() => {
        if (listaConversas !== undefined) {
            setUltimaMensagem(listaConversas.length - 1)
        }
    }, [])

    const handleExpandirClientes = (codigo) => {
        if (codigo === expandirClientes) {
            setExpandirClientes(null);
        } else {
            setExpandirClientes(codigo);
        }
    };



    //Função para quebrar linha nas mensagens
    const quebraDeLinha = (texto) => {
        if (isEmpty(texto)) {
            return
        }

        let linhas = [];
        let linhaAtual = '';

        const textoSeparadoPorEspaço = texto.split(' ')

        if (textoSeparadoPorEspaço.length > 1) {
            return texto
        }

        for (let i = 0; i < texto.length; i++) {
            linhaAtual += texto[i];

            if ((i + 1) % 25 === 0 || i === texto.length - 1) {
                linhas.push(linhaAtual);
                linhaAtual = '';
            }
        }

        return linhas.join('\n');
    }

    //Função para adicionar reticencias
    const addReticencias = (texto) => {
        if (texto === null) {
            return
        }

        if (texto.length > 58) {
            const textoEncurtado = texto.substring(0, 47)
            const textoComReticencias = textoEncurtado + '...'
            return textoComReticencias
        }
        return texto
    }

    //Função para pegar data
    const getData = (dataHora) => {
        const listaDatahora = dataHora.split('T')
        const dataFormatada = formataData(listaDatahora[0])
        return dataFormatada
    }

    //Função para pegar horario
    const getHorario = (data) => {
        const dataHora = data.split('T')
        const hora = dataHora[1].substring(0, 5)
        return hora
    }

    //Pesquisa de telefones
    const numeroPesquisado = useMemo(() => {
        const listaNumeroPesquisado = listaConversas.map((c) => c.clientes.filter((telNum) => telNum.numero.includes(pesquisa)))
        const listaNumeroPesquisadoValido = listaNumeroPesquisado.filter((c) => isEmpty(c) !== true)
        return listaNumeroPesquisadoValido
    }, [pesquisa])

    return (
        <div className="flex w-full justify-center items-center h-[100vh]">
            <div id="plist" className="people-list bg-[#fff] w-[63rem] overflow-y-scroll"  >
                <header className='text-[#3b4a54] flex flex-col sticky top-0 z-10 '>
                    <div className='text-[#000000b6] text-[2rem] bg-[#F0F2F5] flex items-center justify-center h-[4.4rem] text-center'>
                        <h6>Histórico whatsapp</h6>
                    </div>
                    <div className='bg-[#fff] border-b-[1px]' style={{ padding: '1rem 1.2rem 1rem' }}>
                        <div className='bg-[#F0F2F5] rounded-md flex items-center justify-between'>
                            <InputNumero
                                placeHolder='Pesquisar conversa'
                                valor={pesquisa}
                                setValor={setPesquisa}
                                bgColor='transparent'
                                width='100%'
                                maximo='11'
                                border='none'
                            />
                            <div className='px-3'>
                                {pesquisa ? <CloseIcon
                                    className='cursor-pointer'
                                    sx={{ color: '#557483' }}
                                    onClick={() => setPesquisa('')}
                                />
                                    : ''}
                            </div>
                        </div>
                    </div>
                </header>
                <div>
                    <ul className="list-unstyled chat-list mb-0">
                        {isEmpty(pesquisa) || isEmpty(numeroPesquisado) ?
                            listaConversas.map((contato, indice) => (
                                <React.Fragment key={indice}>
                                    <li onClick={() => handleExpandirClientes(contato.numero)} className={`clearfix hover:bg-[#F5F6F6] hover:cursor-pointer h-[7.2rem] border-b-[1px] py-4 px-4`}>
                                        <div className="flex items-center w-full">
                                            <div>
                                                <Avatar>
                                                    <WhatsAppIcon sx={{ color: '#fff', fontSize: '2.3rem' }} />
                                                </Avatar>
                                            </div>
                                            <div className='flex w-full justify-between ml-4 focus:bg-orange'>
                                                <p className="text-[1.6rem]  text-[#3b4a54]">{contato.numero}</p>
                                                <IconButton aria-label="expandir linha" size="small" onClick={() => handleExpandirClientes(contato.numero)} title="Visualizar clientes">
                                                    {expandirClientes === contato.numero ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                                                </IconButton>
                                            </div>
                                        </div>
                                    </li> {/* LISTA CONTATOS  */}
                                    <Collapse in={expandirClientes === contato.numero} timeout="auto" className='shadow-[inset_0_0_10px_#969695] bg-[#dce1e386]'>
                                        {contato.clientes.map((contatoNumero, indice) => (
                                            <div key={indice} onClick={() => handleAbrirConversa(contato.numero, contatoNumero.numero)}
                                                className={` ${numeros.cliente === contatoNumero.numero ? 'bg-[#69686748]' : ''} flex w-full flex-col border-b-[1px] p-8 border-[#dce1e3cb] py-2 hover:bg-[#9b9a9a31] hover:cursor-pointer`}>
                                                <div className='flex justify-between'>
                                                    <p className="text-[1.4rem] text-[#3b4a54] pl-[4rem]">{contatoNumero.numero}</p>
                                                    <p className="text-[1.1rem] text-[#667781] float-right">{`${getData(contatoNumero.mensagens[0].data)} ${getHorario(contatoNumero.mensagens[0].data)}`}</p>
                                                </div>
                                                <p className="text-[1.1rem] text-[#667781] pl-[4rem]">{`${addReticencias(contatoNumero.mensagens[0].msg)}`}</p>
                                            </div>
                                        ))}
                                    </Collapse>
                                </React.Fragment>
                            ))
                            :
                            numeroPesquisado.map((cliente) => (
                                cliente.map((numeroCliente, indice) => (
                                    <React.Fragment key={indice}>
                                        <li className={`clearfix hover:bg-[#F5F6F6] hover:cursor-pointer`}>
                                            <div key={indice} onClick={() => handleAbrirConversa(cliente.numero, numeroCliente.numero)}
                                                className={` ${numeros.cliente === numeroCliente.numero ? 'bg-[#69686748]' : ''} flex w-full flex-col border-b-[1px] border-[#dce1e3cb] py-2 hover:bg-[#9b9a9a31] hover:cursor-pointer`}>
                                                <div className='flex justify-between'>
                                                    <p className="text-[1.4rem] text-[#3b4a54] pl-[4rem]">{numeroCliente.numero}</p>
                                                    <p className="text-[1.1rem] text-[#667781] float-right">{`${getData(numeroCliente.mensagens[0].data)} ${getHorario(numeroCliente.mensagens[0].data)}`}</p>
                                                </div>
                                                <p className="text-[1.1rem] text-[#667781] pl-[4rem]">{`${addReticencias(numeroCliente.mensagens[0].msg)}`}</p>
                                            </div>
                                        </li>
                                    </React.Fragment>
                                )))
                            )
                        }
                    </ul>
                </div>
            </div>

            <div className='bg-[#E9E1D8]  w-full flex flex-col gap-[6px] overflow-y-scroll scrollbar-estilizada h-[100vh]'>
                <div className="bg-[#F0F2F5] text-[#557483] p-4 text-[1.6rem] border-[#D1D7DB] border-l-[1px] h-[4.4rem] sticky top-0 z-10">
                    {numeros.cliente &&
                        <div className='flex justify-between'>
                            <h6>  {numeros.cliente}</h6>
                            <h6> {numeros.funcionario}</h6>
                        </div>
                    }
                </div> {/* CONVERSAS  */}
                {conversaJson !== null ?
                    (conversaJson.mensagens.map((mensagemConversa, indice) => (
                        <div key={indice} style={{ marginTop: indice === 0 ? '1em' : '0', padding: '0 1rem' }}>
                            <div
                                style={{
                                    textAlign: 'left',
                                    display: 'flex',
                                    justifyContent: mensagemConversa.fromMe === true ? 'flex-end' : 'flex-start',
                                    width: '100%'
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: '65%',
                                        background: mensagemConversa.fromMe === true ? '#DCF8C6' : '#FFF',
                                        borderRadius: '8px',
                                        padding: '0.6rem 0.7rem 0.8rem 0.9rem',
                                        fontSize: '1.5rem',
                                        boxShadow: 'rgba(11, 20, 26, 0.13) 0px 1px 0.5px 0px'
                                    }}>
                                    <p>{quebraDeLinha(mensagemConversa.msg)}</p>
                                    {/* <button onClick={handleDownload}>Download</button> */}
                                    <p className="
                                                    text-[1rem] 
                                                    text-[#666666be]  
                                                    relative
                                                    float-right       
                                                    mb-[-5px]  
                                                    ml-2                                                                                                                                  
                                                    "
                                    >{`${getData(mensagemConversa.data)} ${getHorario(mensagemConversa.data)}`}</p>
                                </div>
                            </div>
                        </div>
                    )))
                    :
                    (
                        <div className='flex flex-col justify-center items-center h-[100%] text-[2rem] text-[#557483a9]'>
                            <WhatsAppIcon style={{ fontSize: 60, opacity: 0.6 }} />
                            <h6>Selecione uma conversa para visualizar as mensagens.</h6>
                        </div>
                    )
                }
                <span ref={spanRef}></span>
            </div>
        </div >
    )
}

export default Whatsapp