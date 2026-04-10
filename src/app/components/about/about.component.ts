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
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/ricardo-ferreira-045499220/', label: 'LinkedIn' },
    { icon: 'email', url: 'mailto:correia.ferreira.ricardo@gmail.com', label: 'Email' },
  ];
}
