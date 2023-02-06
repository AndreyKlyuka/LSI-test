import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  theme: boolean = true

  toggleTheme() {
    document.body.classList.toggle('dark');
    this.theme = !this.theme

  }

}
