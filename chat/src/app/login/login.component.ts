import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
     username:string = '';
     password:string = '';
     constructor(private router:Router, private form:FormsModule){
	 }

     ngOnInit(){
		 if(sessionStorage.getItem('userName')){
			 console.log('easy logout');
			 sessionStorage.clear();
		 }
     }
	 
	 loginUser(event){
	     event.preventDefault();
	     if(this.password == 'pass'){			 
		     localStorage.setItem('loggedIn', '1');
			 localStorage.setItem('userName', this.username);
		     sessionStorage.setItem('userID', '1');
	         sessionStorage.setItem('userName', this.username);
	         sessionStorage.setItem('birthday', '11/08/1998');
		     sessionStorage.setItem('age', '20');    
		     this.router.navigateByUrl('/chat');
	     } else{
		     console.log('Username and password were incorrect. \nUsername:' + this.username + '\nPassword:' + this.password);
		 }
     }

}
