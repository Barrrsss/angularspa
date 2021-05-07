import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface  Data {
  id: number;
  name: string;
  disc: number;
  visibility: boolean;
  item: Item[];
}
export interface DiagramModel {
  value: number;
}

interface  Item {
  id: number;
  name: string;
  target: number;
  current: number;
  status: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  dataMediumDiagram = [
    { "value": 12230 },
    { "value":  36859 }
  ];
  getMediumDiagramData(): Observable<DiagramModel[]>{
    return of(this.dataMediumDiagram);
  }
  public data: Data[]  = [
    {
      id: 1,
      name: 'Сырьё',
      visibility: true,
      disc: 0,
      item: [{
        id: 1,
        name: 'Загрузка печи по продукту ',
        target: 224.9,
        current: 224.9,
        status: 'normal',
        active: false,
      }, {
        id: 2,
        name: 'Температура продукта на входе в печь ',
        target: 224.9,
        current: 224.9,
        status: 'normal',
        active: false,
      },
        {
          id: 3,
          name: 'Температура продукта на выходе из печи ',
          target: 224.9,
          current: 224.9,
          status: 'normal',
          active: false,
        }, {
          id: 4,
          name: 'Доля отгона сырья',
          target: 224.9,
          current: 224.9,
          status: 'normal',
          active: false,
        }, ],
    },
    {
      id: 2,
      name: 'Топливо газообразное',
      visibility: false,
      disc: 1,
      item: [{
        id: 1,
        name: 'Загрузка печи по продукту ',
        target: 224.9,
        current: 224.9,
        status: 'normal',
        active: false,
      }, {
        id: 2,
        name: 'Температура продукта на входе в печь ',
        target: 224.9,
        current: 224.9,
        status: 'normal',
        active: false,
      },
        {
          id: 3,
          name: 'Температура продукта на выходе из печи ',
          target: 224.9,
          current: 224.9,
          status: 'danger',
          active: false,
        }, ],
    },
    {
      id: 3,
      name: 'Жидкое топливо',
      visibility: false,
      disc: 1,
      item: [{
        id: 1,
        name: 'Загрузка печи по продукту ',
        target: 224.9,
        current: 224.9,
        status: 'normal',
        active: false,
      }, {
        id: 2,
        name: 'Температура продукта на входе в печь ',
        target: 224.9,
        current: 224.9,
        status: 'normal',
        active: false,
      },
        {
          id: 3,
          name: 'Температура продукта на выходе из печи ',
          target: 224.9,
          current: 224.9,
          status: 'normal',
          active: false,
        }, {
          id: 4,
          name: 'Доля отгона сырья',
          target: 224.9,
          current: 224.9,
          status: 'danger',
          active: false,
        }, ],
    },
    {
      id: 4,
      name: 'Дымовые газы',
      visibility: false,
      disc: 0,
      item: [{
        id: 1,
        name: 'Загрузка печи по продукту ',
        target: 224.9,
        current: 224.9,
        status: 'normal',
        active: false,
      }, {
        id: 2,
        name: 'Температура продукта на входе в печь ',
        target: 224.9,
        current: 224.9,
        status: 'normal',
        active: false,
      },
        {
          id: 3,
          name: 'Температура продукта на выходе из печи ',
          target: 224.9,
          current: 224.9,
          status: 'normal',
          active: false,
        }, ],
    },
    {
      id: 5,
      name: 'Воздух',
      visibility: true,
      disc: 0,
      item: [{
        id: 1,
        name: 'Температура воздуха на горение в печи',
        target: 224.9,
        current: 224.9,
        status: 'normal',
        active: false,
      }, {
        id: 2,
        name: 'Коэффициент избытка воздуха',
        target: 224.9,
        current: 224.9,
        status: 'normal',
        active: false,
      }, ],
    },
  ];
}
