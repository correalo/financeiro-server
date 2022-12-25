import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { PaymentsModule } from './payments/payments.module';
import { SurgeriesModule } from './surgeries/surgeries.module';
import { SurgicalTeamsModule } from './surgical-teams/surgical-teams.module';
import { InstallmentsModule } from './installments/installments.module';
import { UsersModule } from './users/users.module';
import { FinancialModule } from './financial/financial.module';

@Module({
  imports: [
    PatientsModule,
    PaymentsModule,
    SurgeriesModule,
    SurgicalTeamsModule,
    InstallmentsModule,
    UsersModule,
    FinancialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
