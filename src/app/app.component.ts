import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang');
    const browserLang = translate.getBrowserLang();
    const defaultLang = savedLang || (['fr', 'en', 'pt'].includes(browserLang!) ? browserLang! : 'fr');
    translate.use(defaultLang);
  }
}
