<template>
<div class="fondo">
  <div class="container_modal_superior">
            <!--img src="portal-morty-smith-rick (2).png" class="image_raiz"-->
            <img src="../static/rick and morty.png"  class="image_raiz_2">
          </div>

  <modal-character></modal-character>
</div>

</template>
<script>

import ModalCharacter from '../components/ModalCharacter.vue'

export default {
  components:{
    ModalCharacter
  }
}
</script>
<style>



.fondo{
  min-height: 110vh;
  background-image: url("../static/portal-morty-smith-rick-compl.png");
  background-color: rgb(0, 0, 0);
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center;
  background-attachment: fixed;
}
.fondo:before{
  content: "";
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #000000;
  opacity: 0.5;
  z-index: -1;
}
</style>
