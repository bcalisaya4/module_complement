<template>
  <div>
    <v-row
      justify="center"
    >

      <v-dialog
        v-model="characterModal"
      persistent
      max-width="740px"
      >
        <v-card>
          <div class="container_modal_superior">
            <img src="../static/bg.png"  class="image_cabecera_modal">
            <img :src="this.valores.imagen" alt="Avatar" class="image_character_modal">
            <p class="alive_character_modal">{{this.valores.estado}}</p>
            <h2 class="name_character_modal">{{this.valores.nombre}}</h2>
            <p class="especies_character_modal">{{this.valores.especie}}</p>
          </div>
          <div >
            <h3 class="container_modal_medio_titulo">Informacion</h3>



    <v-container>
      <v-row>
        <v-col
          v-for="(episodio,id) in this.valores.episodios"
          :key="id"
        >
          <v-item >
              <v-scroll-y-transition>
                <div style="font-size:5; display: inline"  >
                        <v-card width="150">
                       <p>{{episodio.name}}</p>

                          <p>{{episodio.episode}}</p>
                          <p>{{episodio.air_date}}</p>
                        </v-card>
                </div>
              </v-scroll-y-transition>
          </v-item>
        </v-col>
      </v-row>
    </v-container>

          </div>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="cancel()"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import{ mapState,mapActions,mapMutations} from 'vuex';
  function initilizeVariables(){
    return{
      id:'',
      imagen:'',
      estado:'',
      nombre:'',
      especie:'',
      sexo:'',
      origen:'',
      tipo:'',
      episodios:[],
      personajes_de_interes:[],
    }
  };


  export default {


    async fetch() {
        try {
            this.setCharacterModal(false);
        } catch (error) {
            this.$message.error(error.message);
        } finally {
            this.loading = false;
        }
    },
    data () {

      return {
        valores : initilizeVariables(),

      }
    },
    watch:{
        async character(value){
          this.valores.episodios=[]
          this.valores.episodios = await this.getEpisodes()
          this.valores.imagen=value.image,
          this.valores.estado=value.status,
          this.valores.nombre=value.name,
          this.valores.especie=value.species,
          this.valores.sexo=value.gender,
          this.valores.origen=value.origin.name,
          this.valores.tipo=value.type,
          this.valores.personajes_de_interes=['otro','men']
        }

    },
    computed:{
      ...mapState('characters',['character','characterModal']),
      ...mapState('episodes',['episode'])
    },
    methods:{
      ...mapActions('characters',['getChracaters']),
      ...mapMutations('characters',['setCharacterModal']),
      ...mapActions('episodes',['getEpisodeUrl']),
        cancel() {
            this.setCharacterModal(false);
            this.valores.episodios=[]
        },
        async getEpisodes(){
          //console.log('dentro de funcion')
          for (let i = 0; i < this.character.episode.length; i++) {
            //console.log(this.valores.episodios[i])
            //console.log(this.character.episode[i])
            await this.getEpisodeUrl(this.character.episode[i])
            this.valores.episodios[i]=this.episode
            //console.log(this.valores.episodios.length)
            //console.log(this.episode)
          }
          return this.valores.episodios
        },
    }

  }
</script>
<style>
/*
.cabecera_modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
#fondo_modal{
  height: 260px;
  background-image: url("../static/bg.png");
  background-position: center;
}*/

.container_modal_superior{
  display: grid;
  grid-template-columns: 20% auto 150px auto 20%;
  grid-template-rows: 120px 150px 25px 35px 25px;
}
.image_character_modal{
  border-radius: 50%;
  width: 150px;
  grid-column: 3 / span 1;
  grid-row: 2;
}
.alive_character_modal{
  text-align: center;
  grid-column: 2 / span 3;
  grid-row: 3;
}
.name_character_modal{
  text-align: center;
  grid-column: 2 / span 3;
  grid-row: 4;
}
.especies_character_modal{
  text-align: center;
  grid-column: 2 / span 3;
  grid-row: 5;
}
.container_modal_medio{
  display: grid;
  grid-template-columns: 25% 25% 25% 25% 25%;
  grid-template-rows: 80px 100px 20px 100px 260px;
}
.container_modal_medio_titulo{
  grid-row: 1;
  padding: 20px;

}
.item_episode{
  border-width: 2px;
  border-style: solid;
  border-color: black;
  font-size: 70%;
}
</style>

