<template>
  <div id="app">
    <div class="app__components">
      <!-- filters events by date -->
      <section class="app__components__dates">
        <b-input-group>
          <!-- bootstrap calendar -->
          <b-form-datepicker
            close-button
            locale="en"
            placeholder="Choose a date"
            id="datepicker"
            :min="min"
            v-model="filterDate"
            class="app__components__dates__datepicker"
          >
          </b-form-datepicker>
          <!-- bootstrap calendar - end -->

          <!-- button reset date -->
          <template v-slot:append v-if="filterDate !== null">
            <b-button @click="filterDate = null">
              <b-icon icon="x"></b-icon>
            </b-button>
          </template>
          <!-- button reset date - end -->
        </b-input-group>
      </section>
      <!-- filters events by date - end-->

      <section class="app__components__events">
        <!-- bootstrap data card -->
        <b-card
          no-body
          bg-variant="transparent"
          v-for="event in filteredData"
          :key="event.title"
          class="app__components__events__card "
        >
          <!-- render images (when you click changes it will go to the event page) -->
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
          <!-- render images - end -->

          <!-- renders title, description and date -->
          <b-card-body class="app__components__events__card__body">
            <b-card-text class="app__components__events__card__body__text">
              <h2>
                <b>{{ event.title }}</b>
              </h2>
              <p>
                {{ new Date(event.start).toUTCString().slice(0, 17) }} -
                {{ new Date(event.end).toUTCString().slice(0, 17) }}
              </p>
              <i>{{ event.description }}</i>
            </b-card-text>
          </b-card-body>
          <!-- renders title, description and date - end -->

          <hr />

          <!-- list of recurrence, category and costs of events -->
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
          <!--list of recurrence, category and costs of events - end -->

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
      </section>
    </div>
  </div>
</template>

<script src="./events.js"></script>
<style lang="scss" src="./events.scss"></style>
