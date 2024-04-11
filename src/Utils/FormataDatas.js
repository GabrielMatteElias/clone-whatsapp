import { isEmpty } from "./Validadores";

const formataData = (data) => {
    if (data === null) {
        return
    } else {
        const partesData = data.split('-');
        const ano = partesData[0];
        const mes = partesData[1];
        const dia = partesData[2];

        return `${dia}/${mes}/${ano}`
    }
}

const getDataAtual = () => {
    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const dataFormatada = `${ano}${mes}${dia}`;

    return dataFormatada
}

/*FORMATAR DATA 2024-03-20T15:29:12 */
const formataDataISO = (dataISO) => {
    if(isEmpty(dataISO)){
        return
    }
    const data = new Date(dataISO);
    const dataFormatada = ("0" + data.getDate()).slice(-2) + "/" + ("0" + (data.getMonth() + 1)).slice(-2) + "/" + data.getFullYear() + " " + ("0" + data.getHours()).slice(-2) + ":" + ("0" + data.getMinutes()).slice(-2) + ":" + ("0" + data.getSeconds()).slice(-2);
    return dataFormatada

}

export {
    formataData,
    getDataAtual,
    formataDataISO
}