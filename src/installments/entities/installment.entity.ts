import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('installments')
export class Installment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'external_id', nullable: true })
  externalId?: number;

  @ManyToOne(() => User, (user) => user.patients)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'valorDaParcela', nullable: true })
  valorDaParcela?: string;

  @Column({ name: 'dataDaParcela', nullable: true })
  dataDaParcela?: string;

  @Column({ name: 'tipoDaParcela', nullable: true })
  tipoDaParcela?: string;

  @Column({ name: 'banco', nullable: true })
  banco?: string;

  @Column({ name: 'statusDePagamento', nullable: true })
  statusDePagamento?: string;
}
