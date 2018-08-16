import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
     private url = 'http://localhost:3000';
     private socket;
     constructor(){ 
	     this.socket = io(this.url);
	 }
	 
	 public sendMessages(message){
		 this.socket.emit('add-message', message);
	 }
	 
	 public getMessages = () => {
         return Observable.create((observer) => {
             this.socket.on('message', (message) => {
                 observer.next(message);
             });
         });
     }
	 
	 //socket.join('room1', () => {
		 //io.to('room1', 'a new user has joined the room');
	 //}
	 
	 //
	 
	 //socket.disccount(true);
	 //socket.boardcast.emit('boardcast', data);
	 
	 //getMessages(){
		 //let obmessages = new Observable(
		     //observer =>{
				 //this.socket = io();
				 //this.socket.on('message', (data)=>{observer.next(data);
			 //}
		 //);
		     //return ()=>{
			     //this.socket.disconnect();
		     //}
		 //});
		 //return obmessages;
	 //}
}
