import { Component } from '@angular/core';
import { Collapse, Ripple, initTWE, Button } from 'tw-elements';

@Component({
  selector: 'app-sessao-principal',
  standalone: true,
  imports: [],
  templateUrl: './sessao-principal.component.html',
  styleUrl: './sessao-principal.component.css',
})
export class SessaoPrincipalComponent {
  ngOnInit() {
    initTWE({ Collapse, Ripple, Button });
  }
}
