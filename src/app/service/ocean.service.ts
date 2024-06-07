import { Injectable } from '@angular/core';
import { Ocean } from '../interface/Ocean';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class OceanService {
  private oceanUrl ="https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?";
  constructor(private http: HttpClient) {}
  oceans: Ocean[] = [

  ];

  getTable(ocean:Ocean) : Observable<Ocean>{
    var url = this.oceanUrl
    var quantidadeParametros =0
    if (ocean.regiao!=""){
      url = url+"regiao="+ocean.regiao+"&"
    }
    if (ocean.especie!=""){
      url = url+"especie="+ocean.especie+"&"
    }
    if (ocean.statusConservacao!=""){
      url = url+"statusConservacao="+ocean.statusConservacao+"&"
    }
    if (ocean.temperaturaMin!=null){
      url = url+"temperaturaMin="+ocean.temperaturaMin+"&"
    }
    if (ocean.temperaturaMax!=null){
      url = url+"temperaturaMax="+ocean.temperaturaMax+"&"
    }
    if (ocean.phMin!=null){
      url = url+"phMin="+ocean.phMin+"&"
    }
    if (ocean.phMax!=null){
      url = url+"phMax="+ocean.phMax+"&"
    }
    if (ocean.nivelPoluicao!=""){
      url = url+"nivelPoluicao="+ocean.nivelPoluicao+"&"
    }
    url = url+"pagina="+ocean.pagina+"&"
    url = url+"qtde="+ocean.qtde






    return this.http.get(url) as Observable<Ocean>
  }


}
