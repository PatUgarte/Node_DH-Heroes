const errorController = require("./errorController.js");

let mainController = {
    homePage: (req, res) => res.send(`Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las Heroínas y los Heroes de carne y hueso que encontrarás en este sitio.<br>Esperamos que ellas/os te sirvan como inspiración para poder cumplir tus objetivos.<br><br>Recuerda: ¡Nunca pares de creer en ti!`),
    creditos: (req, res) => res.send(`Mi nombre es Pat Ugarte, soy Desarrollador Mobile Android y me apasiona la enseñanza.<br><br>CONTACTO:<br>https://github.com/PatUgarte/Node_DH-Heroes<br>https://www.linkedin.com/in/patugarte/`),
    error: errorController.error,
};

module.exports = mainController;