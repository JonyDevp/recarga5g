import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-novedades',
  imports: [RouterLink],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NovedadesComponent {


 }
