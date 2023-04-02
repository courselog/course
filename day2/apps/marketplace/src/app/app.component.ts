import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'office2023-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'marketplace';
}
