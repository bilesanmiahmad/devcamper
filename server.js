const express = require('express');
const dotenv = require('dotenv');

//Route files
const bootcamps = require('./routes/bootcamps');


//Load environment variables
dotenv.config({'path': './config/config.env'})

const app = express();

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// app.get('/', (req, res) => {
//     // res.send({"name": "Medo Bills"});
//     // res.json({"name": "Medo Bills"});
//     //res.sendStatus(400);
//     // res.status(400).json({"success": false, "message": "We failed you intentionally"});
//     // res.status(200).json({"data": {"id": 1, "name": "Medo Bills"}, "success": true});
// });



const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in ${ENV} mode on port ${PORT}`));