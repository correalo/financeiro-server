import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'external_id', nullable: true })
  externalId?: number;

  @ManyToOne(() => User, (user) => user.patients)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'full_name', nullable: true })
  fullName?: string;

  @Column({ name: 'cpf', nullable: true })
  cpf?: string;

  @Column({ name: 'rg', nullable: true })
  rg?: string;

  @Column({ name: 'birthDate', nullable: true })
  birthDate?: string;

  @Column({ name: 'age', nullable: true })
  age?: number;

  @Column({ name: 'genre', nullable: true })
  genre?: string;

  @Column({ name: 'cellphone', nullable: true })
  cellphone?: string;

  @Column({ name: 'cellphone2', nullable: true })
  cellphone2?: string;

  @Column({ name: 'telephone', nullable: true })
  telephone?: string;

  @Column({ name: 'telephone2', nullable: true })
  telephone2?: string;

  @Column({ name: 'ddd', nullable: true })
  ddd?: string;

  @Column({ name: 'address', nullable: true })
  address?: string;

  @Column({ name: 'cep', nullable: true })
  cep?: string;

  @Column({ name: 'indication', nullable: true })
  indication?: string;

  @Column({ name: 'profession', nullable: true })
  profession?: string;

  @Column({ name: 'health_insurance', nullable: true })
  healthInsurance?: string;

  @Column({ name: 'health_insurance_subtype', nullable: true })
  healthInsuranceSubtype?: string;

  @Column({ name: 'carterinhaPdf', nullable: true })
  carterinhaPdf?: string;
}
