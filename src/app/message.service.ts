import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string[] = ['Welcome to super star room','We are legends'];

  // tslint:disable-next-line:typedef
  add(message: string) {
    this.message.push(message);
  }

  // tslint:disable-next-line:typedef
  clear() {
    this.message = [];
  }

  constructor() { }
}
