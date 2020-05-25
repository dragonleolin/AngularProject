import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() inputData = 0;

  @Output() outputData = new EventEmitter<Number>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inputData.currentValue) {
      console.log('change' + this.inputData);
    }
  }

  ngOnInit(): void {}

  deleteNumber() {
    this.inputData--;
    this.outputData.emit(this.inputData);
  }


}
