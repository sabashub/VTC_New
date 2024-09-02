import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionModule, ButtonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  activeIndex: number | undefined = 0;

  activeIndexChange(index: number | number[]): void {
    if (Array.isArray(index)) {
      // Handle the case where `index` is an array
      this.activeIndex = index.length ? index[0] : 0; // or any default behavior
    } else {
      this.activeIndex = index;
    }
  }

}
