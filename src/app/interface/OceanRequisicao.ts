export interface OceanRequisicao {
  regiao?: string;
  statusConservacao?: string;
  especie?: string;
  temperaturaMin?: Number;
  temperaturaMax?: Number;
  phMin?: Number;
  phMax?: Number;
  nivelPoluicao?: string;
  pagina: Number;
  qtde: Number;
}
