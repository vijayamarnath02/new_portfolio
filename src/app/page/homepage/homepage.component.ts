import { Component } from '@angular/core';
import { AboutComponent } from "../../component/about/about.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { HeroComponent } from "../../component/hero/hero.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { SkilsComponent } from "../../component/skils/skils.component";

@Component({
  selector: 'app-homepage',
  imports: [NavbarComponent, FooterComponent, HeroComponent, AboutComponent, SkilsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
