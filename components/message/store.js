const db = require('mongoose')
const Model = require('./model')

const URI_MONGO = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`

db.connect(URI_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
 .then(() => console.log(`[DB: ${process.env.DB_NAME} ] conectada con éxito`))
 .catch(err => console.error(`[DB: ${process.env.DB_NAME}], ${err}`))

function addMessage(message){
	const myMessage = new Model(message)
	myMessage.save()
}

async function getMessages(){
	const messages = await Model.find()
	return messages
}

async function updateMessage(id, message){
	const response = await Model.findOne({_id:id})
	response.message = message
	const newMessage = await response.save()
	return newMessage
}

module.exports = {
	add: addMessage,
	list: getMessages,
	update: updateMessage
}