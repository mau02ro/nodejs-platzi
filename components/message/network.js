const express = require('express')
const response = require('../../network/response')
const controller = require('.7controller')
const router = express.Router()

router.get('/message', (req, res, next) => {
	res.header({
		"custom-header": "Nuestro valor personalizado"
	})
	response.success(req, res, 'Lista de mensajes')
})

router.post('/message', (req, res, next) => {

	controller.addMessage(body.user, body.message)

	if(req.query.error == 'ok'){
		response.error(req, res, 'Error inesperado', 500, 'Es solo una simulación')
	}else{
		response.success(req, res, 'Creado correctamente', 201)
	}
})

module.exports = router