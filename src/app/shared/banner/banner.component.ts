import { Component, Input } from '@angular/core';

@Component({
  selector: 'adai-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  public iconClass: string = 'bi bi-info-circle-fill';

  @Input() type: 'success' | 'information' | 'warning' | 'critical' = 'critical';
  @Input() size: 'sm' | 'normal' = 'normal';
  @Input() title: string = 'Information';

  public get classes(): string[] {
    this.iconClass = this.getIconClass(this.type);
    const mode = this.getClass(this.type);

    return ['banner', mode, `banner-${this.size}`];
  }

  public getIconClass(name: string): string {
    const icons: { [key: string]: string } = {
      'information': 'bi bi-info-circle-fill',
      'warning': 'bi bi-exclamation-triangle-fill',
      'success': 'bi bi-check-circle-fill',
      'critical': 'bi bi-x-circle-fill',
    };
    return icons[name] || '';
  }

  public getClass(name: string): string {
    const className: { [key: string]: string } = {
      'information': 'banner-information',
      'warning': 'banner-warning',
      'success': 'banner-success',
      'critical': 'banner-critical',
    };

    return className[name] || '';
  }
}
