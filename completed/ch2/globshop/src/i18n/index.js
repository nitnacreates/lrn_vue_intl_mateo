import { createI18n } from 'vue-i18n';
import messages from './messages.js';

export default createI18n({
  locale: 'en',
  legacy: false,
  fallbackLocale: 'en',
  messages
});