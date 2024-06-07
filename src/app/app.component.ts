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
  oceans: OceanRequisicao[] = [];

  constructor(
    private oceanService: OceanService,
    private formBuilder: FormBuilder
  ) {
    this.oceanForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }
  //pesquisar(): void {
  //  this.oceanService.getTable().subscribe((clientes) => (this.clientes = clientes));
  //}
}
