import { Component, computed, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-ratings',
  imports: [FontAwesomeModule],
  templateUrl: './ratings.html',
  styleUrl: './ratings.css'
})
export class Ratings {
  score = input<number>(0);
  // Define the icons to be used in the template
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faStarEmpty = faStarEmpty;

  // computed signal for stars
  stars = computed(() => {
    const value = Math.min(this.score(), 5);
    const icons: IconDefinition[] = [];

    const solid = Math.floor(value);
    const half = value - solid >= 0.5;
    for (let i = 0; i < solid; i++) {
      icons.push(faStar);
    }
    if (half) {
      icons.push(faStarHalfStroke);
    }
    while (icons.length < 5) {
      icons.push(faStarEmpty);
    }
    return [...icons];
  });
}
