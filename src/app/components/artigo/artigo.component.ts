import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ArtigoServicosService,
  ArtigosUnitarios,
} from '../../servicos/artigo-servicos.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-artigo',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './artigo.component.html',
  styleUrl: './artigo.component.css',
})
export class ArtigoComponent implements OnInit {
  artigo: ArtigosUnitarios | undefined;

  constructor(
    private route: ActivatedRoute,
    private artigosService: ArtigoServicosService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.artigosService
      .getArtigoById(id)
      .subscribe((data: ArtigosUnitarios) => {
        this.artigo = data;
      });
  }
}
