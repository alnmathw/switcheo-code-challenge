<template>
  <div>
    <div id="app">
      <TitleComponent/>
    </div>
    <FormComponent/>
  </div>
</template>

<script>
import FormComponent from './components/FormComponent.vue';
import TitleComponent from './components/TitleComponent.vue';


export default {
  name: 'App',
  components: {
    FormComponent,
    TitleComponent,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
