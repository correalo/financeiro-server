export class CreateFinancialDto {
  // nome é o mesmo nome do patiente
  fullName: string;
  tipoDoMovimento: string;
  dataDoMovimento: string;
  tipoDeGasto: string;
  subtipoDeMovimento: string;
  numeroDaParcela: string;
  valorDaParcela: string;
  banco: string;
}
