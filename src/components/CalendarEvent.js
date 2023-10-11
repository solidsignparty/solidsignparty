import { useCallback } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import EventSharp from '@mui/icons-material/EventSharp';
import 'add-to-calendar-button';
import { atcb_action } from "add-to-calendar-button";
import { withOS } from '../hooks';

const CalendarEvent = (props) => {
  const osName = withOS();
  const options = (osName == 'MacOS' || osName == 'iOS') ? ['Apple'] : ['Google'];
  const config = {
    ...props,
    listStyle: "dropdown-static",
    hideBackground: true,
    hideCheckmark: true,
    hideTextLabelButton: true,
    buttonsList: true,
    label: "Добавить в календарь",
    trigger: "click",
    buttonStyle: "3d",
    identifier: props.startDate,
    options,
  };
  const onClick = useCallback(
    () => {atcb_action(config)},
    [config],
  );
  return (
    <Tooltip title="Добавить в календарь">
      <Button
        color="button"
        variant="contained"
        onClick={onClick}
        startIcon={<EventSharp />}
      >
        Не забыть
      </Button>
    </Tooltip>
  );
};

export default CalendarEvent;
