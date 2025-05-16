import { Component } from '@angular/core';
import { FooterComponent } from "../../component/footer/footer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";

@Component({
  selector: 'app-homepage',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
