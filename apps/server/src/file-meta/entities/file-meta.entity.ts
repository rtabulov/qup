import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Certificate } from '../../certificates/entities/certificate.entity';

@Entity()
export class FileMeta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne((type) => Certificate, (c) => c.files, { onDelete: 'CASCADE' })
  certificate: Certificate;

  @CreateDateColumn()
  createdAt: Date;
}
