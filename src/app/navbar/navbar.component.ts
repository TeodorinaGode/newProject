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
            label: 'Pelena për femije',
            subMenu: [
              {
                label: 'Item 1',
                link: '#',
              },
              {
                label: 'Item 2',
                link: '#',
              },
              {
                label: 'Item 3',
                link: '#',
              },
            ],
          },
          {
            label: 'Produkte per nena shtatzen',
            subMenu: [
              {
                label: 'Item 1',
                link: '#',
                img:'https://images.oyoroomscdn.com/uploads/hotel_image/1097/340ea5ee01acc37f.jpg'
              },
              {
                label: "Item 2",
                link: '#',
                img:'https://images.oyoroomscdn.com/uploads/hotel_image/1097/340ea5ee01acc37f.jpg'
              },
              {
                label: 'Item 3',
                link: '#',
                img:'https://images.oyoroomscdn.com/uploads/hotel_image/1097/340ea5ee01acc37f.jpg'
              },
              {
                label: 'Item 4',
                link: '#',
                img:'https://images.oyoroomscdn.com/uploads/hotel_image/1097/340ea5ee01acc37f.jpg'

              },
            ],
          },
          {
            label: 'Produkte per nena pas lindjes',
            subMenu: [
              {
                label: 'Item 5',
                link: '#',
              },
              {
                label: "Item 6",
                link: '#',
              },
              {
                label: 'Item 7',
                link: '#',
              },
              {
                label: 'Item 8',
                link: '#',
              },
            ],
          },
        ],
      }
    ];

    ngOnInit(): void {
    } 

}

