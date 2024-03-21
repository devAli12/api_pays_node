const express = require('express');
const router = express.Router();
const paysController = require('../services/pays-crud');

router.route('/pays').get(paysController.getAllPays);
router.route('/pays/:pay').get(paysController.getPay);

module.exports=router;