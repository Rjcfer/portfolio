import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  titleKey: string;
  descriptionKey: string;
  techs: string[];
  liveUrl?: string;
  codeUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      titleKey: 'projects.edh.title',
      descriptionKey: 'projects.edh.description',
      techs: ['Angular', 'Node.js', 'PostgreSQL', 'Docker', 'Gemini API'],
      codeUrl: 'https://github.com/Rjcfer/edhAnalyser',
    },
    {
      titleKey: 'projects.hiji.title',
      descriptionKey: 'projects.hiji.description',
      techs: ['Angular', 'Java', 'PostgreSQL', 'AWS', 'Docker'],
    },
  ];
}
