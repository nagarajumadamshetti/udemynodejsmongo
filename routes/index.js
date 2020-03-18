const controller= require('../controller/controller');
const express =require('express');
const  router = express.Router();
console.log("Router reached");
/* GET home page. */
router.get('/tour/read',controller.reading);
router.post('/tour/insert',controller.created);
router.delete('/tour/delete/:id',controller.deleteData);
router.put('/tour/update/:id',controller.updated)

module.exports = router;