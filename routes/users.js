var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /users:
 *  get:
 *      description: Get all users. Not yet implemented.
 *      responses:
 *          200:
 *              description: Users of this application. Placeholder string for now.
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
