import { RouterController } from './controllers/router-controller';

const port = 3000;
const app = new RouterController(port);
app.start();