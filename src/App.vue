<template>
  <div id="app">
       <div class="ebook">
        <router-view/>
        <div class="menu-wrapper">
            <router-link to="/" tag="div" class="icon-wrapper">Home</router-link>
            <router-link to="/scss" tag="div" class="icon-wrapper">Scss</router-link>
            <div class="icon-wrapper">linkc</div>
            <div class="icon-wrapper">linkd</div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'App'
}
document.addEventListener('DOMContentLoaded',() => {
  const html=document.querySelector('html');
  let fontSize=window.innerWidth/10;
  fontSize=fontSize>40 ? 40:fontSize;
  html.style.fontSize=fontSize+'px'
})
</script>

<style lang="scss">
  @import './assets/reset.scss';
  @import './assets/global.scss';
#app{
    height: 100%;
    overflow: hidden;
    position: relative
}
</style>
