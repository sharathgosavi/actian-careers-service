import express from 'express';
import { DepartmentController } from './department-controller';

export class RouterController {
  private service: express.Application;
  private departmentController: DepartmentController;
  private port: number;

  constructor(port: number) {
    this.service = express();
    this.departmentController = new DepartmentController();
    this.port = port;
    this.initControllers();
  }

  private initControllers(): void {
    this.service.get('/department/open-positions', this.departmentController.handleOpenPositionsRequest.bind(this.departmentController));
  }

  public start(): void {
    this.service.listen(this.port, () => {
      console.log(`Server is listening on port ${this.port}`);
    });
  }
}
