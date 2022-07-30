const products = [
    {id: "1", name: "Calcos Fantacia", price: "150", category: "Calcos", stock:"30"},
    {id: "2", name: "Calcos Personalizadas", price: "200", category: "Calcos", stock:"15"},
    {id: "3", name: "Fundas Fantacia", price: "280", category: "Fundas", stock:"22"},
    {id: "4", name: "Protectores anti ralladura", price: "300", category: "Productos varios", stock:"11"}
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}