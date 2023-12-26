import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {
  }

  onContactButtonClick(): void {
    window.location.href = `mailto:${'fluffybag.italy@gmail.com?subject=Fluffy Bag Contattaci!'}`;
    this.toggleMobileMenu();
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

  navigateAndCloseMenu() {
    this.router.navigateByUrl('/chiSiamo');
    this.toggleMobileMenu();  // Assuming you have this method to toggle the mobile menu
}
}
