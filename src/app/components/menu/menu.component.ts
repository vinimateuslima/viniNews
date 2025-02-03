import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule, MatMenuModule, MatButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: true
})
export class MenuComponent {

}
