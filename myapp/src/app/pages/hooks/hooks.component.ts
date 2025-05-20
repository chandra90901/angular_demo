import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  OnInit, OnChanges, SimpleChanges, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy, Input
} from '@angular/core';

@Component({
  selector: 'app-hooks',
  imports: [CommonModule],
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.scss'
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() sampleInput: string = 'Initial Value';
  logs: string[] = [];

  constructor() {
    this.logs.push('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logs.push('ngOnChanges called');
  }

  ngOnInit(): void {
    this.logs.push('ngOnInit called');
  }

  ngDoCheck(): void {
    this.logs.push('ngDoCheck called');
  }

  ngAfterViewInit(): void {
    this.logs.push('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    this.logs.push('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    this.logs.push('ngOnDestroy called');
  }
}

