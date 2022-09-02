import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Doctors {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  specialty: string;
}
