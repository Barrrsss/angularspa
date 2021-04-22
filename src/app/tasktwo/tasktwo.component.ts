import { Component, OnInit } from '@angular/core';


export interface  Events {
  id: number;
  name: string;
  visibility: boolean;
}
@Component({
  selector: 'app-tasktwo',
  templateUrl: './tasktwo.component.html',
  styleUrls: ['./tasktwo.component.scss']
})
export class TasktwoComponent implements OnInit {

  constructor() {

  }

  public events: Events[]  = [
    {
      id: 1,
      name: 'Сырьё',
      visibility: true,
    },
    {
      id: 2,
      name: 'Топливо газообразное',
      visibility: true,
    },
    {
      id: 3,
      name: 'Жидкое топливо',
      visibility: true,
    },
    {
      id: 4,
      name: 'Дымовые газы',
      visibility: true,
    },
    {
      id: 5,
      name: 'Воздух',
      visibility: true,
    },
  ];


  ngOnInit(): void {
  }
  changeVisibility(id): void {
    const index = this.events.findIndex(e => e.id === id);
    this.events[index].visibility = !this.events[index].visibility;
  }
}
