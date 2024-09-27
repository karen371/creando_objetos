// Objeto Consultorio
function Consultorio(nombre) { 
    this._nombre = nombre;
    this._pacientes = []; 

    Object.defineProperty(this, 'setNombre', {
        set: function(nombre) {
            this._nombre = nombre;
        }
    });

    Object.defineProperty(this, 'getNombre', {
        get: function() {
            return this._nombre;
        }
    });

    Object.defineProperty(this, 'setPacientes', {
        set: function(paciente) {
            if (paciente instanceof Paciente) { 
                this._pacientes.push(paciente);
            } else {
                console.error('El valor debe ser una instancia de Paciente');
            }
        }
    });

    Object.defineProperty(this, 'getPacientes', {
        get: function() {
            return this._pacientes;
        }
    });
}

// Objeto Paciente
function Paciente() {
    let _nombre = '';
    let _edad = '';
    let _rut = '';
    let _diagnostico = '';

    Object.defineProperty(this, 'setNombre', {
        set: function(nombre) {
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, 'getNombre', {
        get: function() {
            return _nombre;
        }
    });

    Object.defineProperty(this, 'setEdad', {
        set: function(edad) {
            _edad = edad;
        }
    });

    Object.defineProperty(this, 'getEdad', {
        get: function() {
            return _edad;
        }
    });

    Object.defineProperty(this, 'setRut', {
        set: function(rut) {
            _rut = rut;
        }
    });

    Object.defineProperty(this, 'getRut', {
        get: function() {
            return _rut;
        }
    });

    Object.defineProperty(this, 'setDiagnostico', {
        set: function(diagnostico) {
            _diagnostico = diagnostico;
        }
    });

    Object.defineProperty(this, 'getDiagnostico', {
        get: function() {
            return _diagnostico;
        }
    });
}

// Instanciar pacientes
let paciente1 = new Paciente();
paciente1.setNombre = 'Emilio';
paciente1.setRut = '1-1';
paciente1.setEdad = '20';
paciente1.setDiagnostico = 'diabetes';

let paciente2 = new Paciente();
paciente2.setNombre = 'Camila';
paciente2.setRut = '1-3';
paciente2.setEdad = '50';
paciente2.setDiagnostico = 'dolor de guatita';

let paciente3 = new Paciente();
paciente3.setNombre = 'Ale';
paciente3.setRut = '1-4';
paciente3.setEdad = '40';
paciente3.setDiagnostico = 'dolor de cabeza';

// Instanciar consultorio
let consultorio1 = new Consultorio('Consultorio 1');
consultorio1.setPacientes = paciente1;
consultorio1.setPacientes = paciente2;
consultorio1.setPacientes = paciente3;

// Mostrar datos del consultorio
console.log(consultorio1.getNombre); 
console.log(consultorio1.getPacientes); 

// Mostrar informacion de cada paciente
consultorio1.getPacientes.forEach(paciente => {
    console.log(`Nombre: ${paciente.getNombre}, Edad: ${paciente.getEdad}, RUT: ${paciente.getRut}, Diagnóstico: ${paciente.getDiagnostico}`);
});
