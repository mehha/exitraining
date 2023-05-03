import Tooltip from 'bootstrap/js/dist/tooltip';
import dayGridPlugin from '@fullcalendar/daygrid'
import * as FullCalendar from "@fullcalendar/core";
import etLocale from '@fullcalendar/core/locales/et';

export function handleFullCalendar() {
  const calendarElFull = document.getElementById('full-calendar')

  if (!calendarElFull) {
    return
  }

  const handleData = (data) => {
    const modifiedData = []

    data.map((single, index) => {
      modifiedData.push({
        title: single.title.rendered,
        description: single.title.rendered,
        start: single.acf.begin_date,
        end: single.acf.end_date+'T12:00:00',
        url: single.link
      })
    })

    return modifiedData
  }

  try {
    fetch(baseUrl+'/wp-json/wp/v2/trainings').then(res => {
      return res.json();
    }).then(data => {
      // console.log('data', data)
      handleData(data)
      initCalendar(handleData(data))
    });

  } catch (e) {
    console.log('error', e)
  }

  const initCalendar = (events) => {
    let calendar = new FullCalendar.Calendar(calendarElFull, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      events: events,
      locale: etLocale,
      displayEventTime: false,
      contentHeight: 600,
      headerToolbar: {
        start: 'title',
        center: 'today prev,next',
        end: ''
      },
      eventDidMount: function(info) {
        let tooltip = new Tooltip(info.el, {
          title: info.event.extendedProps.description,
          placement: 'top',
          trigger: 'hover',
          container: 'body'
        });
      },
      viewDidMount: function () {
        handleMonthNav()
      }
    });

    const handleMonthNav = () => {
      const fcToolbarEl = document.querySelectorAll('.fc-toolbar-chunk')[2];
      const newDivEl = document.createElement('div');
      newDivEl.className = "month-nav"
      fcToolbarEl.appendChild(newDivEl)

      for (let i = 0; i < 12; i++) {
        const monthDate = new Date(calendar.getCurrentData().currentDate.getFullYear(), calendar.getCurrentData().currentDate.getMonth() + i, 1)
        const monthNameWithYear = calendar.formatDate(monthDate, { month: 'long', year: 'numeric' });
        let customButton = document.createElement('button');
        customButton.textContent = monthNameWithYear;
        customButton.className = "border-0 rounded";
        customButton.addEventListener('click', function() {
          calendar.gotoDate(monthDate);
        });
        newDivEl.appendChild(customButton)
      }
    }

    calendar.render();

  }
}
