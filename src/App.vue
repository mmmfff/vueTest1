<template>
  <div id="app">
      <Ebook></Ebook>
  </div>
</template>

<script>
import Ebook from './components/Ebook.vue'

export default {
  name: 'app',
  components: {
    Ebook
  }
}
document.addEventListener('DOMContentLoaded',() => {
  const html=document.querySelector('html');
  let fontSize=window.innerWidth/10;
  fontSize=fontSize>40 ? 40:fontSize;
  html.style.fontSize=fontSize+'px'
})
</script>

<style>
    @import "assets/reset.scss";
#app{
    height: 100%;
    overflow: hidden;
}
</style>
