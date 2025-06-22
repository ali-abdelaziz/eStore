import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Catnavigation } from "./catnavigation/catnavigation";
import { Sidenavigation } from "./sidenavigation/sidenavigation";

@Component({
  selector: 'app-home',
  imports: [Header, Catnavigation, Sidenavigation],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
