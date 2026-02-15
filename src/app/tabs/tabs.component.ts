import { Component, OnInit, signal } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, calendarNumberOutline, starOutline, analytics } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon],
})
export class TabsComponent  implements OnInit {

  calendar = signal("calendar");
  calendar_icon = "calendar-number-outline";
  constructor() {
    addIcons({ home, calendarNumberOutline, starOutline, analytics });
  }

  ngOnInit() {}

}
