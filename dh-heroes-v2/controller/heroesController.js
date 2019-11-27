const errorController = require("./errorController.js");
const heroes = require("../data/heroes.json");

function findHeroById(heroId) {
    let foundHero = heroes.find(({ id }) => id == heroId);
    return foundHero;
}

let heroesController = {
    jsoncito: (req, res) => res.send(heroes),
    detalle: (req, res) => {
        let heroId = req.params.n;
        let hero = findHeroById(heroId);
        let message = hero ? `¡Hola!<br><br>Mi nombre es ${hero.nombre} y soy ${hero.profesion}.` : `Lo sentimos, no se ha encontrado ningún/a heroína o heroe con el id ${heroId}.<br><br>Intente con otro id.`;
        res.send(message);
    },
    bio: (req, res) => {
        let ok = req.params.ok;
        let heroId = req.params.n;
        let hero = findHeroById(heroId);
        let message = (hero) ? `${hero.nombre}<br><br>` : `Lo sentimos, no se ha encontrado ningún/a heroína o heroe con el id ${heroId}.<br><br>Intente con otro id.`;
        message += (ok === "ok") ? `${hero.resenia}` : `​Lamento que no desees saber más de mi :(`;
        res.send(message);
    },
    error: errorController.error,
}
module.exports = heroesController;