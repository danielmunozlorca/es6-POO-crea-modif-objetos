//Creo la función constructora Paciente, objeto que tendrá la información de cada paciente
function Paciente(nombre, edad, rut, diagnóstico) {
    //aquí defino las variables privadas para poner los valores que llevarán las propiedades del paciente
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnóstico = diagnóstico;

    //En este bloque voy a definir los getters y setters
    //Lo hago a través del defineProperty con el objetivo de proteger las variables internas y tener un acceso controlado a
    Object.defineProperty(this, "nombre", {
        //el getter me permite leer el valor que tiene _nombre
        get: function () {
            return _nombre;
        },
        //el setter me permite modificar el valor de _nombre
        set: function (newNombre) {
            _nombre = newNombre;
        }
    });

    Object.defineProperty(this, "edad", { //Con el uso de Object.defineProperty, puedo establecer tanto un getter como un setter en el mismo nombre de propiedad (nombre, edad, etc.). Así, no necesito hacer algo como _getNombre
        get: function () {
            return _edad;
        },
        set: function (newEdad) {
            _edad = newEdad;
        }
    });

    Object.defineProperty(this, "rut", {
        get: function () {
            return _rut;
        },
        set: function (newRut) {
            _rut = newRut;
        }
    });

    Object.defineProperty(this, "diagnóstico", {
        get: function () {
            return _diagnóstico;
        },
        set: function (newDiagnóstico) {
            _diagnóstico = newDiagnóstico;
        }
    });

}

//Creo la función constructora Consultorio, que contendrá una lista de pacientes
function Consultorio(pacientes) {
    //la propiedad pacientes será un array que va a almacenar las instancias de Paciente
    this.pacientes = pacientes;
}

// Método para mostrar todos los pacientes
//Agrego el prototipo de Consultorio para las intancias lo puedan heredar
Consultorio.prototype.mostrarPacientes = function () {
    //Acá verifico que exista el array que sea array
    if (this.pacientes && Array.isArray(this.pacientes)) {
        //Recorro o itero sobre el array de pacientes y muestro los atributos cada uno
        this.pacientes.forEach(function (paciente) {
            console.log("Nombre:", paciente.nombre);
            console.log("Edad:", paciente.edad);
            console.log("RUT:", paciente.rut);
            console.log("Diagnóstico:", paciente.diagnóstico);
            console.log("--------------------------------------------------");
        });
    } else {
        console.log("No hay pacientes para mostrar");
    }
};

// Método para buscar paciente por nombre
Consultorio.prototype.buscarPacientePorNombre = function (nombre) {
    //Busca en el array de pacientes por coinidencia de nombre
    var pacienteEncontrado = this.pacientes.find(function (paciente) {
        //hago la comparación con el nombre de paciente buscado
        return paciente.nombre === nombre;
    });
    //Luego si encuentro el paciente, muestro su información
    if (pacienteEncontrado) {
        console.log("Paciente encontrado:");
        console.log("Nombre:", pacienteEncontrado.nombre);
        console.log("Edad:", pacienteEncontrado.edad);
        console.log("RUT:", pacienteEncontrado.rut);
        console.log("Diagnóstico:", pacienteEncontrado.diagnóstico);
    } else {
        //Si no es encontrado entrega un mensaje
        console.log("No se encontró ningún paciente con el nombre:", nombre);
    }
};

// Instanciar pacientes, utilizando la función contructora ya creada de Paciente
var paciente1 = new Paciente("Marcelo Bravo", 48, "1964646-9", "Hipotiroidismo");
var paciente2 = new Paciente("María Buenaventura", 45, "18765321-0", "Diabetes");
var paciente3 = new Paciente("Pedro Manríquez", 50, "11873344-5", "Lumbago");

// Instanciar el consultorio con los pacientes
var consultorio = new Consultorio([paciente1, paciente2, paciente3]);

// Mostrar todos los pacientes
console.log("Lista de pacientes:");
consultorio.mostrarPacientes();

// Buscar un paciente por nombre
console.log("Buscar paciente '%cMarcelo Bravo%c':", "font-weight: bold;", "");
consultorio.buscarPacientePorNombre("Marcelo Bravo");
