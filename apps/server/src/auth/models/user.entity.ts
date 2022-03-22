import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';
import { Exclude, instanceToPlain } from 'class-transformer';
// @ts-ignore
import * as credential from 'credential';
import { Department } from '../../departments/entities/department.entity';
import { Certificate } from '../../certificates/entities/certificate.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 'teacher' })
  role: 'teacher' | 'hr' | 'departmentHead' | 'admin';

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  middleName: string;

  @ManyToOne((type) => Department)
  department: string;

  @OneToMany((type) => Certificate, (c) => c.teacher)
  certificates: Certificate[];

  @Column({ nullable: true })
  position?: string;

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

export type SafeUser = Omit<User, 'password' | 'hashPassword' | 'toJSON'>;
