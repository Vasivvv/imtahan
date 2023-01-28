const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()
const port = 8888

app.use(cors())
app.use(express.json())



const CardSchema = mongoose.Schema({
    icon: String,
    title: String,
    description: String,

});

const Card = mongoose.model('Card', CardSchema);


app.get('/', (req, res) => {

    Card.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.send("Emeliyyat tapilmadi")
        }
    })
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    Card.findById(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.send("Emeliyyat tapilmadi")
        }
    })
})

app.post('/', (req, res) => {
    const newCard = Card({
        icon: req.body.icon,
        title: req.body.title,
        description: req.body.description,

    });
    newCard.save()
    res.send(newCard)
})

app.delete('/:id', (req, res) => {

    const { id } = req.params
    Card.findByIdAndRemove(id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.send("Emeliyyat tapilmadi")
        }
    })
})



mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://imtahan:200306vasiv@cluster0.5yo1mci.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})