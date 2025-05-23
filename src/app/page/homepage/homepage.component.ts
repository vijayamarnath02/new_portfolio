import { Component } from '@angular/core';
import { ChatboatComponent } from "../../chatboat/chatboat.component";
import { AboutComponent } from "../../component/about/about.component";
import { ContactComponent } from '../../component/contact/contact.component';
import { FooterComponent } from "../../component/footer/footer.component";
import { HeroComponent } from "../../component/hero/hero.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { ProjectComponent } from '../../component/project/project.component';
import { SkilsComponent } from "../../component/skils/skils.component";

@Component({
  selector: 'app-homepage',
  imports: [NavbarComponent, FooterComponent, HeroComponent, AboutComponent, SkilsComponent, ProjectComponent, ContactComponent, ChatboatComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
