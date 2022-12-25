export class CreateInstallmentDto {
  valorDaParcela: string;
  dataDaParcela: string;
  // tipo da parcela pode ser de  pacote de consulta ou parcelas de cirurgia
  tipoDaParcela: string;
  banco: string;
  statusDePagamento: string;
}
