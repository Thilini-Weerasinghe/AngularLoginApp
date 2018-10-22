import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
// import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth : AuthService) { }

  ngOnInit() {
  }
  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    this . Auth.getUserDetails(username,password)
    console.log(username , password).subscribe(data=> {
      if (data.success){
window.alert("success")
      } else {
        window.alert(data.message)
      }
    })
  }
 
}
