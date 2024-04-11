const retiraAcentos = (palavra) => {
    if (palavra === null) {
        return
    } else {
        return palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
}

export {
    retiraAcentos,
}