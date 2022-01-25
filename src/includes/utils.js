import { createToast } from 'mosha-vue-toastify';

function showMsg(msg, type) {
  createToast(msg, { type: type, showIcon: true, position: 'bottom-right' });
}

export { showMsg };
