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
    this.oceanForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }
}
