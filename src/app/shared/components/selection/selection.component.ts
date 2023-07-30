import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {
  @Input() title: string = '';
  @Input() word!: string;
  @Input() data: any[]=[];
  @Output() selectedValue= new EventEmitter();
  constructor(){

  }
  // emitter(event: any){
  //   this.selectedValue.emit(event)
  //   console.log(event)
  // }
  emitter(event: any){
    this.selectedValue.emit(event)
  }
}
