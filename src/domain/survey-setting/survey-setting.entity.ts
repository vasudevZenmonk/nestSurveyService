import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LanguageEnum } from '../common/enum/language.enum';
import { OrganizationEnum } from '../common/enum/organization.enum';

@Entity()
export class SurveySetting {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'char', nullable: false })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'char', nullable: false })
  survey_uuid: string;

  @Column({ type: 'int', nullable: true })
  survey_id: number;

  @Column({ type: 'string', nullable: false })
  event_name: string;

  @Column({ type: 'json', nullable: false })
  programs: object;

  @Column({
    type: 'enum',
    enum: LanguageEnum,
    default: LanguageEnum.es_ES,
    nullable: false,
  })
  language: LanguageEnum;

  @Column({ type: 'enum', enum: OrganizationEnum, nullable: false })
  organization: OrganizationEnum;

  @Column({ type: 'boolean', default: false, nullable: false })
  is_active: boolean;

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

  @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_DATE' })
  notification_start_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  notification_final_date: Date;
}
