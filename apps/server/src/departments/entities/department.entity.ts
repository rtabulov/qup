import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id: Department;

  @Column({ length: 256 })
  name: string;
}
