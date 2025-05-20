import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { HoverHighlightDirective } from '../../directives/hover-highlight.directive';

@Component({
  selector: 'app-customdirectives',
  imports: [CommonModule, HoverHighlightDirective],
  templateUrl: './customdirectives.component.html',
  styleUrl: './customdirectives.component.scss'
})
export class CustomdirectivesComponent {

}
