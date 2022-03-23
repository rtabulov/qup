import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { FileMeta } from '../../file-meta/entities/file-meta.entity';
import { User } from '../../auth/models/user.entity';
@Entity()
export class Certificate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  issuedBy: string;

  @Column()
  issuedDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ default: false })
  approved: boolean;

  @Column({ default: true })
  awaitingApproval: boolean;

  @Column({ default: '' })
  comment: string;

  @OneToMany((type) => FileMeta, (file) => file.certificate)
  files: FileMeta[];

  @ManyToOne((type) => User, (u) => u.certificates, { onDelete: 'CASCADE' })
  teacher: User;
}
