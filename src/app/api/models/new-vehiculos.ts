/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Vehiculos, ''>, schemaOptions: { title: 'NewVehiculos', exclude: [ '' ] })
 */
export interface NewVehiculos {
  color: string;
  marca: string;
  placa?: string;
  tipovehiculo: string;

  [key: string]: any;
}
