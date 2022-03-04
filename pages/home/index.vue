<template>
    <div>
      <div id="fondo" class="cabecera">
      <img class="cabecera_img" src="~/static/rick and morty.png" style="width:700px">
      <v-text-field
      v-model="select"
      @input="consulta"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      hint="Buscar Personaje..."
      solo-inverted
    ></v-text-field>
      </div>

  <div class="lista">

<v-bottom-navigation  v-model="value"
      color="primary"
      horizontal
     >
        <v-btn>
          <span>all</span>
        </v-btn>
        <v-btn value="unknown">
          <span>Unknown</span>
        </v-btn>
        <v-btn value="male">
          <span>Male</span>
        </v-btn>
        <v-btn value="female">
          <span>Female</span>
        </v-btn>
        <v-btn value="genderless">
          <span>Genderless</span>
        </v-btn>
      </v-bottom-navigation>
    <list-characters/>

  </div>
  </div>

</template>
<script>
import ListCharacters from '~/components/ListCharacters.vue';
import {mapState, mapActions,mapMutations} from 'vuex';


export default {
    data () {
      return {
        value: 'recent',
        loading: false,
        items: [],
        search: '',
        select: 'Buscar Personaje...',
        states: []
        }
    },
  components:{
    ListCharacters
  },
  methods:{
    ...mapActions('characters', ['getFilter']),
      consulta(parametro,variable){
          //console.log(parametro,this.variable)
          console.log(this.value)
          //this.getFilter(parametro,variable)

    }
  }

  }
</script>

<style>
.cabecera {
  background-color: black;
  display: grid;
  justify-content: center;
  align-items: center;

}
#fondo{
  width: 100%;
  height: 400px;
  background-image: url("../../static/portal-morty-smith-rick.png");
  background-position: center;
  background-size: 70rem;
}

</style>
