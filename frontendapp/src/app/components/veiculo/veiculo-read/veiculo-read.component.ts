import { VeiculoService } from './../veiculo.service';
import { Veiculo } from './../veiculo.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.css']
})
export class VeiculoReadComponent implements OnInit {

  veiculos!: Veiculo[]
  displayedColumns = ['modelo','marca','ano','placa','chassi','renavam','action']

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.veiculoService.read().subscribe(veiculos => {
      this.veiculos = veiculos
      console.log(veiculos)
    })
  }


}
