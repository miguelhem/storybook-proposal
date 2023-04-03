import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'adai-card',
  templateUrl: './card.component.html',
  styleUrls: [],
    animations: [
    trigger('clickAnimation', [
      state('active', style({ transform: 'scale(1.3)' })),
      transition('inactive => active', animate('250ms ease-in')),
      transition('active => inactive', animate('250ms ease-out'))
    ])
  ]
})
export class CardComponent {

  @Input() type: 'project' | 'default' | 'module' = 'default';
  @Input() source: string = '';
  @Input() projectsCount: number = 0;
  @Input() modulesCount: number = 0;
  @Input() projectInformation: ProjectInfo = {} as ProjectInfo;
  @Input() moduleInformation: ModuleInfo = {} as ModuleInfo;
  @Input() progress: number = 0;


  public isFavorite = false;
  public animationState = 'inactive';

  public onFavorite(): void {
    this.isFavorite = !this.isFavorite
    this.animationState = 'active';
    setTimeout(() => {
      this.animationState = 'inactive';
    }, 500);
  }

public isStarFilled(index: number): boolean {
    return index < Number(this.projectInformation.rating);
  }
}

interface ProjectInfo {
  projectName: string;
  projectCity: string;
  projectStatus: string;
  paymentStatus: string;
  rating: string;
}

interface ModuleInfo {
  moduleName: string;
  viralResponse: string;
  moduleStatus: string;
  paymentStatus: string;
  rating: string;
}

