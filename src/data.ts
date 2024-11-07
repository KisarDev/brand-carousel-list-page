function getData({ object }: { object: Window & typeof globalThis }) {
    try {
        // Verifica se a propriedade __PRELOADED_STATE__ existe antes de acessar
        if (object && "__PRELOADED_STATE__" in object) {
            const data = JSON.parse((object as any).__PRELOADED_STATE__.innerHTML);
            console.log(data);
            return data;
        } else {
            console.warn("window.__PRELOADED_STATE__ não está definido.");
        }
    } catch (error) {
        console.error("Erro ao parsear __PRELOADED_STATE__:", error);
    }
}

export default getData;
