const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res, next) => {
	res.header({
		"custom-header": "Nuestro valor personalizado"
	})
	response.success(req, res, 'Lista de mensajes')
})

router.post('/', (req, res, next) => {
	const { body } = req;
	controller.addMessage(body.user, body.message)
		.then(() => {
			response.success(req, res, 'Creado correctamente', 201)
		})
		.catch(() => {
			response.error(req, res, 'Informacion invalida', 500, 'Error en el contenido')
		})
})

module.exports = router