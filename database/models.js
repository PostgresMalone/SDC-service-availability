const mongoose = require('mongoose');

const roomSchema = new Schema({ //Make this into just a roomID table2
  roomId: {
    type: Number,
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
    unique: true
  },
  checkIn: Date,
  checkOut: Date,
  adults: Number,
  children: Number,
  infants: Number
})
// Create a Reservation schema and table

const Room = mongoose.model('Room', roomSchema);
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports.Room = Room;
module.exports.Reservation = Reservation;
