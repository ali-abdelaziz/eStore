import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Catnavigation } from "./catnavigation/catnavigation";

@Component({
  selector: 'app-home',
  imports: [Header, Catnavigation],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
