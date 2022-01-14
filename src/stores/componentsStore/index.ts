import { MessagesStore } from './messagesStore';
import { ProgressStore } from './progressStore';

export class ComponentsStore {
  messagesStore: MessagesStore;
  progressStore: ProgressStore;

  constructor() {
    this.messagesStore = new MessagesStore();
    this.progressStore = new ProgressStore();
  }
}
