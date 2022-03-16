import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { Exclude, instanceToPlain } from 'class-transformer';
// @ts-ignore
import * as credential from 'credential';
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

  @ManyToOne((type) => Department)
  department: string;

  @Column()
  position: string;

  @Column({ unique: true })
  email: string;

  @Exclude({ toPlainOnly: true })
  @Column()
  password: string;

  toJSON() {
    return instanceToPlain(this);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    return (
      this.password &&
      (await new Promise((resolve, reject) =>
        credential().hash(this.password, (err, hash) =>
          err ? reject(err) : resolve((this.password = hash)),
        ),
      ))
    );
  }
}
