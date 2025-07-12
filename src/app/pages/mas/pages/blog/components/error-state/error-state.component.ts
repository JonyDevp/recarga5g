import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-error-state',
  imports: [],
  template: `
  <div class="container mx-auto bg-white dark:bg-slate-700 rounded-2xl shadow-md p-4 animate-slide-in-bottom">
        <img src="assets/img/svg/server-error.svg" class="max-w-40 mx-auto mb-4" alt="Error">
          <h3 class="text-lg font-semibold text-center">¡UPS! Se ha presentado un error :(</h3>
          <P class="text-center text-sm">Se presentando un error en nuestro servicio, vuelve a intentarlo mas tarde</P>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorStateComponent { }
