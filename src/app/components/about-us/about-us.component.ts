import { AfterViewInit, Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AnimateOnScrollModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements AfterViewInit {
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    const targets = document.querySelectorAll('.container, .image, .content');
    targets.forEach(target => observer.observe(target));
  }
}
