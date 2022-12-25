import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('surgeries')
export class Surgery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'external_id', nullable: true })
  externalId?: number;

  @ManyToOne(() => User, (user) => user.patients)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'tipoDeCirurgia', nullable: true })
  tipoDeCirurgia?: string;

  @Column({ name: 'surgeryDate', nullable: true })
  surgeryDate?: string;

  @Column({ name: 'hospital', nullable: true })
  hospital?: string;

  @Column({ name: 'observation', nullable: true })
  observation?: string;
}
