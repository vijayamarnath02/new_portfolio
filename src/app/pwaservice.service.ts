import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaUpdateService {

  constructor(private swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      setInterval(() => {
        swUpdate.checkForUpdate();
      }, 30000);

      swUpdate.versionUpdates.subscribe(event => {
        if (event.type === 'VERSION_DETECTED') {
          console.log('New version detected:', event.version);
        }

        if (event.type === 'VERSION_READY') {
          if (confirm('New version available. Load new version?')) {
            window.location.reload();
          }
        }
      });
    }
  }

  checkForUpdate(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().then(() => {
        console.log('Checked for updates');
      });
    }
  }

  activateUpdate(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.activateUpdate().then(() => {
        window.location.reload();
      });
    }
  }
}