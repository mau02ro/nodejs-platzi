
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

		resolve(fullMessage)
	})
}

module.exports ={
	addMessage
}