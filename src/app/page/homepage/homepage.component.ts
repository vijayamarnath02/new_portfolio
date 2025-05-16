import { Component } from '@angular/core';
import { FooterComponent } from "../../component/footer/footer.component";
import { HeroComponent } from "../../component/hero/hero.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";

@Component({
  selector: 'app-homepage',
  imports: [NavbarComponent, FooterComponent, HeroComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
