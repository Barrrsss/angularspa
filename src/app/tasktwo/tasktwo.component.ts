import { Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-tasktwo',
  templateUrl: './tasktwo.component.html',
  styleUrls: ['./tasktwo.component.scss']
})
export class TasktwoComponent implements OnInit {

  constructor(public dataService: DataService) {

  }
  public data: DataService[] = [];

  ngOnInit(): void {
  }
  changeVisibility(id): void {
    const index = this.dataService.data.findIndex(e => e.id === id);
    this.dataService.data[index].visibility = !this.dataService.data[index].visibility;
  }

  changeStatus(data, item): void {
    this.dataService.data[data - 1].item[item - 1].active = !this.dataService.data[data - 1].item[item - 1].active;
  }
}
