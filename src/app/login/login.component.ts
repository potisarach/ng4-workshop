import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map'
import { UserModel } from '../shared/user.model';
import { UserService } from '../shared/user.service';
declare var bootbox:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginPath = 'http://localhost:8080/api/login';
  public username: string;
  public password: string;;
  constructor(public userService: UserService, private http: Http,  private route: Router) {
 
   }

  ngOnInit() {

  }

  login(){
    let headers = new Headers({'Content-Type': 'application/json'});
    let parameter = { 
                      "email": this.username
                    , "password": this.password
                  }
    let options = new RequestOptions({ headers: headers, method: "post" });
    this.http.post(this.loginPath, parameter, options)
    .map(res => res.json())
    .subscribe(
    data => this.saveStorage(data),
    err => this.onError(err),
    () => console.log('Fetching complete for Server Api.')
    );
  }

  saveStorage(data){
    console.log("LOGIN RETURN",data)
    this.userService.data.next(data);
    let dataUser = JSON.stringify(data);
    localStorage.setItem('isLoggedin', 'true');
    localStorage.setItem('user', dataUser);
    this.route.navigate(['/']);
  }
  onError(err){
    bootbox.alert('Users not found with Email or incorrect');
  }
}
