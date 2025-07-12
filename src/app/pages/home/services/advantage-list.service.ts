import { Injectable } from '@angular/core';
import { AdvantageList } from '@interfaces/advantage-list.interface';

@Injectable({
  providedIn: 'root'
})
export class AdvantageListService {

  listInversion: AdvantageList[] = [
    {
      id: 1,
      label: '✔ Sin pagos forzosos ni anualidades.',
      isActive: false
    },

    {
      id: 2,
      label: '✔ Deposita como y cuando quieras.',
      isActive: false
    },

    {
      id: 3,
      label: '✔ Aplicación de depósitos automático.',
      isActive: false
    },

    {
      id: 4,
      label: '✔ Soporte continuo y personalizado.',
      isActive: false
    },

    {
      id: 5,
      label: '✔ Excelentes comisiones.',
      isActive: false
    },

    {
      id: 6,
      label: '✔ Diferente métodos de venta',
      isActive: false
    },
  ];

  listBenefit: AdvantageList[] = [
      {
        id: 1,
        label: '✔ Comisiones ajustadas a tu negocio',
        isActive: true,
      },
  
      {
        id: 2,
        label: '✔ Variedad de compañías de recargas y servicios',
        isActive: false
      },
  
      {
        id: 3,
        label: '✔ Recupera tu inversión + comisión',
        isActive: false
      },
  
      {
        id: 4,
        label: '✔ Soporte personalizado',
        isActive: true,
      },
  
      {
        id: 5,
        label: '✔ Adaptado para cualquier tipo de negocio',
        isActive: true
      },
      {
        id: 6,
        label: '✔ Aplicación de compras inmediatas',
        isActive: false
      },
  ];

    advantageList : Ventajas[] =[
      {
        id: 1,
        iconClass: 'how_to_reg',
        title: 'Registro Simple y Sin Complicaciones',
        description: 'Crea tu cuenta en minutos a través de nuestra plataforma',
      },
  
      {
        id: 2,
        iconClass: 'devices',
        title: 'Variedad de Operadores y Servicios Disponibles',
        description:
          'Accede a múltiples opciones de recarga desde una sola plataforma, incluyendo servicios, tarjetas de regalo y más.',
      },
  
      {
        id: 3,
        iconClass: 'point_of_sale',
        title: 'retorno de inversión inmediata',
        description:
          'Con una inversión minima desde $100 podras vender recargas hasta tarjeta de regalo, obten tu inversión + un porcentaje de comisión extra',
      },
  
      {
        id: 4,
        iconClass: 'support_agent',
        title: 'soporte personalizado',
        description:
          'Accede a múltiples opciones de recarga desde una sola plataforma, incluyendo servicios, tarjetas de regalo y más.',
      },
    ];
}

type Ventajas = {
  id: number;
  iconClass: string;
  title: string;
  description: string;
};
