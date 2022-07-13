import Api from '../Api';

export async function buscarTodasFrutas() {
    try {
        const resultado = await Api.get(`/hortfrut`);
        return resultado.data;

    } catch (error) {
        console.log(error);
        return[];
    }
}


export async function pesquisarNomeFruta(nomefruta) {
    try {
        const resultado = await Api.get(`/hortfrut/=${nomefruta}`);
        return resultado.data
    } catch (error) {
        console.log(error);
        return [];
    }
}


export async function salvarNovaFruta(idp, frutap, valorp, fotop) {
    try {
        await Api.post(`/hortfrut/`, {
            id: idp,
            fruta: frutap,
            valor: valorp,
            foto: fotop

        })

    } catch (error) {
        console.log();
        return [];
    }
}


export async function alterarFrutas(idp, frutap, valorp, fotop) {

    try {
        await Api.put(`/hortfrut/${idp}`,
            {
                id: idp,
                fruta: frutap,
                valor: valorp,
                foto: fotop
            })

    } catch {
        console.log();
        return [];
    }

}

export async function deletarFrutas(idp) {

    try {
        await Api.delete(`/hortfrut/${idp}`);
        return 'sucesso'

    } catch (error) {

        console.log();
        return 'error';
    }

}