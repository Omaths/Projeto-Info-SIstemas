import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import{FormsModule} from '@angular/forms';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';

import{MatTableModule} from '@angular/material/table';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule}from '@angular/material/sidenav';
import {MatListModule}   from '@angular/material/list';
import {MatCardModule}   from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule}    from '@angular/material/snack-bar';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { VeiculoCrudComponent } from './views/veiculo-crud/veiculo-crud.component';
import { VeiculoCreateComponent } from './components/veiculo/veiculo-create/veiculo-create.component';
import {HttpClientModule } from '@angular/common/http';
import { VeiculoReadComponent } from './components/veiculo/veiculo-read/veiculo-read.component';
import { VeiculoUpdateComponent } from './components/veiculo/veiculo-update/veiculo-update.component';
import { VeiculoDeleteComponent } from './components/veiculo/veiculo-delete/veiculo-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    VeiculoCrudComponent,
    VeiculoCreateComponent,
    VeiculoReadComponent,
    VeiculoUpdateComponent,
    VeiculoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
