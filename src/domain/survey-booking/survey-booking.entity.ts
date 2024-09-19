import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { SurveyBookingStatusEnum } from './survey-booking-status.enum';
import { Survey } from '../survey/survey.entity';
import { Respondent } from '../respondent/respondent.entity';

@Entity()
export class SurveyBooking {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'char', nullable: false })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'int', nullable: true })
  survey_id: number;

  @Column({ type: 'int', nullable: true })
  survey_setting_id: number;

  @Column({ type: 'int', nullable: true })
  repondent_id: number;

  @Column({ type: 'int', nullable: true })
  assigned_subject_id: number;

  @Column({
    type: 'enum',
    enum: SurveyBookingStatusEnum,
    default: SurveyBookingStatusEnum.PENDENT,
  })
  status: SurveyBookingStatusEnum;

  @Column({ type: 'date' })
  max_date: Date;

  @Column({ type: 'varchar', unique: true })
  token: string;

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

  @ManyToOne(()=> Survey, (survey) => survey.survey_bookings)
  survey: Survey;

  @ManyToOne(()=>Respondent, (respo))
}
