const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
const corsMiddleWare = cors(corsOptions);

module.exports = corsMiddleWare