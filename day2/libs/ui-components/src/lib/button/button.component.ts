import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'office2023-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() text?: string;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  onClick() {
    this.buttonClicked.emit();
  }

}
