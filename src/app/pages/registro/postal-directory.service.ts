import { Injectable } from '@angular/core';
import { States } from '@interfaces/address.interface';

@Injectable({
  providedIn: 'root',
})
export class PostalDirectoryService {

  stateofCountry: States[] = [
    {
      id: 1,
      state: 'Aguascalientes',
    },
    {
      id: 2,
      state: 'Baja California',
    },
    {
      id: 3,
      state: 'Baja California Sur',
    },
    {
      id: 4,
      state: 'Campeche',
    },
    {
      id: 5,
      state: 'Chiapas',
    },
    {
      id: 6,
      state: 'Chihuahua',
    },
    {
      id: 7,
      state: 'Coahuila de Zaragoza',
    },
    {
      id: 8,
      state: 'Colima',
    },
    {
      id: 9,
      state: 'Ciudad de México',
    },
    {
      id: 10,
      state: 'Durango',
    },
    {
      id: 11,
      state: 'Guanajuato',
    },
    {
      id: 12,
      state: 'Guerrero',
    },
    {
      id: 13,
      state: 'Hidalgo',
    },
    {
      id: 14,
      state: 'Jalisco',
    },
    {
      id: 15,
      state: 'Mexico',
    },
    {
      id: 16,
      state: 'Michoacan de Ocampo',
    },
    {
      id: 17,
      state: 'Morelos',
    },
    {
      id: 18,
      state: 'Nayarit',
    },
    {
      id: 19,
      state: 'Nuevo Leon',
    },
    {
      id: 20,
      state: 'Oaxaca',
    },
    {
      id: 21,
      state: 'Puebla',
    },
    {
      id: 22,
      state: 'Queretaro de Arteaga',
    },
    {
      id: 23,
      state: 'Quintana Roo',
    },
    {
      id: 24,
      state: 'San Luis Potosi',
    },
    {
      id: 25,
      state: 'Sinaloa',
    },
    {
      id: 26,
      state: 'Sonora',
    },
    {
      id: 27,
      state: 'Tabasco',
    },
    {
      id: 28,
      state: 'Tamaulipas',
    },
    {
      id: 29,
      state: 'Tlaxcala',
    },
    {
      id: 30,
      state: 'Veracruz-Llave',
    },
    {
      id: 31,
      state: 'Yucatan',
    },

    {
      id: 32,
      state: 'Zacatecas',
    },
  ];

  getStates(): States[] {
    return this.stateofCountry;
  }


}

