import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GenderEnum } from './enum/gender.enum';
import { LanguageEnum } from '../common/enum/language.enum';
import { OrganizationEnum } from '../common/enum/organization.enum';
import { ModalityEnum } from './enum/modality.enum';

@Entity()
export class Respondent {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'char', nullable: false })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'varchar', nullable: false })
  first_name: string;

  @Column({ type: 'varchar', nullable: false })
  last_name: string;

  @Column({ type: 'varchar', nullable: true })
  dni: string;

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;

  @Column({ type: 'json', nullable: true })
  location: string;

  @Column({ type: 'timestamp', nullable: true })
  enrollment_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  birth_date: Date;

  @Column({ type: 'enum', enum: GenderEnum, nullable: true })
  gender: GenderEnum;

  @Column({
    type: 'enum',
    enum: LanguageEnum,
    default: LanguageEnum.es_ES,
    nullable: false,
  })
  language: LanguageEnum;

  @Column({ type: 'enum', enum: OrganizationEnum, nullable: false })
  organization: OrganizationEnum;

  @Column({
    type: 'enum',
    enum: ModalityEnum,
    default: ModalityEnum.VIRTUAL,
    nullable: false,
  })
  modality: ModalityEnum;

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
