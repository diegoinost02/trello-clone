import { Component } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavBarComponent, FontAwesomeModule, CdkAccordionModule, CommonModule],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.scss'
})
export class BoardsComponent {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1'
        },
        {
          label: 'Sub Item 1.2'
        }
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1'
        }
      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub Item 3.1'
        },
        {
          label: 'Sub Item 3.2'
        },
        {
          label: 'Sub Item 3.3'
        }
      ]
    }
  ]
}

/*
import {CdkAccordionModule} from '@angular/cdk/accordion';
imports: [CdkAccordionModule]

export class BoardsComponent {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;

  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;

}

<cdk-accordion>
      <cdk-accordion-item #accordionMenu="cdkAccordionItem">
        <button class="w-full py-1 px-2 flex justify-between items-center" type="button" (click)="accordionMenu.toggle()">
          My workspace
          <fa-icon [icon]="accordionMenu.expanded ? faAngleUp : faAngleDown"></fa-icon>
        </button>
        <div [style.display]="accordionMenu.expanded ? '' : 'none'">
          panel
          <p>contenido</p>
          <p>contenido</p>
        </div>
      </cdk-accordion-item>
    </cdk-accordion>
    */