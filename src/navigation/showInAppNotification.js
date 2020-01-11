import {showOverlay} from './showOverlay';
import {Colors} from '../../src/themes';

export const showInAppNotification = (
  title,
  content,
  type = 'info',
  isVibrate = Boolean(true),
) => {
  showOverlay(
    'InAppNotification',
    {
      title,
      content,
      type,
      isVibrate,
      onDisplay: id => {
        componentId = id;
      },
    },
    true,
    {
      layout: {
        backgroundColor: Colors.transparent,
        componentBackgroundColor: Colors.transparent,
      },
    },
  );
};
