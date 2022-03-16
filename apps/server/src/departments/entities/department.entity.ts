import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Teacher } from '../../teachers/entities/teacher.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 256, unique: true })
  name: string;

  @OneToMany((type) => Teacher, (t) => t.department)
  teachers: string;
}
