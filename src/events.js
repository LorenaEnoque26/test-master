export default {
  data() {
    return {
      //this is a datepicker v-model value
      filterDate: null,
      //this disables dates prior to today's date using the min-date of the datepicker
      min: new Date(),
      //this is a json object of events
      events: [
        {
          title: "Rock im Park",
          description:
            "Rock im Park is a music festival held annually in May or June at the Volkspark Dutzendteich in Nuremberg and a parallel event to Rock am Ring with an almost identical line-up.",
          image: "rock",
          start: 1591833600000,
          end: 1592006400000,
          recurrence: "yearly",
          costs: "239,00€",
          link: "https://www.rock-im-park.com/",
          venue: {
            name: "Volkspark Dutzendteich",
            zip: "90471",
            city: "Nürnberg",
            street: "Münchener Str. 283"
          },
          category: "Festival"
        },
        {
          title: "Oktoberfest",
          description:
            "The Oktoberfest in Munich is the biggest folk festival in the world. It takes place since 1810 on the Theresienwiese in the Bavarian capital Munich.",
          image: "oktoberfest",
          start: 1600387200000,
          end: 1601683200000,
          recurrence: "monthly",
          costs: "0,00€",
          link: "https://www.oktoberfest.de/",
          venue: {
            name: "Theresienwiese",
            zip: "80336",
            city: "München",
            street: "Theresienwiese, Bavariaring"
          },
          category: "Carnival"
        },
        {
          title: "Avengers - Endgame",
          description:
            "Half of all life in the universe has been wiped out and there seems to be only one possible future. Do the Avengers and their allied superheroes have what they need to lift the crushing power of the Infinity Stones?",
          image: "avengers",
          start: 1593561600000,
          end: 1596153600000,
          recurrence: "daily",
          costs: "16,00€",
          link: "https://www.cinecitta.de/",
          venue: {
            name: "CINECITTA' Multiplexkino",
            zip: "90403",
            city: "Nürnberg",
            street: "Gewerbemuseumsplatz. 3"
          },
          category: "Movie"
        },
        {
          title: "PCIM EUROPE",
          description:
            "The PCIM Europe is the world's leading exhibition and conference for power electronics, intelligent motion, renewable energy, and energy management.",
          image: "pcim",
          start: 1594080000000,
          end: 1594166400000,
          recurrence: "none",
          costs: "24,00€",
          link: "https://pcim.mesago.com/events/en.html",
          venue: {
            name: "Nuremberg Exhibition Centre",
            zip: "90471",
            city: "Nürnberg",
            street: "Messezentrum. 1"
          },
          category: "Fair"
        }
      ]
    };
  },
  computed: {
    //this is a filter that returns events between their respective start and end dates through the boostrap datepicker
    filteredData() {
      var date = this.filterDate;
      return this.events.filter(event => {
        if (date === null) {
          return this.events;
        } else {
          return (
            date >= new Date(event.start).toISOString().slice(0, 10) &&
            date <= new Date(event.end).toISOString().slice(0, 10)
          );
        }
      });
    }
  }
};
