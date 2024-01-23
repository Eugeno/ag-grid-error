import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { ModalGrid } from './modal';

@Component({
  selector: 'test-renderer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: '<button (click)="open()">Open</button>',
})
export class TestComponent implements ICellRendererAngularComp {
  private dialog = inject(MatDialog);

  agInit(params: ICellRendererParams): void {
  }

  refresh(params: ICellRendererParams) {
    return false;
  }

  open() {
    this.dialog.open(ModalGrid);
  }
}
