<template>
  <b-container fluid class="px-0 open-sans">
    <Carousel :imgs="imgs" />
    <About />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          alt: 'img 1',
          src: 'https://picsum.photos/1024/512/?image=52',
          caption: 'First image',
          text: '',
        },
        {
          alt: 'img 2',
          src: 'https://picsum.photos/1024/512/?image=54',
          caption: '',
          text: '',
        },
        {
          alt: 'img 3',
          src: 'https://picsum.photos/1024/512/?image=58',
          caption: '',
          text: '',
        },
        {
          alt: 'img 4',
          src: 'https://picsum.photos/1024/512/?image=55',
          caption: '',
          text: '',
        },
        {
          alt: 'img 5',
          src: '',
          caption: 'Blank Image',
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. 
          Ut pellentesque ut lacus vel interdum.`,
        },
      ],
    }
  },
}
</script>
