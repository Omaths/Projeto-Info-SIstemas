import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-veiculo-crud',
  templateUrl: './veiculo-crud.component.html',
  styleUrls: ['./veiculo-crud.component.css']
})
export class VeiculoCrudComponent {
  constructor(private router: Router) { }
  navigateToVeiculoCreate(): void {
    this.router.navigate(['/veiculo/create'])
  }

}
