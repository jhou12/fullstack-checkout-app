const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/${process.env.MONGO_DB || 'checkout'}`, {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('Mongoose connected!')
})

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zipcode: String,
  phone: String,
  ccn: String,
  exp: String,
  cvv: String,
  ccZipcode: String,
  confirmed: Boolean,
})

const Form = mongoose.model('Form', formSchema)

let makeId = (cb) => {
  let blank = new Form()
  console.log('New ID:', blank._id)
  cb(null, blank._id)
}

let saveForm = (form, cb) => {
  Form.findOneAndUpdate({_id: form._id}, form, {upsert: true}, function(err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log('db form saved!')
      cb()
    }
  })
}

let confirm = (id, cb) => {
  Form.find({_id: id._id}, function(err, docs) {
    if (err) {
      console.log(err)
    } else {
      cb(null, docs)
    }
  })
}

module.exports.makeId = makeId
module.exports.saveForm = saveForm
module.exports.confirm = confirm