<template>
  <div class="app">
    <section class="app__components">
      <div class="app__components__events">
        <!-- bootstrap data card-->
        <b-card
          no-body
          bg-variant="transparent"
          v-for="event in events"
          :key="event.title"
          class="app__components__events__card "
        >
          <!-- card images -->
          <div class="app__components__events__card__img">
            <a :href="event.link" target="_blank">
              <img
                class="card-img card-img-top img-fluid"
                v-b-tooltip.hover
                title="Click for read more"
                v-if="event.image === 'avengers'"
                src="./assets/img/avengers.jpg"
              />
              <img
                class="card-img card-img-top img-fluid"
                v-b-tooltip.hover
                title="Click for read more"
                v-if="event.image === 'oktoberfest'"
                src="./assets/img/oktoberfest.jpg"
              />
              <img
                class="card-img card-img-top img-fluid"
                v-b-tooltip.hover
                title="Click for read more"
                v-if="event.image === 'rock'"
                src="./assets/img/rock-im-park.jpg"
              />
              <img
                class="card-img card-img-top img-fluid"
                v-b-tooltip.hover
                title="Click for read more"
                v-if="event.image === 'pcim'"
                src="./assets/img/pcim.jpg"
              />
            </a>
          </div>
          <!-- card images - end -->

          <!-- card description -->
          <b-card-body class="app__components__events__card__body">
            <b-card-text class="app__components__events__card__body__text">
              <h2>
                <b>{{ event.title }}</b>
              </h2>
              <p>14/05 at 22:00 - 22/05 at 03:00</p>
              <i>{{ event.description }}</i>
            </b-card-text>
          </b-card-body>
          <!-- card description - end -->

          <hr />

          <!-- card list of recurrence, category and costs -->
          <b-row class="text-center app__components__events__card__list">
            <b-col>
              Recurrence:
              <span>{{ event.recurrence }}</span>
            </b-col>
            <b-col>
              Category:
              <span>{{ event.category }}</span>
            </b-col>
            <b-col>
              Costs:
              <span>{{ event.costs }}</span>
            </b-col>
          </b-row>
          <!-- card list of recurrence, category and costs - end -->

          <!--  card footer with venue -->
          <template v-slot:footer>
            <p class="app__components__events__card__footer">
              <b-icon icon="geo-alt"></b-icon>
              <b>{{ event.venue.name }}</b>
            </p>
            <i>
              {{ event.venue.street }} - {{ event.venue.city }} -
              {{ event.venue.zip }}
            </i>
          </template>
          <!--  card footer with venue - end -->
        </b-card>
        <!-- bootstrap data card - end -->
      </div>
    </section>
  </div>
</template>

<script src="./events.js"></script>
<style lang="scss" src="./events.scss"></style>
