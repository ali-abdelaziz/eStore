import { Component } from '@angular/core';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'eStore';
}
