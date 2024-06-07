import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OceanService } from '../app/service/ocean.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Ocean } from './interface/Ocean';
import { OceanRequisicao } from './interface/OceanRequisicao';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'global';
  oceanForm: FormGroup = new FormGroup({});
  oceans: Ocean[] = [];

  constructor(
    private oceanService: OceanService,
    private formBuilder: FormBuilder
  ) {
  }

  pesquisar(): void {
    console.log('testeeeeeeee');

    const req = {
      regiao: this.oceanForm.get('regiao')?.value ?? '',
      statusConservacao: this.oceanForm.get('statusConservacao')?.value ?? '',
      especie: this.oceanForm.get('especie')?.value ?? '',
      temperaturaMin: this.oceanForm.get('temperaturaMin')?.value ?? undefined,
      temperaturaMax: this.oceanForm.get('temperaturaMin')?.value ?? undefined,
      phMin: this.oceanForm.get('phMin')?.value ?? undefined,
      phMax: this.oceanForm.get('phMin')?.value ?? undefined,
      nivelPoluicao: this.oceanForm.get('nivelPoluicao')?.value ?? '',
      pagina: 1 ?? '',
    } as OceanRequisicao;

    this.oceanService.getTable(req).subscribe((oceans) => (this.oceans = oceans));
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
    // setTimeout(() => {
    //   console.log('oceans', this.oceans);
    // }, 1000);
  }
}
