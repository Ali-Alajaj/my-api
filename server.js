import express from 'express';
import cors from 'cors';
import clickmart from './routes/clickmart.js';
import bookly from './routes/bookly.js';
import errorHandler from './middleware/error.js';
const PORT = process.env.PORT || 5000

const server = express();
server.use(cors());
server.use(express.json());

server.use('/clickmart', clickmart);
server.use('/bookly', bookly);

server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});