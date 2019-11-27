let errorCotroller = {
    error: (req, res) => res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!'),
};

module.exports = errorCotroller;