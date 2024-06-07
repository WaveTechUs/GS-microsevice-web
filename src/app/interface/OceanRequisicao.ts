export interface OceanRequisicao {
  regiao?: string;
  statusConservacao?: string;
  especie?: string;
  temperaturaMin?: number;
  temperaturaMax?: number;
  phMin?: number;
  phMax?: number;
  nivelPoluicao?: string;
  pagina: number;
}
