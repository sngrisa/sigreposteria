import { Component } from '@angular/core';
import { Url } from 'src/app/components/interfaces/Url.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  urls: Url[] = [
    {
      id: 1,
      url: "https://www.instagram.com/sant_cba/"
    },
    {
      id: 2,
      url: "https://www.facebook.com/sigsoftware"
    },
  ]

}
