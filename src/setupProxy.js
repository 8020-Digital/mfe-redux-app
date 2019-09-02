/**
 * @todo configure to add header in .env file
 */
module.exports = app => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    });
};