const products = [
    {
        id: "h6269",
        name: "Fuente VS650",
        stock: 8,
        category: "Componentes",
        image: "/img/fuente.png",
        price: 200000
    },
    {
        id: "h2479",
        name: "i7 Procesador",
        stock: 9,
        category: "Componentes",
        image: "/img/i7.png",
        price: 170000
    },
    {
        id: "h8368",
        name: "Gtx 1050 Ti MSI",
        stock: 10,
        category: "Componentes",
        image: "/img/gtx1050ti.png",
        price: 230000
    },
    {
        id: "h1903",
        name: "Rog Strix Z490-E Motherboard",
        stock: 12,
        category: "Componentes",
        image: "/img/motherboard.png",
        price: 350000
    },
    {
        id: "h8811",
        name: "Pc Armada Amd Ryzen 5 5600g 12 Nucleo Ram 8gb Ssd 480",
        stock: 10,
        category: "PcsA",
        image: "/img/pcsarmadas.png",
        price: 2234500
    },
    {
        id: "h9551",
        name: "BenQ Zowie XL2540K 240Hz",
        stock: 5,
        category: "Monitores",
        image: "/img/monitor.png",
        price: 400000
    },
    {
        id: "h12192",
        name: "Teclado Redragon Kumara K552-2",
        stock: 6,
        category: "Teclados",
        image: "/img/teclado.png",
        price: 99000
    },
    {
        id: "b3179",
        name: "Logitech G203",
        stock: 5,
        category: "Mouses",
        image: "/img/mouse.png",
        price: 30000
    },
    {
        id: "w4954",
        name: "Luces Led",
        stock: 9,
        category: "Luces",
        image: "/img/luces.png",
        price: 15000
    },
]

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

export default getProducts