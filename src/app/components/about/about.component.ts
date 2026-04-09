import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  links = [
    { icon: 'github', url: 'https://github.com/Rjcfer', label: 'GitHub' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/ricardo-ferreira', label: 'LinkedIn' },
    { icon: 'email', url: 'mailto:correia.ferreira.ricardo@gmail.com', label: 'Email' },
  ];
}
