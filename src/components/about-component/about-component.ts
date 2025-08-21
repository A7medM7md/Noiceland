import { Component } from '@angular/core';
import { ITeam } from '../../modules/iteam';
import { IContact } from '../../modules/icontact';

@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css'
})
export class AboutComponent {
  TeamList:ITeam[];
  ContactList:IContact[];

  constructor(){
    this.TeamList = [
      {
        img: "assets/images/1.jpg",
        name: "Simeon Peterson",
        role: "Cofounder, Editor in Chief"
      },
      {
        img: "assets/images/2.jpg",
        name: "John Peterson",
        role: "Cofounder, Partner"
      },
      {
        img: "assets/images/3.jpg",
        name: "Annie Lueilwitz",
        role: "Managing Editor"
      },
      {
        img: "assets/images/4.jpg",
        name: "Reta Torphy",
        role: "Managing Editor"
      },
      {
        img: "assets/images/5.jpg",
        name: "Leo Bartell",
        role: "Editor"
      },
      {
        img: "assets/images/6.jpg",
        name: "Clem Onojeghuo",
        role: "enior Writer"
      },
      {
        img: "assets/images/7.jpg",
        name: "Michal Legros",
        role: "Senior Writer"
      },
      {
        img: "assets/images/8.jpg",
        name: "Rosanna Ondricka",
        role: "Writer"
      },
      {
        img: "assets/images/9.jpg",
        name: "Alessandra Ortiz",
        role: "Writer"
      },
      {
        img: "assets/images/10.jpg",
        name: "Coby Gottlieb",
        role: "Writer"
      }
    ]
    this.ContactList = [
      {
        num : 1,
        subtitle : "ADDRESS",
        text : "144 N 7th St. #536 Brooklyn, NY 11249 United States"
      },
      {
        num : 2,
        subtitle : "general INQUIRIES",
        text : "hello@noiceland.co"
      },
      {
        num : 3,
        subtitle : "PRESS inquiries",
        text : "press@noiceland.co"
      },
      {
        num : 4,
        subtitle : "potential contributors",
        text : "collab@noiceland.co"
      }
    ]
  }
}
