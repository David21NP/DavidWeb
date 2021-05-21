<template>
  <b-container class="text-dark py-5 demo">
    <div class="main-timeline">
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
    </div>
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
.demo {
  background: #fff;
}
.main-timeline {
  overflow: hidden;
  position: relative;
}
.main-timeline .timeline {
  position: relative;
}
.main-timeline .timeline::before,
.main-timeline .timeline::after {
  content: '';
  display: block;
  width: 100%;
  clear: both;
}
.main-timeline .timeline::before {
  content: '';
  width: 15px;
  height: 100%;
  background: #f4a24c;
  margin: 0 auto;
  position: absolute;
  top: -50%;
  left: 0;
  right: 0;
}
.main-timeline .timeline:first-child::before {
  height: 100%;
  border-radius: 10px 10px 0 0;
  top: 0;
}
.main-timeline .timeline:last-child::before {
  height: 150%;
  border-radius: 0 0 10px 10px;
}
.main-timeline .timeline-icon {
  display: block;
  width: 60px;
  height: 60px;
  line-height: 105px;
  border-radius: 50%;
  background: #fff;
  border: 12px solid #f4a24c;
  margin: auto;
  font-size: 70px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}
.main-timeline .timeline-icon::before {
  content: '';
  width: 0;
  height: 0;
  border-right: 15px solid #f4a24c;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  margin: auto 0;
  position: absolute;
  top: 0;
  left: -33px;
  bottom: 0;
}
.main-timeline .timeline-content {
  width: 50%;
  padding-right: 100px;
}
.main-timeline .icon {
  float: left;
  margin-right: 15px;
  font-size: 70px;
  color: #f4a24c;
}
.main-timeline .description {
  font-size: 16px;
  line-height: 24px;
  margin: 0;
}
.main-timeline .year {
  width: 50%;
  padding-left: 5px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.main-timeline .year span {
  display: inline-block;
  padding: 12px 25px 12px 25px;
  background: #f4a24c;
  border-radius: 0 50px 50px 0;
  font-size: 40px;
  font-weight: bold;
  line-height: 36px;
  color: #fff;
}
.main-timeline .timeline:nth-child(2n) .timeline-icon::before {
  border-right: none;
  border-left: 15px solid #f26f77;
  left: auto;
  right: -33px;
}
.main-timeline .timeline:nth-child(2n) .timeline-content {
  float: right;
  padding: 0 0 0 100px;
}
.main-timeline .timeline:nth-child(2n) .description {
  padding-left: 20px;
}
.main-timeline .timeline:nth-child(2n) .year {
  padding: 0 5px 0 0;
  text-align: right;
  right: auto;
  left: 0;
}
.main-timeline .timeline:nth-child(2n) .year span {
  border-radius: 50px 0 0 50px;
}
.main-timeline .timeline:nth-child(2n) .timeline-icon {
  border-color: #f26f77;
}
.main-timeline .timeline:nth-child(2n) .icon {
  color: #f26f77;
}
.main-timeline .timeline:nth-child(2n)::before,
.main-timeline .timeline:nth-child(2n) .year span {
  background: #f26f77;
}
.main-timeline .timeline:nth-child(3n) .timeline-icon {
  border-color: #13a3b5;
}
.main-timeline .timeline:nth-child(3n) .timeline-icon::before {
  border-right-color: #13a3b5;
}
.main-timeline .timeline:nth-child(3n) .icon {
  color: #13a3b5;
}
.main-timeline .timeline:nth-child(3n)::before,
.main-timeline .timeline:nth-child(3n) .year span {
  background: #13a3b5;
}
.main-timeline .timeline:nth-child(4n) .timeline-icon {
  border-color: #a6d050;
}
.main-timeline .timeline:nth-child(4n) .timeline-icon::before {
  border-left-color: #a6d050;
}
.main-timeline .timeline:nth-child(4n) .icon {
  color: #a6d050;
}
.main-timeline .timeline:nth-child(4n)::before,
.main-timeline .timeline:nth-child(4n) .year span {
  background: #a6d050;
}
@media only screen and (max-width: 767px) {
  .main-timeline .timeline {
    padding-top: 95px;
    margin-top: 150px;
    margin-bottom: 50px;
  }
  .main-timeline .timeline:first-child {
    margin-top: 135px;
  }
  .main-timeline .timeline:last-child {
    margin-bottom: 0;
  }
  .main-timeline .timeline::before,
  .main-timeline .timeline:first-child::before,
  .main-timeline .timeline:last-child::before {
    width: 100%;
    height: 15px;
    border-radius: 10px;
    margin: 0;
    top: 0;
  }
  .main-timeline .timeline-icon {
    margin: 0 auto;
    top: -65px;
  }
  .main-timeline .timeline-icon::before,
  .main-timeline .timeline:nth-child(2n) .timeline-icon::before,
  .main-timeline .timeline:nth-child(3n) .timeline-icon::before {
    border: 10px solid transparent;
    border-top: 15px solid #f4a24c;
    margin: 0 auto;
    position: absolute;
    top: auto;
    left: 0;
    bottom: -43px;
    right: 0;
  }
  .main-timeline .timeline:nth-child(2n) .timeline-icon::before {
    border-top-color: #f26f77;
  }
  .main-timeline .timeline:nth-child(3n) .timeline-icon::before {
    border-top-color: #149cad;
  }
  .main-timeline .timeline:nth-child(4n) .timeline-icon::before {
    border-top-color: #a6d050;
  }
  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    width: 100%;
    padding: 0;
    float: none;
  }
  .main-timeline .timeline:nth-child(2n) .description {
    padding: 0;
  }
  .main-timeline .year,
  .main-timeline .timeline:nth-child(2n) .year {
    width: 100%;
    padding: 0;
    text-align: center;
    position: absolute;
    top: -135px;
    right: 0;
    transform: translateY(0);
  }
  .main-timeline .year span,
  .main-timeline .timeline:nth-child(2n) .year span {
    border-radius: 50px;
  }
}
</style>
