import { VeiculoService } from './../veiculo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from '../veiculo.model';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent implements OnInit {

  veiculo: Veiculo = {
    placa: '',
    chassi: null,
    renavam: '',
    modelo: '',
    marca: '',
    ano: null
  }

  constructor(private veiculoService: VeiculoService,
    private router: Router) { }

  ngOnInit(): void {

  }
  createVeiculo(): void {
    this.veiculoService.create(this.veiculo).subscribe(() => {
      this.veiculoService.showMessage('Veículo Adicionado')
      this.router.navigate(['/veiculo'])
    })    
  }
  
  cancel(): void {
    this.router.navigate(['/veiculo'])
  }

}
