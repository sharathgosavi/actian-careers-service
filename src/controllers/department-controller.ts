import { Request, Response } from 'express';
import { DepartmentPositionsScraper } from '../services/department-positions-scraper';

export class DepartmentController {
    private departmentPositionsScraper: DepartmentPositionsScraper;

    constructor() {
        this.departmentPositionsScraper = new DepartmentPositionsScraper();
    }

    public async handleOpenPositionsRequest(req: Request, res: Response): Promise<void> {
        const department = req.query.department as string;
        if (!department) {
            res.status(400).json({ error: 'Department is required!' });
            return;
        }
        try {
          const positions = await this.departmentPositionsScraper.getOpenPositions(department);
          if (positions.length > 0)
            res.json({ positions });
          else
            res.json({message: `No positions found for the department:', ${department}`});
        } catch (err) {
            res.status(500).json({ error: err instanceof Error ? err.message : 'Unknown error occurred' });
        }
    }
}
