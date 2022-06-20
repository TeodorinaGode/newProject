import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
})

export class WrapperComponent implements OnInit {
  isExpanded: boolean = true;
  isExpandedDropDown: boolean = false;
  testing: boolean = false;
  public spinner: boolean = true;
  public numberOfUnreadNotifications: number = 0;
  public roles: any;

  public adminNavBarItems: Array<any> = [

    { label: 'Paneli Kryesor',
     link: '#' ,
      subMenu: [
      { 
        label: 'CAD', 
        link: '#' 
      }
    ]},
    { label: 'Shto Shpallje', link: '#' },
    { label: 'Shpallje', link: '#' },
    { label: 'Shpallje Draft', link: '#' },
    { label: 'Aplikimet e mia ', link: '#' },
    { label: 'Aplikant', link: '#' },
    { label: 'Struktura Organizative', link: '#' },
    { label: 'Përdoruesit', link: '#' },
    { label: 'Rolet', link: '#' },
    { label: 'Politikat e sigurisë', link: '#' },
  ];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
}