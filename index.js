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

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id === 'CRS07') {
        res.send(courses);
    }
    else {
        const selectedCourse = courses.find(course => id === course.id);
        res.send(selectedCourse);
    }
    // console.log(req.params.id)
})