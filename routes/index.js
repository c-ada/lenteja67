var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /:
 *  get:
 *      description: Returns html for the default ExpressJS welcome page.
 *      responses:
 *          200:
 *              description: html content
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
