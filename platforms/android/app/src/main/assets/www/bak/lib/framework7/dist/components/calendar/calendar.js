import $ from 'dom7';
import ConstructorMethods from '../../utils/constructor-methods';
import Calendar from './calendar-class';

export default {
  name: 'calendar',
  static: {
    Calendar,
  },
  create() {
    const app = this;
    app.calendar = ConstructorMethods({
      defaultSelector: '.calendar',
      constructor: Calendar,
      app,
      domProp: 'f7Calendar',
    });
    app.calendar.close = function close(el = '.calendar') {
      const $el = $(el);
      if ($el.length === 0) return;
      const calendar = $el[0].f7Calendar;
      if (!calendar || (calendar && !calendar.opened)) return;
      calendar.close();
    };
  },
  params: {
    calendar: {
      // Calendar settings
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab'],
      firstDay: 1, // First day of the week, Monday
      weekendDays: [0, 6], // Sunday and Saturday
      multiple: false,
      rangePicker: false,
      dateFormat: 'yyyy-mm-dd',
      direction: 'horizontal', // or 'vertical'
      minDate: null,
      maxDate: null,
      disabled: null, // dates range of disabled days
      events: null, // dates range of days with events
      rangesClasses: null, // array with custom classes date ranges
      touchMove: true,
      animate: true,
      closeOnSelect: false,
      monthSelector: true,
      yearSelector: true,
      weekHeader: true,
      value: null,
      // Common opener settings
      containerEl: null,
      openIn: 'auto', // or 'popover' or 'sheet' or 'customModal'
      formatValue: null,
      inputEl: null,
      inputReadOnly: true,
      closeByOutsideClick: true,
      scrollToInput: true,
      header: false,
      headerPlaceholder: 'Select date',
      footer: false,
      toolbar: true,
      toolbarCloseText: 'Done',
      cssClass: null,
      routableModals: true,
      view: null,
      url: 'date/',
      // Render functions
      renderWeekHeader: null,
      renderMonths: null,
      renderMonth: null,
      renderMonthSelector: null,
      renderYearSelector: null,
      renderHeader: null,
      renderFooter: null,
      renderToolbar: null,
      renderInline: null,
      renderPopover: null,
      renderSheet: null,
      render: null,
    },
  },
};
