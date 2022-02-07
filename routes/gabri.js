var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /gabri:
 *  get:
 *      description: Get welcome message for Gabri
 *      responses:
 *          200:
 *              description: return a welcome message for Gabri
 */
router.get('/', function(req, res, next) {
  res.send('Hello Gabri happy wedding :)');
});

module.exports = router;
