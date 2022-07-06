// import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const events = [
  {
    id: 1,
    title: 'event 1',
    start: '2022-06-13T10:15:00',
    end: '2022-06-13T12:00:00',
  },
  {
    id: 2,
    title: 'event 2',
    start: '2022-06-13T13:00:00',
    end: '2022-06-13T18:15:00',
  },
  { id: 3, title: 'event 3', start: '2022-06-13', end: '2021-06-13' },
  {
    id: 4,
    title: 'event 4',
    start: '2022-06-13T14:00:00',
    end: '2022-06-13T18:00:00',
  },
];

function FullCalendarApp() {
  return (
    <div className="App">
      <div style={{ height: '1600px' }}>
        <FullCalendar
          // height='100%'
          plugins={[timeGridPlugin, interactionPlugin]}
          initialEvents
          selectable
          editable
          headerToolbar={{
            left: '',
            right: ''
          }}
          events={events}
          eventColor="#b3e1f7"
          nowIndicator
          dateClick={(e) => console.log(e.dateStr)}
          eventClick={(e) => console.log(e.event.id)}
        />
      </div>
    </div>
  );
}

export default FullCalendarApp;