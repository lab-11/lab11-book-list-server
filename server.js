'use strict'

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const pg = require('pg');

const app = express();

const PORT = process.env.PORT







app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));