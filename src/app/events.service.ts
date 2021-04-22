import { Injectable } from '@angular/core';

export interface Name{
  name: string;
  data: Data;
}
export interface Data{
  tempcurrent: number;
  tempfinal: number;
}
export interface Events {
  res: Name;
}
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getCurrent(): Events  {
    return      {
      res: {
       name: 'name',
        data: {
          tempcurrent: 1,
          tempfinal: 2,
        }
      },
    };
  }
}
