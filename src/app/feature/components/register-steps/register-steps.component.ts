import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-register-steps',
    imports: [NgClass],
    templateUrl: './register-steps.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterStepsComponent { 
    customClass = input<string>();
}


