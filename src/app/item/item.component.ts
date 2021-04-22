import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  elements = [
    {name: 'Загрузка печи по продукту ', target: 224.9, current: 224.9, status: 'normal'},
    {name: 'Температура продукта на входе в печь ', target: 224.9, current: 224.9, status: 'attention'},
    {name: 'Температура продукта на выходе из печи ', target: 224.9, current: 224.9, status: 'normal'},
    {name: 'Доля отгона сырья', target: 224.9, current: 224.9, status: 'danger'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
