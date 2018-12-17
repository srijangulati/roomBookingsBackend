const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json())
const port = 3000;

const ROOMS = [
    {name: 'metalica', roomId: 1},
    {name: 'Iron Throne', roomId: 2},
    {name: 'XYZ', roomId: 3}
];

const BOOKINGS = [
    {roomId: 1, slotId: 1, date: '14/12/2018' },
    {roomId: 2, slotId: 2, date: '14/12/2018' },
    {roomId: 3, slotId: 4, data: '14/12/2018' }
];

const SLOTS = [
    {slotId: 1, time: '09:00am - 09:30am'},
    {slotId: 2, time: '09:30am - 10:00am'},
    {slotId: 3, time: '10:00am - 10:30am'},
    {slotId: 4, time: '10:30am - 11:00am'},
    {slotId: 5, time: '11:00am - 11:30am'},
    {slotId: 6, time: '11:30am - 09:30am'},
    {slotId: 7, time: '12:00pm - 12:30pm'},
    {slotId: 8, time: '12:30am - 01:00am'},
    {slotId: 9, time: '01:00am - 01:30am'},
    {slotId: 10, time: '01:30am - 02:00am'},
];

app.get('/',(req,res)=>{
    res.send('hello');
});

app.get('/rooms',(req,res)=>{
    res.json(ROOMS);
});

app.get('/bookings',(req,res)=>{
    res.json(BOOKINGS);
});

app.get('/slots',(req,res)=>{
    res.json(SLOTS);
});

app.post('/bookings',(req,res) => {
    const booking = { ...req.body };
    BOOKINGS.push(booking);
    res.json({success: true, message:'booked successfully'});
});

app.listen(port, ()=>{
    console.log(`Backend started at ${port}`);
});