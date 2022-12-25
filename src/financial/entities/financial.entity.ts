import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('financial')
export class Financial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'external_id', nullable: true })
  externalId?: number;

  @ManyToOne(() => User, (user) => user.patients)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'full_name', nullable: true })
  fullName?: string;

  @Column({ name: 'tipoDoMovimento', nullable: true })
  tipoDoMovimento?: string;

  @Column({ name: 'dataDoMovimento', nullable: true })
  dataDoMovimento?: string;

  @Column({ name: 'tipoDeGasto', nullable: true })
  tipoDeGasto?: string;

  @Column({ name: 'subtipoDeMovimento', nullable: true })
  subtipoDeMovimento?: string;

  @Column({ name: 'numeroDaParcela', nullable: true })
  numeroDaParcela?: string;

  @Column({ name: 'valorDaParcela', nullable: true })
  cellphone?: string;

  @Column({ name: 'banco', nullable: true })
  valorDaParcela?: string;

  @Column({ name: 'telephone', nullable: true })
  banco?: string;
}
