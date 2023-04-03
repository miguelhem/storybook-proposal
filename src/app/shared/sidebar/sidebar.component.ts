import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'adai-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('sidebarAnimation', [
      state('open', style({ width: '240px' })),
      state('closed', style({ width: '72px' })),
      transition('open <=> closed', animate('200ms ease-in-out')),
    ]),
  ],
})
export class SidebarComponent {

@Input() avatarUrl: string = '';

public sidebarOpen: boolean = true;
public selectedItem: number | null = null;
public menuItems = [
  { name: 'Dashboard', icon: 'bi-house' },
  { name: 'Folders', icon: 'bi-folder' },
  { name: 'Projects', icon: 'bi-briefcase' },
  { name: 'Modules', icon: 'bi-collection' },
  { name: 'Performance', icon: 'bi-graph-up' },
  { name: 'Payment', icon: 'bi-credit-card' },
  { name: 'Help', icon: 'bi-question-circle' },
  { name: 'Search', icon: 'bi-search' },
  { name: 'Archive', icon: 'bi-archive' },
];

  get sidebarState() {
    return this.sidebarOpen ? 'open' : 'closed';
  }

public onSidebarOpen() {
    this.sidebarOpen = !this.sidebarOpen;
  }

public listClick(event: MouseEvent, newValue: number) {
    console.log(newValue);
    this.selectedItem = newValue;
}

}
