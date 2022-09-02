import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Doctors } from "../entity/Doctors";
import { AppDataSource } from "../data-source";

export class DoctorsController {
  private DoctorsRepository = AppDataSource.getRepository(Doctors);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.DoctorsRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.DoctorsRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.DoctorsRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let DoctorsToRemove = await this.DoctorsRepository.findOneBy({
      id: request.params.id,
    });
    await this.DoctorsRepository.remove(DoctorsToRemove);
  }
}
