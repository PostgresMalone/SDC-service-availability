const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({ //Make this into just a roomID table2
  roomId: {
    type: Number,
    index: true,
    unique: true
  },
  roomName: String,
  price: Number,
  reviewSummary: String,
  type: String,
  location: String,
  reviewNum: Number,
  monthMin: Boolean,
});

const reservationSchema = new Schema({
  _id: Number,
  roomId: {
    type: Number,
    index: true,
    unique: true
  },
  checkIn: String,
  checkOut: String,
  adults: Number,
  children: Number,
  infants: Number
})
// Create a Reservation schema and table

const Room = mongoose.model('Room', roomSchema);
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports.Room = Room;
module.exports.Reservation = Reservation;
