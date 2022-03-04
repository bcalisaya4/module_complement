<template>
    <div>
      <div class="cabecera">

      <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="What state are you from?"
      solo-inverted
    ></v-autocomplete>
      </div>

  <div class="lista">

    <list-characters/>

  </div>

  </div>

</template>
<script>
import ListCharacters from '~/components/ListCharacters.vue';

export default {
    data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
        states: []
        }
    },
  components:{
    ListCharacters
  }

  }
</script>

<style>
.cabecera {
  height: 150px;
  width: 100%;
  background-image: url("../../static/portal-morty-smith-rick.png");
  background-repeat: no-repeat;
  background-size: 10rem;
}

</style>
