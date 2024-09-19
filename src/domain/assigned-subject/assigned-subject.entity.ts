import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrganizationEnum } from '../common/enum/organization.enum';

@Entity()
export class AssignedSubject {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'char', nullable: false })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'int', nullable: false })
  subject_id: number;

  @Column({ type: 'int', nullable: true })
  teacher_id: number;

  @Column({ type: 'boolean', nullable: true })
  current: boolean;

  @Column({ type: 'enum', enum: OrganizationEnum, nullable: false })
  organization: OrganizationEnum;

  @Column({ type: 'timestamp', nullable: true })
  assigned_date: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
