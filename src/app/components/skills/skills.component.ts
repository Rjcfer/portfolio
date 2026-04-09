import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface SkillCategory {
  titleKey: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    { titleKey: 'skills.frontend', skills: ['Angular', 'TypeScript', 'CSS/SCSS', 'Bootstrap', 'React'] },
    { titleKey: 'skills.backend', skills: ['Java', 'Node.js', 'PostgreSQL', 'MySQL', 'REST API'] },
    { titleKey: 'skills.devops', skills: ['Docker', 'AWS', 'CI/CD', 'Nginx', 'Git', 'GitHub Actions'] },
    { titleKey: 'skills.other', skills: ['Python', 'C/C++', 'API OpenAI', 'Android', 'Unity'] },
  ];
}
