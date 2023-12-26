import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
  }

  onContactButtonClick(): void {
    window.location.href = `mailto:${'fluffybag.italy@gmail.com?subject=Fluffy Bag Contattaci!'}`;
  }

  toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            this.renderer.removeClass(document.body, 'overflow-hidden');
        } else {
            this.renderer.addClass(document.body, 'overflow-hidden');
        }
    }
  }
}
