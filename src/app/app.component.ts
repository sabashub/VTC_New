import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoComponent } from './components/video/video.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CarsComponent } from './components/cars/cars.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoComponent, AboutUsComponent, CarsComponent, WhyUsComponent, WhyUsComponent, FaqComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vtc';
}
