import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manuales',
  standalone: true,
  templateUrl: './manuales.component.html',
  styleUrls: ['./manuales.component.scss'],
  imports: [
    
    
  ]
})
export class ManualesComponent {

  @Input() manuales: any = {};
}
