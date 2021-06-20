import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  
  data1 : string ='';

  public data = new BehaviorSubject(this.data1);
  currentData = this.data.asObservable();
  constructor() { }

  setData(data: any) {
    this.data.next(data);
}
}
