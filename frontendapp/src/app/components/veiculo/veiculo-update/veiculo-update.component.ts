import { VeiculoService } from './../veiculo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Veiculo } from '../veiculo.model';



@Component({
  selector: 'app-veiculo-update',
  templateUrl: './veiculo-update.component.html',
  styleUrls: ['./veiculo-update.component.css']
})
export class VeiculoUpdateComponent implements OnInit {

  veiculo!:  Veiculo
  
  constructor(
    private veiculoService: VeiculoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.veiculoService.readById(id).subscribe(veiculo => {
      this.veiculo = veiculo
    })
  }

  updateVeiculo(): void {
    this.veiculoService.update(this.veiculo).subscribe(() => {
      this.veiculoService.showMessage('Veículo atualizado com sucesso!')
      this.router.navigate(['/veiculo'])
    })
  }

  cancel(): void {
    this.router.navigate(['/veiculo'])
  }

}
