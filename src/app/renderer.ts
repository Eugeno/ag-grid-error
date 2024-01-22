import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { NbDialogService } from '@nebular/theme';
import { ModalGrid } from './modal';

@Component({
  selector: 'test-renderer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: '<button (click)="open()">Open</button>',
})
export class TestComponent implements ICellRendererAngularComp {
  private dialogService = inject(NbDialogService);

  agInit(params: ICellRendererParams): void {
  }

  refresh(params: ICellRendererParams) {
    return false;
  }

  open() {
    this.dialogService.open(ModalGrid).onClose.subscribe();
  }
}
