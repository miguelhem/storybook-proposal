import { Component } from '@angular/core';

@Component({
  selector: 'adai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-portal';
  source = '';
  projectInfo = {
  projectName: 'Adai Test Account',
  projectCity: 'Los Angeles, CA',
  projectStatus: 'In progress',
  paymentStatus: '',
  rating: '',
  }
  projectInfo2 = {
  projectName: 'Adai Test Account',
  projectCity: 'Los Angeles, CA',
  projectStatus: 'In progress',
  paymentStatus: 'Pending payment',
  rating: '',
  }

  projectInfo3 = {
  projectName: 'Adai Test Account',
  projectCity: 'Los Angeles, CA',
  projectStatus: 'In progress',
  paymentStatus: '',
  rating: '2',
  }

  moduleInfo = {
  moduleName: 'Adai Test Account',
  viralResponse: 'Viral Response',
  moduleStatus: 'In progress',
  paymentStatus: '',
  rating: '3',
  }

}
