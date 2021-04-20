import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-ms-button',
  templateUrl: './ms-button.component.html',
  styleUrls: ['./ms-button.component.scss']
})
export class MSButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() mode: 'primary' | 'secondary' = 'primary';
  @Input() size: 'default' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'wide' = 'default';
  @Input() type: 'submit' | 'button' = 'button';

  @Output() public click: EventEmitter<MouseEvent> = new EventEmitter();

  get isPrimary(): boolean { return this.mode === 'primary'; }
  get isSecondary(): boolean { return this.mode === 'secondary'; }
  get buttonStatus(): string { return this.disabled ? 'disabled' : 'enabled'; }

  constructor() { }

  public ngOnInit(): void { }

  public onClick(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.disabled) {
      this.click.emit(event);
    }
  }

  public getButtonClasses(): string {
    let classes = '';
    if (this.mode) { classes = classes + `${this.mode} `; }
    if (this.buttonStatus) { classes = classes + `${this.buttonStatus} `; }
    if (this.size) { classes = classes + `size-${this.size} `; }
    return classes;
  }
}
