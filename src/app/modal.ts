import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppGrid } from './grid';

@Component({
  selector: 'modal-grid',
  standalone: true,
  imports: [AgGridModule, AppGrid],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-grid />
  `,
})
export class ModalGrid {
}
