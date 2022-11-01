import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  //3rd execution

  //properties and methods

  aim = "Your perfect banking partner"

  account = "Enter your Acno here"

  acno = "";
  pswd = "";

  userDetails: any =
    {
      1000: { acno: 1000, username: 'alwin', password: 1000, balance: 10000 },
      1001: { acno: 1001, username: 'fayas', password: 1000, balance: 10000 },
      1002: { acno: 1002, username: 'reethu', password: 1000, balance: 10000 },

    }

  constructor() { }   //1st execution

  ngOnInit(): void {   //2nd execution  - life cycle hooks of angular

    //inital process of component
  }

  //userdefined functions //4th execution

  acnoChange(event: any) {
    this.acno = (event.target.value);
    console.log(this.acno);
  }

  pswdChange(event: any) {
    this.pswd = (event.target.value);
    console.log(this.pswd);
  }

  login()
   {

    var acno = this.acno;
    var pswd = this.pswd;
    var userDetails = this.userDetails;


    if (acno in userDetails)
     {
      if(pswd == userDetails[acno]['password'])
      {
        alert("login success");
      }
   else {
        alert("incorrect password");
      }
    }
    else 
    {
      alert('user not found');
    }
  }


}
