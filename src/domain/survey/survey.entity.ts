import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Abbr } from '../common/value-objects/abbr';
import { surveyStateEnum } from './enum/survey-state.enum';
import { IsEnum, Length } from 'class-validator';
import { Options } from './value-objects/options';
import { SurveySetting } from '../survey-setting/survey-setting.entity';
import { SurveyBooking } from '../survey-booking/survey-booking.entity';

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', nullable: false })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'int', nullable: true })
  survey_reference_code: number;

  @Column({ type: 'text', nullable: false })
  @Length(1, 100, { message: 'Name must be between 1 and 100 characters' })
  name: string;

  @Column({
    type: 'varchar',
    unique: true,
    transformer: {
      to: (value: string) => {
        return new Abbr(value).getValue();
      },
      from: (value: string) => {
        return value;
      },
    },
  })
  abbr: string;

  @Column({
    type: 'enum',
    enum: surveyStateEnum,
    default: surveyStateEnum.IN_CONSTRUCTION,
  })
  @IsEnum(surveyStateEnum, { message: 'Invalid survey state' })
  state: surveyStateEnum;

  @Column({
    type: 'jsonb',
    nullable: false,
    transformer: {
      to: (value: Options) => ({
        url: value.getUrl(),
        is_mandatory: value.isMandatory(),
      }),
      from: (value: any) => value,
    },
  })
  options: {
    url: string;
    is_mandatory: boolean;
  };

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
  published_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  publication_status_changed_at: Date;

  @OneToMany(()=>SurveySetting, (survey_setting) =>  survey_setting.survey)
  survey_settings: SurveySetting[];

  @OneToMany(()=> SurveyBooking, (survey_booking) => survey_booking.survey)
  survey_bookings: SurveyBooking[];

}
