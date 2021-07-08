import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-taskone',
  templateUrl: './taskone.component.html',
  styleUrls: ['./taskone.component.scss']
})
export class TaskoneComponent implements OnInit {

  constructor() { }
  items = [
    {name: 'Выработка1',
      current: 30094,
      target: 31265,
    },
    {name: 'Выработка',
      current: 33994,
      target: 36859,
    }
  ];

  ngOnInit(): void {
  }

}
