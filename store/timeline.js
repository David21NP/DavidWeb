export const state = () => ({
  events: [
    {
      icon: {
        name: 'globe',
        color: 'danger',
      },
      description: 'store.timeline.description.d1',
      time: 'store.timeline.time.t1',
    },
    {
      icon: {
        name: 'globe',
        color: 'dark',
      },
      description: 'store.timeline.description.d2',
      time: 'store.timeline.time.t2',
    },
    {
      icon: {
        name: 'globe',
        color: 'dark',
      },
      description: 'store.timeline.description.d3',
      time: 'store.timeline.time.t3',
    },
    {
      icon: {
        name: 'globe',
        color: 'danger',
      },
      description: 'store.timeline.description.d4',
      time: 'store.timeline.time.t4',
    },
  ],
})

export const getters = {
  getEvents: (state) => {
    return state.events
  },
  getEvCount: (state) => {
    return state.events.lenght
  },
}

export const mutations = {}

export const actions = {}
