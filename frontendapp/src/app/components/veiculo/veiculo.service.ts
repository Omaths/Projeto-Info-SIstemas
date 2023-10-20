import { Veiculo } from './veiculo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  baseURL = "http://localhost:3001/veiculos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ''
    })
  }

  create(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.baseURL, veiculo).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      )   
  }

  read(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.baseURL).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      )
  }

  readById(id: any): Observable<Veiculo> {
    const url = `${this.baseURL}/${id}`
    return this.http.get<Veiculo>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      )
  }

  update(veiculo: Veiculo): Observable<Veiculo> {
    const url = `${this.baseURL}/${veiculo.id}`
    return this.http.put<Veiculo>(url,veiculo).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      )
  }

  delete(id: any): Observable<Veiculo> {
    const url = `${this.baseURL}/${id}`
    return this.http.delete<Veiculo>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      )
  }

  errorHandler (e : any): Observable<any> {
    this.showMessage("Ocorreu um erro!",true)
    return EMPTY
  }
}
