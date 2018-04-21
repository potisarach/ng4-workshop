import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {

  constructor(public userService: UserService) {

   }

  ngOnInit() {
    
  } 
   
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
