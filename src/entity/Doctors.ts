import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Doctors {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: "int", width: 7 })
  CRM: number;

  @Column()
  fixo: number;

  @Column()
  celular: number;

  @Column({ type: "varchar", array: true })
  CEP: string[];

  @Column({ type: "varchar", array: true })
  specialty: string[];
}
