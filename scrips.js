/*
class manga{
    constructor(nombre, genero, tipo){
        this.nombre = nombre
        this.genero = genero
        this.tipo = tipo
    }
}

const manga1 = new manga("The Breakers", "accion", "manhwa", )
const manga2 = new manga("Swimming Lessons for a Mermaid", "comedia", "manwha")
const manga3 = new manga("Dejare de ser Emperatriz", "Romance", "manhwa")

const mangas = [manga1, manga2, manga3]

const divMangas = document.getElementById(`misMangas`)

mangas.forEach(manga => {
    divMangas.innerHTML += `
        <div class = "titulos">
            <p>nombre: ${manga.nombre}</p>
            <p>genero: ${manga.genero}</p>
            <p>tipo: ${manga.tipo}</p>
        
        </div>
    
    
    
    `
})
*/

let manga = [
    {
        nombre: `The Breakers`,
        genero: `accion`,
        tipo: `manhwa`,
        imagen: `http://d2r9epyceweg5n.cloudfront.net/stores/057/977/products/a04a42df-df62-11b5-58ca-50eb6c2ad67c1-c63880f5ee6cc1937516471370348018-640-0.jpg`

    },
    {
    
        nombre: `Swimming Lessons for a Mermaid`,
        genero: `comedia`,
        tipo: `manhwa`,
        imagen: `https://tumangas.net/assets_m/series/covers/6296237955c2d.jpg`

    },
    {
        nombre: `Dejare de ser Emperatriz`,
        genero: `Romance`,
        tipo: `manhwa`,
        imagen: `https://otakuteca.com/images/books/cover/5fc03ece5ce3f.jpg`
    }
]


let divMangas = document.getElementById(`misMangas`)

for (let listaMnaga of manga){
    divMangas.innerHTML += `
        <div class = "asd">
        <img src=${listaMnaga.imagen}>
        <p> ${listaMnaga.nombre}</p>
        <p> ${listaMnaga.genero}</p>
        <p> ${listaMnaga.tipo}</p>
              
        </div>
    
    
    `
}
































