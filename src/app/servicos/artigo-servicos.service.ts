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

  getArtigos(): Observable<ArtigosUnitarios[]> {
    return this.http.get<ArtigosUnitarios[]>(
      `${this.apiUrl}artigosUnitarios.json`
    );
  }

  getArtigoById(id: number): Observable<ArtigosUnitarios> {
    const fileName = `artigo-${id}.json`;
    return this.http.get<ArtigosUnitarios>(`${this.apiUrl}${fileName}`);
  }
}
