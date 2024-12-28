import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ArtigosUnitarios {
  id: number;
  img: string;
  title: string;
  subTitle: string;
  autor: string;
  dataCriacao: string;
  dataAtualizacao: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArtigoServicosService {
  private apiUrl = 'assets/artigos-unitarios/';

  constructor(private http: HttpClient) { }

  // Mapeamento de IDs para arquivos JSON
  // private getFileNameById(id: number): string {
  //   const fileNames: { [key: number]: string } = {
  //     1: 'art-de-dialogar.json',
  //     2: 'conflitos-familiares.json',
  //   };
  //   return fileNames[id];
  // }

  getArtigos(): Observable<ArtigosUnitarios[]> {
    return this.http.get<ArtigosUnitarios[]>(
      `${this.apiUrl}artigosUnitarios.json`
    );
  }

  getArtigoById(id: number): Observable<ArtigosUnitarios> {
    const fileName = `artigo-${id}.json`;
    return this.http.get<ArtigosUnitarios>(`${this.apiUrl}${fileName}`);
  }


  // getArtigoById(id: number): Observable<ArtigosUnitarios> {
  //   const fileName = this.getFileNameById(id);
  //   return this.http.get<ArtigosUnitarios>(`${this.apiUrl}${fileName}`);
  // }
}
