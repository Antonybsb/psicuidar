import { Component } from '@angular/core';
import { Collapse, Dropdown, initTWE } from 'tw-elements';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  ngOnInit() {
    initTWE({ Collapse, Dropdown });
  }

  scrollToSection(baseId: string): void {
    const targetId =
      window.innerWidth >= 1024 ? `${baseId}-lg` : `${baseId}-mobile`;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
