// Import the express framework
import express from 'express';
import router from './routes/index';

const port = parseInt(process.env.PORT, 10) || 5000;
// Create an instance of the express app
const app = express();
// Middleware to parse incoming requests with JSON payloads
app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

export default app;
