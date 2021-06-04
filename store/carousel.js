export const state = () => ({
  imgs: [
    {
      alt: 'store.carousel.alt.alt1',
      src: 'https://picsum.photos/1024/512/?image=52',
      caption: 'store.carousel.cap.imgcap1',
      text: 'store.carousel.text.text1',
    },
    {
      alt: 'store.carousel.alt.alt2',
      src: 'https://picsum.photos/1024/512/?image=54',
      caption: 'store.carousel.cap.imgcap2',
      text: 'store.carousel.text.text2',
    },
    {
      alt: 'store.carousel.alt.alt3',
      src: 'https://picsum.photos/1024/512/?image=58',
      caption: 'store.carousel.cap.imgcap3',
      text: 'store.carousel.text.text3',
    },
    {
      alt: 'store.carousel.alt.alt4',
      src: 'https://picsum.photos/1024/512/?image=55',
      caption: 'store.carousel.cap.imgcap4',
      text: 'store.carousel.text.text4',
    },
    {
      alt: 'store.carousel.alt.alt5',
      src: '',
      caption: 'store.carousel.cap.imgcap5',
      text: 'store.carousel.text.text5',
    },
  ],
})

export const getters = {
  getImgs: (state) => {
    return state.imgs
  },
  getImgCount: (state) => {
    return state.imgs.lenght
  },
}

export const mutations = {}

export const actions = {}
