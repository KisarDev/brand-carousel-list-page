function getData({ object }: { object: Window & typeof globalThis }) {
    let brands: any = []
    try {
        if (object && "__PRELOADED_STATE__" in object) {
            const data = JSON.parse((object as any).__PRELOADED_STATE__.innerHTML);
            const components = data.pageState.initialState.sidebar.components
            components.map((component: any) => {
                if (component.type == "AVAILABLE_FILTERS") {
                    const arrayBrands = component.filters
                    arrayBrands.map((item: any) => {
                        if (item.id == "BRAND") {
                            brands = item.values
                        }
                    }
                    )
                    return brands
                }
            }

            )
        } else {
            console.warn("window.__PRELOADED_STATE__ não está definido.");
        }
    } catch (error) {
        console.error("Erro ao parsear __PRELOADED_STATE__:", error);
    }
    return brands
}

export default getData;
