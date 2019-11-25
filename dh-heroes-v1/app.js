// Require de Express
const express = require("express");

// Require de FS
const fs = require("fs");

// Ejecución de Express
const app = express();

const port = 8080;

// Levantando el Servidor en el puerto 3030
app.listen(port, () => console.log(`Server running in ${port}`));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', (req, res) => {
    res.send(`Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las Heroínas y los Heroes de carne y hueso que encontrarás en este sitio.
    <br>
    Esperamos que ellas/os te sirvan como inspiración para poder cumplir tus objetivos.
    <br><br>
    Recuerda: ¡Nunca pares de creer en ti!`);
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
    res.send(heroes);
});

// Ruta /heroes/detalle/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:n', (req, res) => {

    // Acá lo primero será encontrar al héroe que corresponda
    let numeroDeHeroe = req.params.n;
    let heroe = heroes.find(heroe => heroe.id == numeroDeHeroe);
    let mensaje = ``;

    // Si se encuentra al héroe se envía el nombre y su profesión
    if (heroe) {
        mensaje += `¡Hola! 
        <br><br>
        Mi nombre es ${heroe.nombre} y soy ${heroe.profesion}.`
    }
    // Si NO se encuentra se envía el mensaje de no encontrado
    else {
        mensaje += `Lo sentimos, no se ha encontrado ningún/a heroína o heroe con el id ${numeroDeHeroe}.
        <br><br>
        Intente con otro id.`
    }

    res.send(mensaje);
});

// Ruta /heroes/bio/id/ok ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:n/:ok?', (req, res) => {
    // Acá lo primero será encontrar al héroe que corresponda
    let ok = req.params.ok;
    let numeroDeHeroe = req.params.n;
    let heroe = heroes.find(heroe => heroe.id == numeroDeHeroe);
    let mensaje = ``;

    // Si NO se encuentra al héroe se envía un mensaje
    if (!heroe) {
        mensaje = `Lo sentimos, no se ha encontrado ningún/a heroína o heroe con el id ${numeroDeHeroe}.
        <br><br>
        Intente con otro id.`;
    }
    // Si se encuentra al héroe:
    else {
        mensaje = `${heroe.nombre}<br><br>`;
        // Se pregunta si vino el parámetro Y el valor esperado y se envía la información
        if (ok != "ok") {
            mensaje += `​Lamento que no desees saber más de mi :(`;
        }
        // Si nó vino el parámetro se envía el mensaje de error
        else {
            mensaje += `${heroe.resenia}`;
        }
    }
    res.send(mensaje);
});

// Ruta Créditos
app.get("/creditos", (req, res) => {
    res.send(`Mi nombre es Pat Ugarte, soy Desarrollador Mobile Android y me apasiona la enseñanza.<br><br>CONTACTO:<br>https://github.com/PatUgarte/Node_DH-Heroes<br>https://www.linkedin.com/in/patugarte/`);
});

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});