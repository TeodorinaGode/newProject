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

    { label: 'Pelena per femije',
     link: '#' ,
      subMenu: [
      { 
        label: 'Item 1', 
        link: '#' 
      },
      { 
        label: 'Item 2', 
        link: '#' 
      },
      { 
        label: 'Item 3', 
        link: '#' 
      },
      { 
        label: 'Item 4', 
        link: '#' 
      },
      { 
        label: 'Item 5', 
        link: '#' 
      },{ 
        label: 'Item 6', 
        link: '#' 
      },
      { 
        label: 'Item 7', 
        link: '#' 
      }
    ]},
    { label: 'Produkte per nena shtatzen', link: '#' },
    { label: 'Produkte për nena pas lindjes', link: '#' },
  ];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }
}