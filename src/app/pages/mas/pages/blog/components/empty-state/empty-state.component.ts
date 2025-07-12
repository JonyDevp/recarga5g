import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-empty-state',
  imports: [],
  template: `
    <div class="container mx-auto bg-white dark:bg-slate-700 rounded-2xl shadow-md p-4 animate-slide-in-bottom">
        <img src="assets/img/svg/no_message.svg" class="max-w-3xs mx-auto mb-4" alt="sin articulos">
          <h3 class="text-2xl font-semibold text-center">¡Estas al día!</h3>
          <P class="text-center">No hay post nuevos, consulta mas tarde</P>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent { }
