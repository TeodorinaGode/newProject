import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    constructor(

    ) {
    }

    public adminNavBarItems: Array<any> =[
      {
        label: 'Kategoritë',
        subMenu: [
          {
            label: 'Pelena per femije',
            subMenu: [
              {
                label: 'Michael Prentice',
                link: '#',
              },
              {
                label: 'Stephen Fluin',
                link: '#',
              },
              {
                label: 'Mike Brocchi',
                link: '#',
              },
            ],
          },
          {
            label: 'Produkte per nena shtatzen',
            subMenu: [
              {
                label: 'Delight your Organization',
                link: '#',
              },
              {
                label: "What's up with the Web?",
                link: '#',
              },
              {
                label: 'My ally, the CLI',
                link: '#',
              },
              {
                label: 'Become an Angular Tailor',
                link: '#',
              },
            ],
          },
          {
            label: 'Produkte për nena pas lindjes',
            link: '#',
          },
        ],
      }
    ];

    ngOnInit(): void {
      console.log(this.adminNavBarItems);
    } 

}

