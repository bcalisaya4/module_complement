<template>
<div>
<!--v-bottom-navigation
      :value="value"
      color="primary"
      horizontal
     >
        <v-btn>
          <span>all</span>
        </v-btn>
        <v-btn>
          <span>Unknown</span>
        </v-btn>
        <v-btn>
          <span>Female</span>
        </v-btn>
        <v-btn>
          <span>Genderless</span>
        </v-btn>
      </!--v-bottom-navigation-->


  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="n in 5"
          :key="n"
          cols="12"
          md="4"
        >
          <v-item v-slot="{toggle }">
            <v-card
              height="200"
              @click="toggle"
            >
            <div class="imagen-card">
              <v-img
                class="white--text"
                width="50%"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                X
              </v-img>
            </div>
            <div class="info-card">

            </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>



  <!--v-card
  elevation="2"
  outlined>
  <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          OVERLINE
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>
  </-v-card-->
  <h2>!!!!!!</h2>
</div>
</template>
<script>
  import {mapState, mapActions,mapMutations} from 'vuex';
  export default{

    async fetch() {
        try {
            console.log("llegue lero lero lero")
            await this.getCharacters();
        } catch (error) {
            this.$message.error(error.message);
        } finally {
            this.loading = false;
        }
    },
/*
    data () {
      value:1
},
*/
    computed: {
      ...mapState('characters', ['characters'])
    },
    methods:{
      ...mapActions('characters', ['getCharacters', 'getCharacter']),

    }

  }
</script>

