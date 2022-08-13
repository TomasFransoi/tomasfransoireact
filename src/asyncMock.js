const products = [
    {id: "1", name: "Calcos personalizadas", price: "200", category: "Calcos", stock:"30" ,img:"../images/calcos-personalizadas.png", descripcion:'calcos personalizadas es la opcion para el cliente de hacer una calco personalizada de lo que quiera'},
    {id: "2", name: "funda de asiento mtb", price: "650", category: "Fundas", stock:"15",img:"../images/funda-asiento-mtb.jpeg", descripcion:'esta es una funda para el aciento de las bicicletas'},
    {id: "3", name: "cubre vaina", price: "250", category: "productosVarios", stock:"22",img:"../images/cubre-vaina.jpeg", descripcion:'el cubre vaina tiene de utilidad proteger la vaina'},
    {id: "4", name: "Protectores anti ralladura", price: "300", category: "productosVarios", stock:"11" ,img:"../images/Protectores-anti-ralladura.jpeg", descripcion:'el protector anti ralladura tiene como utilidad proteger el duadro de la  bicicleta de las ralladuras'}
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}