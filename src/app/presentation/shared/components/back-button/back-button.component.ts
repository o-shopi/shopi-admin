import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  @Output()
  backPress = new EventEmitter<true>();

  constructor() {}

  ngOnInit() {}

  clickEvent(): void {
    this.backPress.emit(true);
  }
}
