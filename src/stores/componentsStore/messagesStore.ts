import { makeAutoObservable } from 'mobx';

export class MessagesStore {
  errorMessage: string | null;
  successMessage: string | null;

  constructor() {
    this.errorMessage = null;
    this.successMessage = null;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setErrorMessage(messages: string): void {
    this.errorMessage = messages;
  }

  clearErrorMessage(): void {
    this.errorMessage = null;
  }

  setSuccessMessage(message: string): void {
    this.successMessage = message;
  }

  clearSuccessMessage(): void {
    this.successMessage = null;
  }
}
