import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { Hero2Component } from './hero2/hero2.component';
import { Hero3Component } from './hero3/hero3.component';
import { Hero4Component } from './hero4/hero4.component';
import { Hero5Component } from './hero5/hero5.component';
import { Hero6Component } from './hero6/hero6.component';
import { Hero7Component } from './hero7/hero7.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, Hero2Component, Hero3Component, Hero4Component, Hero5Component, Hero6Component, Hero7Component, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CreateGolio';
}
