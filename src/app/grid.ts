import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { TestComponent } from './renderer';

@Component({
  selector: 'app-grid',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ag-grid-angular
      style="width: 500px; height: 350px;"
      class="ag-theme-alpine"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
    />
  `,
  imports: [
    AgGridAngular,
  ],
})
export class AppGrid {
  columnDefs: ColDef[] = [{ field: 'model', cellRenderer: TestComponent }];
  rowData = [{}];
}
