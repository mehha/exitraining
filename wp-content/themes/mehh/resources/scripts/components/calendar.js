export function handleCalendar() {
  const calendarPopups = new VanillaCalendar('#calendar-day-popups', {
  	settings: {
  		selected: {
  			month: 6,
  			year: 2022,
  		},
  	},
  	popups: {
  		'2022-06-28': {
  			modifier: 'bg-red',
  			html: 'Meeting at 9:00 PM',
  		},
  		'2022-07-13': {
  			modifier: 'bg-red',
  			html: 'Meeting at 6:00 PM',
  		},
  		'2022-07-17': {
  			modifier: 'bg-orange',
  			html: `<div>
  				<u><b>12:00 PM</b></u>
  				<p style="margin: 5px 0 0;">Airplane in Las Vegas</p>
  			</div>`,
  		},
  	},
  });
  calendarPopups.init();
}
