import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
export function handleCalendar() {

  const calendarEl = document.getElementById('calendar')

  if (!calendarEl) {
    return
  }

  const handleData = (data) => {
    const popupsData = {}

    data.map((single, index) => {
      let html = '<a class="mb-2 d-inline-block" href="'+single?.link+'">'+single?.title?.rendered+'</a>'
      if (single?.acf?.begin_date in popupsData) {
        html += '<a class="mb-2 d-inline-block" href="'+data[index-1]?.link+'">'+data[index-1]?.title?.rendered+'</a>'
      }

      popupsData[single?.acf?.begin_date] = {
        html: html,
        modifier: 'bg-green-light',
      }

      if (single?.acf?.end_date) {
        popupsData[single?.acf?.end_date] = {
          html: html,
          modifier: 'bg-green-light',
        }
      }
    })

    return popupsData
  }

  try {
    fetch(baseUrl+'/wp-json/wp/v2/trainings').then(res => {
      return res.json();
    }).then(data => {
      handleCalendarPopups(handleData(data))
    });

  } catch (e) {
    console.log('error', e)
  }

  const handleCalendarPopups = (popupsData) => {
    const calendarPopups = new VanillaCalendar(calendarEl, {
    	settings: {
        lang: 'et',
    	},
    	popups: popupsData,
    });
    calendarPopups.init();
  }
}
