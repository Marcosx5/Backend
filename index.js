class Usuario {
    constructor(nombre,apellido,books = [],mascotas = []){
        this.nombre = nombre
        this.apellido = apellido;
        this.books = books;
        this.mascotas = mascotas;

    }

    getFullName(){
        return(`El nombre completo del usuario es ${this.nombre} ${this.apellido}`)
    }

    addMascota(nombre){
        this.mascotas.push(nombre);
        void this.mascotas
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(name, author){
        this.books.push({name : name, author : author});
        void this.books
    }
    getBookNames(){
        let bookNames = [];
        this.books.forEach(book => bookNames.push(book.name));
        return bookNames
    }
}

const usuario1 = new Usuario('Marcos', 'Maldonado') // Creating new instance of User class
console.warn('Nuevo usuario creado')
console.log(usuario1)
usuario1.addMascota('Perro')
usuario1.addMascota('Caballo')
usuario1.addMascota('Aguila')
console.warn('Nuevas mascotas agregadas')
console.log(usuario1)
console.log(`Cantidad de mascotas : ${usuario1.countMascotas()}`)
usuario1.addBook('Comer, Rezar,Amar', 'Elizabeth Gilbert')
usuario1.addBook('Despues de Diciembre', 'Joana Marcus')
usuario1.addBook('El Poder del Ahora', 'Eckhart Tolle')
console.warn('Nuevos Libros Agregados')
console.log(usuario1)
console.log(`Nombres de Libros agregados : ${usuario1.getBookNames()}`)