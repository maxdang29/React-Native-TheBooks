import {showOverlay} from './showOverlay';

export const showCommentForm = (title, message, actions) => {
  showOverlay('modalWriteReview', {
    title,
    message,
    actions,
  });
}; 
