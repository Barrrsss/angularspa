import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-circle-svg',
  templateUrl: './circle-svg.component.html',
  styleUrls: ['./circle-svg.component.scss']
})
export class CircleSvgComponent implements OnInit {
  constructor(private diagram: DataService) { }
  @ViewChild('background') background: ElementRef;
  @ViewChild('background_two') background_two: ElementRef;
  @ViewChild('circles') circles: ElementRef;
  @ViewChild('element') element: ElementRef;
  private width = 376;
  private height = 376;
  private dataMediumDiagram = [];

  ngOnInit(): void {
    this.diagram.getMediumDiagramData().subscribe((value) => {
      this.dataMediumDiagram = value.map(d => d.value);
    });
  }
  ngAfterViewInit(): void {
    this.createDiagramMedium();
  }

  private createSvg(nameNative: ElementRef){
    return d3.select(nameNative.nativeElement)
      .append('svg')
      .attr('width', `${this.width}px`)
      .attr('height', `${this.height}px`)
      .append('g')
      .style('transform', `translate(${this.width / 2}px, ${this.height / 2}px)`);
  }
  private arcSemicircle( radius: number, innerDeviation: number, outerDeviation: number, start: number, end: number){
    return d3.arc()
      .innerRadius(radius / 2 - innerDeviation)
      .outerRadius(radius / 2 - outerDeviation)
      .startAngle(start * 2 * Math.PI)
      .endAngle(end * 2 * Math.PI);
  }
  private arcBackground(){
    this.createSvg(this.background)
      .append('path')
      .attr('d', this.arcSemicircle(315, 0, 40, -0.350, 0.350))
      .style('fill', '#1C1F2B');
  }
  private arcBackgroundTwo(){
    this.createSvg(this.background_two)
      .append('path')
      .attr('d', this.arcSemicircle(315, 0, 40, -0.354, 0.354))
      .style('fill', '#303549');
  }
  private innerArc(){
    const svg = this.createSvg(this.circles);
    const radius = Math.min(this.width, this.height) - 33;
    const output = Math.PI / 150;
    const arc = (start: number, end: number) => d3.arc()
      .innerRadius(radius / 2 - 60)
      .outerRadius(radius / 2 - 56)
      .startAngle(start * 2 * Math.PI)
      .endAngle(end * 2 * Math.PI);

    let arr = new Array(57);
    arr = [...arr.map((x, i) => i)];

    arr.forEach((item, i) => {
      svg
        .append('path')
        .attr('d', arc(-0.345 + i * 0.00312 / 0.25, -0.345 + (i + 1) * 0.00312 / 0.25 - output))
        .style('fill', 'rgba(39, 42, 56, 0.5)');
    });
  }

  private createDiagramMedium(){

    // const textDataMedium =
    //   [
    //     'ТН',
    //     this.dataMediumDiagram[0],
    //     this.dataMediumDiagram[0] + this.dataMediumDiagram[1],
    //     '-' + this.dataMediumDiagram[1],
    //     'План  переработки'
    //   ];

    const svg = this.createSvg(this.element);
    const radius = Math.min(this.width, this.height) - 60;
    const dashDev = Math.PI / 340;
    // const pie = d3.pie();
    const arc = (start, end) => d3.arc()
      .innerRadius(radius / 2 - 7)
      .outerRadius(radius / 2 - 33)
      .startAngle(start * 2 * Math.PI)
      .endAngle(end * 2 * Math.PI);

    let arr = new Array(125);
    arr = [...arr.map((x, i) => i)];

    arr.forEach((item, i) => {
      svg
        .append('path')
        .attr('d', arc(-0.3425 + i * 1 / 180, -0.3425 + (i + 1) * 1 / 180 - dashDev))
        .attr('fill', '#F7931E');
    });
    const length: number = parseFloat((this.dataMediumDiagram[0] / (this.dataMediumDiagram[1] / 125)).toFixed(0));
    console.log(length);
    let arr1 = new Array(length );
    arr1 = [...arr1.map((x, i) => i)];

    arr1.forEach((item, i) => {
      svg
        .append('path')
        .attr('d', arc(-0.3425 + i * 1 / 180, -0.3425 + (i + 1) * 1 / 180 - dashDev))
        .attr('fill', '#0089FF')
        .style('stroke-dasharray', '0 642 389 253')
        .style('stroke', 'red');
    });
    this.innerArc();
    this.arcBackground();
    this.arcBackgroundTwo();

    // d3.select('#backgroundMedium')
    //   .selectAll('p')
    //   .data(textDataMedium)
    //   .text(function(d, i) {
    //     return d;
    //   });
  }
}
