import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Department } from '../../departments/entities/department.entity';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  middleName: string;

  @OneToOne((type) => Department)
  department: string;

  @Column()
  position: string;
}
