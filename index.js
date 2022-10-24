const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send(`*ASSALAMU ALAIKUM* 
    ____ SKILL-LEARNING-SERVER-SITE is running...`)
})

app.listen(port, () => {
    console.log(`Private local server listening on port ${port}`)
})