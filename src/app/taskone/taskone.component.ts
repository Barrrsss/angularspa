import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-taskone',
  templateUrl: './taskone.component.html',
  styleUrls: ['./taskone.component.scss']
})
export class TaskoneComponent implements  OnInit {
  constructor() {
    this.myEvent = new EventEmitter<void>();
  }
  public myEvent: EventEmitter<void>;
  items = [
    {name: 'Выработка',
      current: 30094,
      target: 31265,
    },
    {name: 'Выработка',
      current: 16000,
      target: 30000,
    }
  ];
  data = [
    { current: 33994 ,
      target: 36859 }
  ];
  width = 345;
  height = 345;

  @ViewChild('background') background: ElementRef;
  @ViewChild('background_two') background_two: ElementRef;
  @ViewChild('arc') arc: ElementRef;
  @ViewChild('task__arc') task__arc: ElementRef;


  ngOnInit(): void {
  }
  public ngAfterViewInit(): void {
    this.makeArc();
  }




  makeTaskTwo(nameNative: ElementRef){
    return d3.select(nameNative.nativeElement)
      .append('svg')
      .attr('width', `${this.width}px`)
      .attr('height', `${this.height}px`)
      .append('g')
      .style('transform', `translate(${this.width / 2}px, ${this.height / 2}px)`);
  }
  arcSemicircle( radius: number, innerDeviation: number, outerDeviation: number, start: number, end: number){
    return d3.arc()
      .startAngle(2 * Math.PI * start)
      .endAngle(2 * Math.PI * end)
      .innerRadius(radius / 2 - innerDeviation)
      .outerRadius(radius / 2 - outerDeviation);
  }
  arcBackground(){
    this.makeTaskTwo(this.background)
      .append('path')
      .attr('d', this.arcSemicircle(285, 0, 40, -0.350, 0.350))
      .style('fill', '#1C1F2B');
  }
  arcBackgroundTwo(){
    this.makeTaskTwo(this.background_two)
      .append('path')
      .attr('d', this.arcSemicircle(285, 0, 40, -0.354, 0.354))
      .style('fill', '#303549');
  }
  innerArc(){
    const svg = this.makeTaskTwo(this.task__arc);
    const radius = Math.min(this.width, this.height) - 33;
    const gap = Math.PI / 150;
    const arc = (start: number, end: number) => d3.arc()
      .innerRadius(radius / 2 - 60)
      .outerRadius(radius / 2 - 56)
      .startAngle(2 * Math.PI * start)
      .endAngle(2 * Math.PI * end);

    let arr = new Array(57);
    arr = [...arr.map((value, e) => e)];

    arr.forEach((item, i) => {
      svg
        .append('path')
        .attr('d', arc(-0.345 + i * 0.00312 / 0.25, -0.345 + (i + 1) * 0.00312 / 0.25 - gap))
        .style('fill', 'rgba(39, 42, 56, 0.5)');
    });
  }

  makeArc(){
    const svg = this.makeTaskTwo(this.arc);
    const radius = Math.min(this.width, this.height) - 60;
    const gap = Math.PI / 340;
    const arc = (start, end) => d3.arc()
      .startAngle(start * 2 * Math.PI)
      .endAngle(end * 2 * Math.PI)
      .innerRadius(radius / 2 - 7)
      .outerRadius(radius / 2 - 33);

    let arr = new Array(125);
    arr = [...arr.map((value, e) => e)];

    arr.forEach((item, i) => {
      svg
        .append('path')
        .attr('d', arc(-0.3425 + i * 1 / 180, -0.3425 + (i + 1) * 1 / 180 - gap))
        .attr('fill', '#F7931E');
    });
    const length: number = parseFloat((this.data[0].current / (this.data[0].target / 125)).toFixed(0));
    let arr1 = new Array(length);
    arr1 = [...arr1.map((value, e) => e)];

    arr1.forEach((item, i) => {
      svg
        .append('path')
        .attr('d', arc(-0.3425 + i * 1 / 180, -0.3425 + (i + 1) * 1 / 180 - gap))
        .attr('fill', '#0089FF');
    });
    const arc1 = (start, end) => d3.arc()
      .startAngle(start * 2 * Math.PI)
      .endAngle(end * 2 * Math.PI)
      .innerRadius(radius / 2)
      .outerRadius(radius / 2 - 40);

    let arr3 = new Array(1);
    arr3 = [...arr3.map((value, e) => e)];

    arr3.forEach((item, i) => {
      svg
        .append('path')
        .attr('d', arc1(-0.3425 + length * 1 / 180, -0.3425 + (length + 1) * 1 / 180 - gap))
        .attr('fill', '#fff');
    });
    this.innerArc();
    this.arcBackground();
    this.arcBackgroundTwo();
  }

}
