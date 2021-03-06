import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createList(title: string) {
    // We wont to send a web request to create a list
    // Мы хотим отправить веб-запрос на создание списка
    return this.webReqService.post('lists', { title });
  }
}
