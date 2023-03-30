import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
   
  }
  viewPatients = () => {
    return this.http.get('http://52.140.61.72:8083/Patient');
  }

  fetchData=()=>{

    const socket=new WebSocket("ws://20.219.88.167:9001/chat");
    let stompClient=Stomp.over(socket);
    console.log(stompClient);
    return stompClient;
  }

  
}
