import model from '../sample-data.json'

export default {
  data() {
    return {
      /**
       * Datepicker v-model value.
       */
      filterDate: null,
      /**
       * Disable dates prior to today's date using the min-date of the datepicker.
       */
      min: new Date()
    };
  },
  computed: {
    /**
     * Returns the json "events" object with a filter that prevents events from previous dates.
     */
    events() {
      var today = Date.now()
      return model.events.filter(e => e.start >= today)
    },
    /**
     *  Filter that returns events between their respective start and end dates through the boostrap datepicker.
     */
    filteredData() {
      var date = this.filterDate
      return this.events.filter(event => {
        if (date === null) {
          return this.events
        } else {
          return (
            date >= new Date(event.start).toISOString().slice(0, 10) &&
            date <= new Date(event.end).toISOString().slice(0, 10)
          )
        }
      })
    }
  }
}
