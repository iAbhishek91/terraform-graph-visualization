import express from "express";

const PORT = 3333
const app = express()


app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => console.log(`Server starting at ${PORT}...`))