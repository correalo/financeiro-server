import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('surgical-team')
export class SurgicalTeam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'external_id', nullable: true })
  externalId?: number;

  @ManyToOne(() => User, (user) => user.patients)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'primeiroAuxilio', nullable: true })
  primeiroAuxilio?: string;

  @Column({ name: 'segundoAuxilio', nullable: true })
  segundoAuxilio?: string;

  @Column({ name: 'instrumentadora', nullable: true })
  instrumentadora?: string;

  @Column({ name: 'anestesista', nullable: true })
  anestesista?: string;

  @Column({ name: 'valorPrimeiroAuxilio', nullable: true })
  valorPrimeiroAuxilio?: string;

  @Column({ name: 'valorSegundoAuxilio', nullable: true })
  valorSegundoAuxilio?: string;

  @Column({ name: 'valorInstrumentadora', nullable: true })
  valorInstrumentadora?: string;

  @Column({ name: 'valorAnestesista', nullable: true })
  valorAnestesista?: string;

  @Column({ name: 'valorJoseLuis', nullable: true })
  valorJoseLuis?: string;

  @Column({ name: 'valorAna', nullable: true })
  valorAna?: string;

  @Column({ name: 'valorEquipe', nullable: true })
  valorEquipe?: string;

  @Column({ name: 'primeiroAuxilioPago', nullable: true })
  primeiroAuxilioPago?: string;

  @Column({ name: 'segundoAuxilioPago', nullable: true })
  segundoAuxilioPago?: string;

  @Column({ name: 'instrumentadoraPago', nullable: true })
  instrumentadoraPago?: string;

  @Column({ name: 'anestesistaPago', nullable: true })
  hospital?: string;

  @Column({ name: 'valorAnaPago', nullable: true })
  valorAnaPago?: string;
}
