const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send(`*ASSALAMU ALAIKUM* 
    ____ SKILL-LEARNING-SERVER-SITE is running...`)
})

app.listen(port, () => {
    console.log(`Private local server listening on port ${port}`)
})

const courses = require('./data/courses.json')
app.get('/courses', (req, res) => {
    res.send(courses);
})