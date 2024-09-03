import { Component, OnInit } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { VideoComponent } from './components/video/video.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CarsComponent } from './components/cars/cars.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoComponent, AboutUsComponent, CarsComponent, WhyUsComponent, WhyUsComponent, FaqComponent, FooterComponent, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]

})
export class AppComponent {
 title = 'Vans Transport Company'
}
