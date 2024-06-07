import { Especies } from './Especie';
import { ProjetoConvervacao } from './ProjetoConservacao';

export interface Ocean {
  regiao?: string;
  temperaturaAgua?: Number;
  pH?: Number;
  nivelPoluicao?: string;
  especies?: Especies[];
  projetosConservacao: ProjetoConvervacao[];
}
