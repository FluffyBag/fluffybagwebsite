import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onContactButtonClick(): void {
    window.location.href = `mailto:${'fluffybag.italy@gmail.com?subject=Fluffy Bag Contattaci!'}`;
  }
}
