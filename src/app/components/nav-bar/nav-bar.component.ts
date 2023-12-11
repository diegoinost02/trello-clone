import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  faBell = faBell;
  faInfoCircle = faInfoCircle;

  isOpen: boolean = false;
  isOpenBody: boolean = false;
}
