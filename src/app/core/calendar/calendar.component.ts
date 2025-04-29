import { Component } from '@angular/core';

import { routes } from 'src/app/shared/routes/routes';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { DataService } from 'src/app/shared/data/data.service';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    standalone: false
})
export class CalendarComponent {
  public routes = routes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  events: any[] = [];

  constructor(private data: DataService) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.data.getEvents().subscribe((events: any) => {
      this.events = events;
      this.options = { ...this.options, ...{ events: events } };
    });
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialDate: new Date(),
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      initialView: 'dayGridMonth',
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      events: [
        { title: 'Meeting', start: new Date() }
      ]
    };
  }
}
