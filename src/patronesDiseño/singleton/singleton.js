class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.nombre = "";
    Singleton.instance = this;
    return Singleton.instance;
  }

  setName(nombre) {
    this.nombre = nombre;
  }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2); // true
