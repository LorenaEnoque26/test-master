<template>
  <div class="app">
    <div class="app__components">
      <div class="app__components__events">
        <b-card v-for="event in events" :key="event.title">
          <div class="app__components__events__img">
            <img
              v-if="event.image === 'avengers'"
              src="./assets/img/avengers.jpg"
            />
            <img
              v-if="event.image === 'oktoberfest'"
              src="./assets/img/oktoberfest.jpg"
            />
            <img
              v-if="event.image === 'rock'"
              src="./assets/img/rock-im-park.jpg"
            />
            <img v-if="event.image === 'pcim'" src="./assets/img/pcim.jpg" />
          </div>

          <template v-slot:header>
            <b-row>
              <b-col>
                <h4>{{ event.title }}</h4>
              </b-col>
              <b-col>
                <P> {{ event.start }} to {{ event.end }} </P>
              </b-col>
            </b-row>
          </template>

          <b-card-body>
            <b-card-text> {{ event.description }} </b-card-text>
          </b-card-body>

          <b-list-group flush>
            <b-list-group-item>
              Recurrence: {{ event.recurrence }}
            </b-list-group-item>

            <b-list-group-item>
              Category: {{ event.category }}
            </b-list-group-item>

            <b-list-group-item> Costs: {{ event.costs }} </b-list-group-item>
          </b-list-group>

          <hr />

          <b-card-text>
            <b>{{ event.venue.name }}:</b>
            {{ event.venue.street }} - {{ event.venue.city }} -
            {{ event.venue.zip }}
          </b-card-text>

          <template v-slot:footer>
            Read more:
            <a :href="event.link" target="_blank">{{ event.link }}</a>
          </template>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          title: "Rock im Park",
          description:
            "Rock im Park is a music festival held annually in May or June at the Volkspark Dutzendteich in Nuremberg and a parallel event to Rock am Ring with an almost identical line-up.",
          image: "rock",
          start: 1559890800,
          end: 1560114000,
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
          start: 1569016800,
          end: 1570399199,
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
          start: 1556143140,
          end: 1556154000,
          recurrence: "daily",
          costs: "16,00€",
          link: "https://www.cinecitta.de/",
          venue: {
            name: "CINECITTA' Multiplexkino",
            zip: "90403",
            city: "Nürnberg",
            street: "Gewerbemuseumspl. 3"
          },
          category: "Movie"
        },
        {
          title: "PCIM EUROPE",
          description:
            "The PCIM Europe is the world's leading exhibition and conference for power electronics, intelligent motion, renewable energy, and energy management.",
          image: "pcim",
          start: 1557230400,
          end: 1557403200,
          recurrence: "none",
          costs: "24,00€",
          link: "https://pcim.mesago.com/events/en.html",
          venue: {
            name: "Nuremberg Exhibition Centre",
            zip: "90471",
            city: "Nürnberg",
            street: "Messezentrum 1"
          },
          category: "Fair"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.app {
  min-height: 100%;
  min-height: 100vh;
  .app__components {
    width: 60%;
    margin: 0 auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
    .app__components__events {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      align-items: center;
      grid-row-gap: 4rem;
      grid-column-gap: 4rem;
      .app__components__events__img {
        max-width: 35rem;
        height: 20rem;
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}

@media (max-width: 50rem) {
  .app > .app__components > .app__components__events {
    grid-template-columns: repeat(1, 100%);
  }
}

@media (max-width: 86rem) {
  .app > .app__components {
    width: 90%;
  }
}

@media (max-width: 50rem) {
  .app > .app__components {
    width: 98%;
  }
}
</style>
