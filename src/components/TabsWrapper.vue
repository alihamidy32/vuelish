<template>
  <div class="tabs">
    <ul class="tabs_header">
      <li 
      v-for="title in tabTitles" :key="title"
      @click="selectedTitle = title"
      :class="{selected : title == selectedTitle}">
        {{title}}
      </li>
    </ul>
    <slot/>
  </div>
</template>

<script>
import { ref , provide} from 'vue'
export default {
  setup(props , { slots }){
    const tabTitles =ref(slots.default().map((tab) => tab.props.title))
    const selectedTitle = ref(tabTitles.value[0])
provide('selectedTitle' , selectedTitle)

    return{
      selectedTitle,
      tabTitles
    }
  }
  
}
</script>

<style scoped>
.tabs{
  width: 45rem;
  height: 35rem;
  border: 2px solid gainsboro;
  margin-top: 1.5rem;
}
.tabs_header{
  width: 100%;
  background-color: orangered;
  height: 3rem;
  display: flex;
  align-items: flex-start;
  padding: 0;
}
.tabs_header li{
  list-style: none;
  text-align: center;
  line-height: 3rem;
  font-family: 'yekan';
  font-size: 1.3rem;
  color: white;
  cursor: pointer;
  width: 50%;
  height: 3rem;
}
.tabs_header li.selected{
  background-color: yellowgreen;
}


@media screen and (max-width:50.6875rem) {
.tabs{
  width: 100%;
  height: 35rem;
  border: 2px solid gainsboro;
  margin-top: 1rem;
}
}

@media screen and (max-width:35.25rem) {
  .tabs_header li{
  list-style: none;
  text-align: center;
  line-height: 3rem;
  font-family: 'yekan';
  font-size: smaller;
  color: white;
  cursor: pointer;
  width: 50%;
  height: 3rem;
}
}
</style>