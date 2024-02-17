import { useState } from "react";
import useStyles from "./styles";

interface IEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (date: Date, title: string) => void;
  selectedDate: Date | null;
}

const EventModal = ({
  isOpen,
  onClose,
  onSave,
  selectedDate,
}: IEventModalProps) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");

  const handleSave = () => {
    if (selectedDate) {
      onSave(selectedDate, title);
      setTitle("");
      onClose();
    } else {
      console.error("No date selected");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={classes.overlay}>
      <div className={classes.overlayContent}>
        <h2>Add Event</h2>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSave}>Save Event</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EventModal;
