import { Component, NgModule } from '@angular/core';
import { cards } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {

  cards = cards;
}
