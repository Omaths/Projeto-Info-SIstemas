import { VeiculoCreateComponent } from './components/veiculo/veiculo-create/veiculo-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VeiculoCrudComponent } from './views/veiculo-crud/veiculo-crud.component';
import { VeiculoUpdateComponent } from './components/veiculo/veiculo-update/veiculo-update.component';
import { VeiculoDeleteComponent } from './components/veiculo/veiculo-delete/veiculo-delete.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "veiculo",
  component: VeiculoCrudComponent
}, {
  path: "veiculo/create",
  component: VeiculoCreateComponent
}, {
  path: "veiculo/update/:id",
  component: VeiculoUpdateComponent
}
, {
  path: "veiculo/delete/:id",
  component: VeiculoDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
