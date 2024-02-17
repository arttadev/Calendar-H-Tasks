import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useStyles from "./styles";
import { EventModal } from "components/EventModal";
import { INFO_MESSAGE } from "constants/textMessages";

interface Event {
  date: Date;
  title: string;
}

const CalendarComponent = () => {
  const classes = useStyles();
  const [events, setEvents] = useState<Event[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleSaveEvent = (date: Date, title: string) => {
    const newEvent: Event = { date, title };
    setEvents([...events, newEvent]);
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const dayEvents = events.filter(
        (event) => event.date.toDateString() === date.toDateString()
      );
      return (
        <div>
          {dayEvents.map((event, index) => (
            <div key={index} className={classes.eventTitle}>
              {event.title}
            </div>
          ))}
        </div>
      );
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={classes.container}>
      <div>
        <h1>Welcome to Calendar H</h1>
        <span>{INFO_MESSAGE}</span>
      </div>
      <Calendar
        className={classes.calendarContainer}
        onClickDay={handleDayClick}
        tileContent={tileContent}
      />
      <EventModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveEvent}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default CalendarComponent;
