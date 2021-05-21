<template>
  <b-container class="text-dark py-5">
    <b-row
      v-for="(event, id) in events"
      :key="id"
      align-h="center"
      class="text-center"
    >
      <!-- First column -->
      <b-col
        class="time-content"
        md="5"
        order="6"
        :order-md="id % 2 == 0 ? 1 : 6"
      >
        {{ event.description }}
      </b-col>
      <!-- Second column -->
      <b-col class="time-line" md="1" order="2">
        <span
          :class="id % 2 == 0 ? 'time-line-icon-right' : 'time-line-icon-left'"
        ></span>
      </b-col>
      <!-- third column -->
      <b-col
        class="time-date"
        md="5"
        order="1"
        :order-md="id % 2 == 0 ? 6 : 1"
        align-self="center"
        :class="id % 2 == 0 ? 'text-left' : 'text-right'"
      >
        <span> {{ event.time }} </span>
      </b-col>
    </b-row>
    <!-- <div class="main-timeline">
      <div v-for="(event, id) in events" :key="id" class="timeline">
        <span class="timeline-icon"></span>
        <div class="timeline-content">
          <b-icon
            :icon="event.icon.name"
            :variant="event.icon.color"
            class="icon"
          />
          <p class="description">
            {{ event.description }}
          </p>
        </div>
        <div class="year">
          <span> {{ event.time }} </span>
        </div>
      </div>
    </div> -->
  </b-container>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      default: () => [
        {
          icon: {
            name: 'globe',
            color: 'danger',
          },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
            laoreet risus, mollis rhoncus felis. Nulla consectetur pretium
            lacinia. Morbi pharetra, quam non commodo pulvinar, dui diam laoreet
            purus, vitae commodo ipsum lorem nec lacus. Etiam et malesuada
            dolor. Integer consequat mauris in orci lobortis, non dictum sem
            pharetra. Donec ut lacus enim. Sed tempor interdum elementum. Donec
            consequat interdum consequat. Donec scelerisque sodales nisi, eu
            condimentum justo consequat et.`,
          time: '2015 - 2021',
        },
        {
          icon: {
            name: 'globe',
            color: 'dark',
          },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
            laoreet risus, mollis rhoncus felis. Nulla consectetur pretium
            lacinia. Morbi pharetra, quam non commodo pulvinar, dui diam laoreet
            purus, vitae commodo ipsum lorem nec lacus. Etiam et malesuada
            dolor. Integer consequat mauris in orci lobortis, non dictum sem
            pharetra. Donec ut lacus enim. Sed tempor interdum elementum. Donec
            consequat interdum consequat. Donec scelerisque sodales nisi, eu
            condimentum justo consequat et.`,
          time: '2021',
        },
        {
          icon: {
            name: 'globe',
            color: 'dark',
          },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
            laoreet risus, mollis rhoncus felis. Nulla consectetur pretium
            lacinia. Morbi pharetra, quam non commodo pulvinar, dui diam laoreet
            purus, vitae commodo ipsum lorem nec lacus. Etiam et malesuada
            dolor. Integer consequat mauris in orci lobortis, non dictum sem
            pharetra. Donec ut lacus enim. Sed tempor interdum elementum. Donec
            consequat interdum consequat. Donec scelerisque sodales nisi, eu
            condimentum justo consequat et.`,
          time: '2021',
        },
        {
          icon: {
            name: 'globe',
            color: 'danger',
          },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
            laoreet risus, mollis rhoncus felis. Nulla consectetur pretium
            lacinia. Morbi pharetra, quam non commodo pulvinar, dui diam laoreet
            purus, vitae commodo ipsum lorem nec lacus. Etiam et malesuada
            dolor. Integer consequat mauris in orci lobortis, non dictum sem
            pharetra. Donec ut lacus enim. Sed tempor interdum elementum. Donec
            consequat interdum consequat. Donec scelerisque sodales nisi, eu
            condimentum justo consequat et.`,
          time: '2015 - 2021',
        },
        {
          icon: {
            name: 'globe',
            color: 'dark',
          },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
            laoreet risus, mollis rhoncus felis. Nulla consectetur pretium
            lacinia. Morbi pharetra, quam non commodo pulvinar, dui diam laoreet
            purus, vitae commodo ipsum lorem nec lacus. Etiam et malesuada
            dolor. Integer consequat mauris in orci lobortis, non dictum sem
            pharetra. Donec ut lacus enim. Sed tempor interdum elementum. Donec
            consequat interdum consequat. Donec scelerisque sodales nisi, eu
            condimentum justo consequat et.`,
          time: '2021',
        },
        {
          icon: {
            name: 'globe',
            color: 'dark',
          },
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
            laoreet risus, mollis rhoncus felis. Nulla consectetur pretium
            lacinia. Morbi pharetra, quam non commodo pulvinar, dui diam laoreet
            purus, vitae commodo ipsum lorem nec lacus. Etiam et malesuada
            dolor. Integer consequat mauris in orci lobortis, non dictum sem
            pharetra. Donec ut lacus enim. Sed tempor interdum elementum. Donec
            consequat interdum consequat. Donec scelerisque sodales nisi, eu
            condimentum justo consequat et.`,
          time: '2021',
        },
      ],
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin time_line_icon {
  display: block;
  width: 60px;
  height: 60px;
  line-height: 105px;
  border-radius: 50%;
  background: var(--accent-color);
  border: 12px solid var(--main-color);
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}
@mixin time_line_icon_before {
  content: '';
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  margin: auto 0;
  position: absolute;
  top: 0;
  bottom: 0;
}

/** 
* *.time-content 
*/
.time-content {
  padding-bottom: 2rem;
}

/** 
* * .time-line 
*/
.time-line {
  position: relative;
}
.time-line::before,
.time-line::after {
  content: '';
  display: block;
  width: 100%;
  clear: both;
}
.time-line::before {
  content: '';
  width: 20px;
  height: 100%;
  background: var(--main-color);
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.time-line:first-child::before {
  background: red;
  height: 100%;
  border-radius: 60px 60px 0 0;
  top: 0%;
}
.time-line:last-child::before {
  height: 150%;
  border-radius: 60px 60px 0 0;
}

/** 
* *.time-line-icon 
*/
.time-line-icon-right {
  @include time_line_icon();
}
.time-line-icon-right::before {
  @include time_line_icon_before();

  border-right: 15px solid var(--main-color);
  border-left: none;
  left: -33px;
  right: auto;
}

.time-line-icon-left {
  @include time_line_icon();
}
.time-line-icon-left::before {
  @include time_line_icon_before();

  border-left: 15px solid var(--main-color);
  border-right: none;
  left: auto;
  right: -33px;
}

/** 
* *.time-date 
*/
.time-date {
  width: 50%;
  padding-left: 5px;
  padding-right: 5px;
}

.time-date span {
  display: inline-block;
  padding: 12px 25px 12px 25px;
  background: var(--second-color);
  border-radius: 20px 20px 20px 20px / 50% 50% 50% 50%;
  font-size: 40px;
  line-height: 36px;
  color: #fff;
}

@media only screen and (max-width: 767px) {
  .main-timeline .timeline {
    padding-top: 95px;
    margin-top: 150px;
    margin-bottom: 50px;
  }
}
</style>
