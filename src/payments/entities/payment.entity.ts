import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'external_id', nullable: true })
  externalId?: number;

  @ManyToOne(() => User, (user) => user.patients)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'previaPdf', nullable: true })
  previaPdf?: string;

  @Column({ name: 'valorTotalPago', nullable: true })
  valorTotalPago?: string;

  @Column({ name: 'valorDiferenca', nullable: true })
  valorDiferenca?: string;

  @Column({ name: 'valorDiferencaPago', nullable: true })
  valorDiferencaPago?: string;

  @Column({ name: 'formaDePagamento', nullable: true })
  formaDePagamento?: string;

  @Column({ name: 'recibo', nullable: true })
  recibo?: string;

  @Column({ name: 'pacoteDeConsultas', nullable: true })
  pacoteDeConsultas?: string;

  @Column({ name: 'numeroDeParcelas', nullable: true })
  numeroDeParcelas?: string;

  @Column({ name: 'statusDePagamento', nullable: true })
  statusDePagamento?: string;
}
