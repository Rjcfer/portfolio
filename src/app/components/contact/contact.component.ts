import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contacts = [
    { label: 'Email', value: 'correia.ferreira.ricardo@gmail.com', url: 'mailto:correia.ferreira.ricardo@gmail.com' },
    { label: 'GitHub', value: 'Rjcfer', url: 'https://github.com/Rjcfer' },
    { label: 'LinkedIn', value: 'Ricardo Ferreira', url: 'https://linkedin.com/in/ricardo-ferreira' },
  ];
}
