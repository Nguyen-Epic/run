import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Product } from './product';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DOANN';

}
