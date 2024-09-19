import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Program {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'char', nullable: false, unique: true })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  abbreviation: string;

  @Column({ type: 'json', nullable: false })
  name: object;

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
