import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly translate = inject(TranslateService);

  constructor() {
    const savedLang = localStorage.getItem('lang');
    const browserLang = this.translate.getBrowserLang();
    const supportedLangs = ['fr', 'en', 'pt'];

    let lang = 'fr';
    if (savedLang && supportedLangs.includes(savedLang)) {
      lang = savedLang;
    } else if (browserLang && supportedLangs.includes(browserLang)) {
      lang = browserLang;
    }

    this.translate.use(lang);
  }
}
