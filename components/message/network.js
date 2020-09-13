const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res, next) => {
	controller.getMessages()
		.then((messageList) => {
			response.success(req, res, messageList)
		})
		.catch(() => {
			response.error(req, res, 'Unexpected Error', 500, 'Error Interno')
		})
})

router.post('/', (req, res, next) => {
	const { body } = req;
	controller.addMessage(body.user, body.message)
		.then((fullMessage) => {
			response.success(req, res, fullMessage, 201)
		})
		.catch(() => {
			response.error(req, res, 'Informacion invalida', 500, 'Error en el contenido')
		})
})

router.patch('/:id', (req, res, next) => {
	controller.updateMessage(req.params.id, req.body.text)
		.then((fullMessage) => {
			response.success(req, res, fullMessage, 201)
		})
		.catch(() => {
			response.error(req, res, 'Error interno', 500, null)
		})
})

module.exports = router