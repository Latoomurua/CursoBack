class Usuarios {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }
    getFullName(){
        console.log(`Nombre completo del usuario: ${this.nombre} ${this.apellido}`)
    };
    addMascota(name){
        this.mascotas.push(name)
    };
    countMascotas(){
        console.log(`El usuario tiene un numero de mascotas de: ${this.mascotas.length}`)
    };
    addBook(nombreLibro, autorLibro){
        this.libros.push({nombreLibro, autorLibro});
    };
    getBookNames(){
        const indexed = this.libros.map((libros) => libros.nombreLibro);
        console.log(indexed);
    };
}