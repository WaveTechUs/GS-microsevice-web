import { Injectable } from '@angular/core';
import { OceanRequisicao } from '../interface/OceanRequisicao';
import { Ocean } from '../interface/Ocean';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OceanService {
  private oceanUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?';
  constructor(private http: HttpClient) {}
  oceans: OceanRequisicao[] = [];

  getTable(ocean: OceanRequisicao): Observable<Ocean[]> {
    var url = this.oceanUrl;
    if (ocean.regiao != '') {
      url = url + 'regiao=' + ocean.regiao + '&';
    }
    if (ocean.especie != '') {
      url = url + 'especie=' + ocean.especie + '&';
    }
    if (ocean.statusConservacao != '') {
      url = url + 'statusConservacao=' + ocean.statusConservacao + '&';
    }
    if (ocean.temperaturaMin != undefined && ocean.temperaturaMin <= 0) {
      url = url + 'temperaturaMin=' + ocean.temperaturaMin + '&';
    }
    if (ocean.temperaturaMax != undefined && ocean.temperaturaMax <= 0) {
      url = url + 'temperaturaMax=' + ocean.temperaturaMax + '&';
    }
    if (ocean.phMin != undefined && ocean.phMin <= 0) {
      url = url + 'phMin=' + ocean.phMin + '&';
    }
    if (ocean.phMax != undefined && ocean.phMax <= 0) {
      url = url + 'phMax=' + ocean.phMax + '&';
    }
    if (ocean.nivelPoluicao != '') {
      url = url + 'nivelPoluicao=' + ocean.nivelPoluicao + '&';
    }
    url = url + 'pagina=' + ocean.pagina + '&';
    url = url + 'qtde=10';

    console.log('url ------->', url);
    return this.http.get(url) as Observable<Ocean[]>;
  }
}
