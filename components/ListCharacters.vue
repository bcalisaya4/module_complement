<template>
<div>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="(character,id) in characters"
          :key="id"
          cols="10"
          md="4"
        >
          <v-item >
            <v-card
              class="card_cont"
              height="200"
              @click="detalle(character.id)"

            >
              <v-img
              class="img_cont"
                width="50%"
                height="200px"
                :src="character.image"
              ></v-img>
              <div class="text_cont">

                <h2>{{character.status}}-{{character.species}}</h2>

                <h1>{{character.name}}</h1>

                <div class="text_cont_ord">
                <p>Last known location:</p>
                <h3>{{character.location.name}}</h3>
                <p>First seen in:</p>
                <h3>{{character.origin.name}}</h3>
                </div>
                </div>


            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  <modal-character/>
</div>
</template>
<script>
  import {mapState, mapActions,mapMutations} from 'vuex';

import ModalCharacter from '../components/ModalCharacter.vue'
  export default{

    components:{
      ModalCharacter
    },
    async fetch() {
        try {
            await this.getCharacters();
            this.setCharacterModal(false);

        } catch (error) {
            this.$message.error(error.message);
        } finally {
            this.loading = false;
        }
    },

    computed: {
      ...mapState('characters', ['characters','character'])
    },
    methods:{
      ...mapActions('characters', ['getCharacters', 'getCharacter']),
        ...mapMutations('characters', ['setCharacterModal']),
      async detalle(id){
            try {
                await this.getCharacter(id);

                this.setCharacterModal(true);
            } catch (error) {
                this.$message.error(error.message);
            }
      }
    }

  }
</script>
<style>
.img_cont{
  display: inline-block;
  }
.text_cont{
  width: 130px;
  font-size: 60%;
  display: inline-block;
   vertical-align:top;
}
</style>
