import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read-qr',
  templateUrl: './read-qr.component.html',
  styleUrls: ['./read-qr.component.scss'],
})
export class ReadQrComponent implements OnInit {
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;
  showTable = true;
  result: string;

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  hasDevices: boolean;
  hasPermission: boolean;

  qrResultString: string;

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  clearResult(): void {
    this.qrResultString = null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    if (this.result) {
      return;
    }
    this.result = resultString;
    Swal.fire({
      title: 'Atenção!',
      text: 'Deseja concluir essa reserva? Essa ação não poderá ser desfeita!',
      showDenyButton: true,
      confirmButtonText: `Sim`,
      denyButtonText: `Cancelar`,
      customClass: {
        confirmButton: 'modal-button',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Reserva concluída!', '', 'success').then(() => {
          this.showTable = true;
          this.router.navigate(['menu']);
        });
      } else {
        this.showTable = true;
      }
    });
  }

  onDeviceSelectChange(selected: string) {
    const device = this.availableDevices.find((x) => x.deviceId === selected);
    this.currentDevice = device || null;
  }

  openFormatsDialog() {
    const data = {
      formatsEnabled: this.formatsEnabled,
    };
  }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  openInfoDialog() {
    const data = {
      hasDevices: this.hasDevices,
      hasPermission: this.hasPermission,
    };
  }

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  toggleTryHarder(): void {
    this.tryHarder = !this.tryHarder;
  }
}
