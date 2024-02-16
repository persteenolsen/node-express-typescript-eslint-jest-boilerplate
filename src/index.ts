import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'Hello World - Last updated: 16-02-2024!',
  });
});

// Testing if ts type checking is enabled...
let myString = 'This is my string';

// Will always pass ts type checking with or without "transpileOnly": true in tsconfig !
myString = 'String updated...';

// Will only pass ts type checking if "transpileOnly": true is enabled in tsconfig !
//myString = 40;

app.post('/post', async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  return res.status(200).send({
    message: 'Hello World from post!',
  });
});

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occurred: ${error.message}`);
}

export default app;
