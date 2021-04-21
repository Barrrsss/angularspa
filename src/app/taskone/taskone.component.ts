import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-taskone',
  templateUrl: './taskone.component.html',
  styleUrls: ['./taskone.component.scss']
})
export class TaskoneComponent implements OnInit {

  constructor() { }
  items = [
    {name: 'Выработка',
      current: 30094,
      target: 31265,
      diff: -1171,
    },
    {name: 'Выработка',
      current: 30094,
      target: 31265,
      diff: -1171,
    }
  ];

  ngOnInit(): void {
  }

}
