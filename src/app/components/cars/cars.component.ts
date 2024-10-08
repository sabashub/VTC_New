import { AfterViewInit, Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [GalleriaModule, AnimateOnScrollModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements AfterViewInit {
  displayCustom: boolean = false;
  activeIndex: number = 0;
  images: any[] = [];

  responsiveOptions: any[] = [
    { breakpoint: '1500px', numVisible: 5 },
    { breakpoint: '1024px', numVisible: 3 },
    { breakpoint: '768px', numVisible: 2 },
    { breakpoint: '560px', numVisible: 1 }
  ];

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.images = [
      
      { itemImageSrc: 'assets/cars_image/20231223_205136.jpg', thumbnailImageSrc: 'assets/cars_image/20231223_205136.jpg', alt: 'Car Image 2' },
      { itemImageSrc: 'assets/cars_image/image0.jpeg', thumbnailImageSrc: 'assets/cars_image/image0.jpeg', alt: 'Car Image 1' },
      { itemImageSrc: 'assets/cars_image/20231223_205151.jpg', thumbnailImageSrc: 'assets/cars_image/20231223_205151.jpg', alt: 'Car Image 3' },
      { itemImageSrc: 'assets/cars_image/20231223_205536.jpg', thumbnailImageSrc: 'assets/cars_image/20231223_205536.jpg', alt: 'Car Image 3' },
      { itemImageSrc: 'assets/cars_image/20231223_205546.jpg', thumbnailImageSrc: 'assets/cars_image/20231223_205546.jpg', alt: 'Car Image 3' },
      { itemImageSrc: 'assets/cars_image/20231223_205613.jpg', thumbnailImageSrc: 'assets/cars_image/20231223_205613.jpg', alt: 'Car Image 3' },
      { itemImageSrc: 'assets/cars_image/20231223_205626.jpg', thumbnailImageSrc: 'assets/cars_image/20231223_205626.jpg', alt: 'Car Image 3' },
      { itemImageSrc: 'assets/cars_image/20231223_205739.jpg', thumbnailImageSrc: 'assets/cars_image/20231223_205739.jpg', alt: 'Car Image 3' },
      { itemImageSrc: 'assets/cars_image/20231224_041945.jpg', thumbnailImageSrc: 'assets/cars_image/20231224_041945.jpg', alt: 'Car Image 3' }
    ];
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;

    // Debugging: log the selected image source
    console.log('Selected image source:', this.images[index].itemImageSrc);
  }
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log('Intersecting:', entry.isIntersecting, entry.target); // Add this line
        if (entry.isIntersecting) {
          entry.target.classList.add('fadein');
        } else {
          entry.target.classList.remove('fadein');
        }
      });
    });
  
    const targets = document.querySelectorAll('.card, .thumbnail-item, .title');
    targets.forEach(target => observer.observe(target));
  }
}
