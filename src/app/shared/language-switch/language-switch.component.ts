import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [NgClass, UpperCasePipe],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss',
})
export class LanguageSwitchComponent {
  languages = ['fr', 'en', 'pt'];

  constructor(private translate: TranslateService) {}

  get currentLang(): string {
    return this.translate.currentLang || 'fr';
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
