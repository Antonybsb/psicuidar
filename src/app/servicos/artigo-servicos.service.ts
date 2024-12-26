import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ArtigosUnitarios {
  id: number; img: string; title: string; content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtigoServicosService {

  private jsonPath = 'assets/artigos-unitarios/art-de-dialogar.json'

  constructor(private http: HttpClient) { }

  getArtigos(): Observable<ArtigosUnitarios> {
    return this.http.get<ArtigosUnitarios>(this.jsonPath)
  }
}
