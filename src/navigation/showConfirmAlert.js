import {showOverlay} from './showOverlay';

export const showConfirmAlert = (title, message, actions) => {
  showOverlay('ConfirmAlert', {
    title,
    message,
    actions,
  });
};
