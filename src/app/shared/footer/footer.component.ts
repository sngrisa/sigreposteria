import { Component } from '@angular/core';
import { FooterItem } from 'src/app/components/interfaces/FooterItems.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  footerItems: FooterItem[] =
    [
      {
        name: "Facebook",
        url: "https://www.facebook.com/sigsoftware",
        icon: "fa fa-facebook"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/santiago_grisa",
        icon: "fa fa-twitter"
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/sant_cba/",
        icon: "fa fa-instagram"
      },
      {
        name: "GitHub",
        url: "",
        icon: "fa fa-github"
      },
      {
        name: "LinkedId",
        url: "",
        icon: "fa fa-linkedin"
      }
    ];


}
