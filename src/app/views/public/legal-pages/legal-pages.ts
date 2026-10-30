import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-pages',
  standalone: true,
  imports: [],
  templateUrl: './legal-pages.html',
  styleUrl: './legal-pages.css',
})
export class LegalPages {
  activeDoc: 'terms' | 'privacy' | 'refund' = 'terms';
}
