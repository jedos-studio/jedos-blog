import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-jedos-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      jedos-blog works!
    </p>
    <lib-another></lib-another>
  `,
  styles: ``
})
export class JedosBlogComponent {}
