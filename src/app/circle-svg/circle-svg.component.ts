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
  @ViewChild('circles') circles: ElementRef;
  @ViewChild('element') element: ElementRef;
  private width = 335;
  private height = 335;
  private colorsMedium: any;
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
  private createSvgBackgroundGray(){

    this.createSvg(this.background)
      .append('path')
      .attr('d', this.arcSemicircle(275, 0, 40, -0.362, 0.364))
      .style('fill', 'rgba(39, 42, 56, 1)');
  }
  private createCircles(){
    const svg = this.createSvg(this.circles);
    const radius = Math.min(this.width, this.height) - 60;
    const dashDev = Math.PI / 100;
    const arc = (start: number, end: number) => d3.arc()
      .innerRadius(radius / 2 - 60)
      .outerRadius(radius / 2 - 55)
      .startAngle(start * 2 * Math.PI)
      .endAngle(end * 2 * Math.PI);

    let arr = new Array(57);
    arr = [...arr.map((x, i) => i)];

    arr.forEach((item, i) => {
      svg
        .append('path')
        .attr('d', arc(-0.35 + i * 1 / 50, -0.35 + (i + 1) * 1 / 50 - dashDev))
        .style('fill', 'rgba(39, 42, 56, 0.6)');
    });
  }
  private createColorsMedium(): void {
    this.colorsMedium = d3.scaleOrdinal()
      .domain(this.dataMediumDiagram)
      .range(['#0089FF', 'orange']);
  }
  private createDiagramMedium(){
    this.createColorsMedium();

    const textDataMedium =
      [
        'ТН',
        this.dataMediumDiagram[0],
        this.dataMediumDiagram[0] + this.dataMediumDiagram[1],
        '-' + this.dataMediumDiagram[1],
        'План  переработки'
      ];

    const svg = this.createSvg(this.element);
    const radius = Math.min(this.width, this.height) - 60;
    const dashDev = Math.PI / 300;
    const pie = d3.pie();
    const arc = (start, end) => d3.arc()
      .innerRadius(radius / 2 - 7)
      .outerRadius(radius / 2 - 33)
      .startAngle(start * 2 * Math.PI)
      .endAngle(end * 2 * Math.PI);

    let arr = new Array(107);
    arr = [...arr.map((x, i) => i)];

    arr.forEach((item, i) => {
      svg
        .append('path')
        .attr('d', arc(-0.35 + i * 1 / 150, -0.35 + (i + 1) * 1 / 150 - dashDev));
    });

    svg
      .selectAll('path')
      // .data(this.dataMediumDiagram)
      .attr('fill', (d, i) => (this.colorsMedium(i)));

    //   .append('path')
    //       .attr('d', arc())
    //       .attr('fill', (d, i) => (this.colorsMedium(i)))



    this.createCircles();
    this.createSvgBackgroundGray();

    d3.select('#backgroundMedium')
      .selectAll('p')
      .data(textDataMedium)
      .text(function(d, i) {
        return d;
      });
  }
}
