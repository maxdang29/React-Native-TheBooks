import {showOverlay} from './showOverlay';

export const showQRCode = (title, message, actions) => {
  showOverlay('QRCodeOverlay', {
    title,
    message,
    actions,
  });
};
