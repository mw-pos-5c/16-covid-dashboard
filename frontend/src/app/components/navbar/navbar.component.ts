import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  password: string = '';

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.password);
  }

  logout() {
    this.auth.logout();
    this.router.navigate([''])
  }
}
