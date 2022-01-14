import { makeAutoObservable } from 'mobx';

export class ProgressStore {
  progress: boolean;

  constructor() {
    this.progress = false;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setInProgress(): void {
    this.progress = true;
  }

  setInNotProgress(): void {
    this.progress = false;
  }
}
