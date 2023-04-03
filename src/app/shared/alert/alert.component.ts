import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'adai-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() title = '';
  @Input() icon = '';

getIconClass(name: string): string {
  const icons: { [key: string]: string } = {
    'information': 'bi bi-info-circle-fill',
    'warning': 'bi bi-exclamation-triangle-fill',
    'success': 'bi bi-check-circle-fill',
    'critical': 'bi bi-x-circle-fill',
  };

  return icons[name] || '';
}

}
