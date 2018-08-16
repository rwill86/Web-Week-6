import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../socket.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
     //isLoggedIn = true;
	 //imageWidth:number = 50;
	 //imageHeigh:number = 50;
	 userName:string;
	 //lists = [{'userID':'1','userName':'Pass','email':'someone@hotmail.com'}]
	 //messages = [{'text':'hello','Date':'11/08/2018'}]'
	 messages = [];
	 message:string;
	 connection;
     constructor(private router:Router, private sockServ: SocketService){
	 }

     ngOnInit(){
	     if(!sessionStorage.getItem('userName')){
			 console.log('Not validated');
			 sessionStorage.clear();
			 alert('Not a Valid User');
			 this.router.navigateByUrl('login');
		 } else{
			 this.userName = sessionStorage.getItem('userName');
			 console.log('Session started for:' + this.userName);
			 this.connection = this.sockServ.getMessages().subscribe((message:string) => {
				 this.messages.push(message);
				 this.message = '';
			 });
		 }
     }
	 
	 sendMessage(){
		 var d = new Date();
		 var h = d.getHours();
		 var m = d.getMinutes();
		 this.sockServ.sendMessages(this.userName + ' - ' + this.message + ' - ' + h + ':' + m);
	 }
	 
	 ngOnDestory(){
		 if(this.connection){
			 this.connection.unsubscribe();
		 }
	 }
	 
	 logout(){
		 sessionStorage.clear();
		 console.log('Session Cleared');
		 this.router.navigateByUrl('login');
	 }
}
