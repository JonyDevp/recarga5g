// flowbite-datepicker.interface.ts
import { DatepickerInterface as FlowbiteDatepickerInterface } from 'flowbite';

export interface ExtendedDatepickerInterface extends FlowbiteDatepickerInterface {
  getDate(): string | string[];
  setDate(date: string | Date | string[]): void;
  show(): void;
  hide(): void;
  _datepickerInstance: {
    getDate(): string | string[];
    setDate(date: string | Date | string[]): void;
    // Otros métodos que necesites
  };
}