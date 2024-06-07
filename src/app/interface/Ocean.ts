import { Especie } from './Especies';
import { ProjetoConvervacao } from './ProjetoConservacao';

export interface Ocean {
  regiao?: string;
  temperaturaAgua?: Number;
  pH?: Number;
  nivelPoluicao?: string;
  especie?: Especie[];
  projetosConservacao: ProjetoConvervacao[];
}
