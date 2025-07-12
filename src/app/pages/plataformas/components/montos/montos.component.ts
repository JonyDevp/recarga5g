import { Component, Input } from '@angular/core';

@Component({
    selector: "app-montos",
    standalone: true,
    templateUrl: 'montos.component.html',
    styleUrls: ['montos.component.scss']
})
export class MontosComponent {
    
    @Input() monto: any = {};
}