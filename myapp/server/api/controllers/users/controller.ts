import UserService from '../../services/user.service';
import { Request, Response } from 'express';

export class Controller {
  all(req: Request, res: Response): void {
    UserService.all().then((r) => res.json(r));
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id']);
    UserService.byId(id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req: Request, res: Response): void {
    UserService.create(req.body.name, req.body.pass).then((r) =>
      res.status(201).location(`/api/v1/examples/${r.id}`).json(r)
    );
  }
}
export default new Controller();
