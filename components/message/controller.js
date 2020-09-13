const store = require('./store')

const getMessages = ()  => {
	return new Promise((resolve, reject) => {
		resolve(store.list())
	})
}

const addMessage = (user, message) => {
	return new Promise((resolve, reject) => {
		if(!user || !message){
			console.error('[messageController] No hay usuario o mensaje')
			reject('Los datos sin incorrectos')
		}

		const fullMessage = {
			user,
			message,
			date: new Date()
		}

		store.add(fullMessage)
		resolve(fullMessage)
	})
}

const updateMessage = async (id, message) => {
	return new Promise(async (resolve, reject) => {
		if(!id || !message){
			console.error('[messageController] No hay id o mensaje')
			reject('Los datos sin incorrectos')
		}

		const response = await store.update(id, message)
		resolve(response)
	})
}

module.exports ={
	addMessage,
	getMessages,
	updateMessage
}