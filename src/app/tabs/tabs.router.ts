import { Routes } from '@angular/router';
import { TabsComponent } from './tabs.component'

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'calendar',
        loadComponent: () =>
          import('../calendar/calendar.page').then((m) => m.CalendarPage),
      },
      {
        path: 'events',
        loadComponent: () =>
          import('../events/events.page').then((m) => m.EventsPage),
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('../analytics/analytics.page').then((m) => m.AnalyticsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/calendar',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/calendar',
    pathMatch: 'full',
  },
];
