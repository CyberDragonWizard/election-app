const mongoose = require('mongoose')
const Schema = mongoose.Schema


const RequestBallot = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    streetAddress: { type: String, required: true },
    apartmentSuite: { type: String, required: false },
    city: { type: String, required: true },
    county: { type: String, required: true },
    zipCode: { type: String, required: true },
    day: { type: String, required: true },
    month: { type: String, required: true },
    year: { type: String, required: true },
    email: { type: String, required: false },
    cell: { type: String, required: false }
  }
)

module.exports = mongoose.model('RequestBallot', RequestBallot)