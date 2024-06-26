import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OceanService } from '../app/service/ocean.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { Ocean } from './interface/Ocean';
import { OceanRequisicao } from './interface/OceanRequisicao';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'global';
  pag = 1;
  oceanForm: FormGroup = new FormGroup({});
  oceans: Ocean[] = [];
  currentOcean: Ocean = {} as Ocean;

  constructor(
    private oceanService: OceanService,
    private formBuilder: FormBuilder
  ) {
    this.oceanForm = this.formBuilder.group({
      regiao: [''],
      statusConservacao: [''],
      especie: [''],
      temperaturaMin: [''],
      temperaturaMax: [''],
      phMin: [''],
      phMax: [''],
      nivelPoluicao: ['']
    });
  }

  pesquisar(): void {
    const req = {
      regiao: this.oceanForm.get('regiao')?.value ?? '',
      statusConservacao: (this.oceanForm.get('statusConservacao')?.value) ?? '',
      especie: this.oceanForm.get('especie')?.value ?? '',
      temperaturaMin: this.oceanForm.get('temperaturaMin')?.value ?? undefined,
      temperaturaMax: this.oceanForm.get('temperaturaMin')?.value ?? undefined,
      phMin: this.oceanForm.get('phMin')?.value ?? undefined,
      phMax: this.oceanForm.get('phMin')?.value ?? undefined,
      nivelPoluicao: this.oceanForm.get('nivelPoluicao')?.value ?? '',
      pagina: this.pag,
    } as OceanRequisicao;
    this.oceanService.getTable(req).subscribe((oceans) => (this.oceans = oceans));
  }

  mudarPagina(pagInput: number): void {
    this.pag = pagInput;
    this.pesquisar();
  }

  verDetalhes(ocean: Ocean) {
    // abrir modal
    // passar os dados do ocean selecionado
    // exibir os dados
    // botão de fechar
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    this.currentOcean = ocean;
    myModal.show();
  }

  ngOnInit(): void {
    const req = {
      regiao: '',
      statusConservacao: '',
      especie: '',
      temperaturaMin: undefined,
      temperaturaMax: undefined,
      phMin: undefined,
      phMax: undefined,
      nivelPoluicao: '',
      pagina: 1 ?? '',
    } as OceanRequisicao;

    this.oceanService.getTable(req).subscribe((oceans) => (this.oceans = oceans));
  }
}
