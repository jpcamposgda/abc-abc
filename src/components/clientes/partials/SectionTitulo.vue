<!-- HTML -->
<template>
  <section class="titulo">
    <button type="button" class="adicionar" @click.prevent="isActive = true"><p>Adicionar novo cliente</p></button>
  </section>
  <section class="modal mostrar " v-if="isActive">
    <!-- Background -->
    <div class="background"></div>
    <!-- Quadro -->
    <div class="quadro">
      <!-- Título -->
      <div class="titulo">
        <div class="texto">
          <h2><span>Novo</span></h2>
          <h2>CLIENTE</h2>
        </div>
        <button type="button" @click.prevent="isActive = false">Fechar</button>
      </div>
      <!-- Nome -->
      <label>Nome <span>*</span></label>
      <div class="input cinza">
        <input type="text" autocomplete="false" v-model="user.name" spellcheck="false" placeholder="Digite aqui...">
      </div>
      <!-- Whatsapp -->
      <label>Whatsapp <span>*</span></label>
      <div class="input cinza">
        <input type="tel" autocomplete="false" v-model="user.phone" spellcheck="false" placeholder="(99) 99999-9999">
      </div>
      <button type="button" class="principal" @click.prevent="addItem">Salvar Cliente</button>
    </div>
  </section>
</template>

<!-- JS -->
<script>

import {useCounterStore} from '../../../store/cadastropinia'
export default {
  data(){ 
    return{

      user:{name:"",
            phone:"",
    },
    
    isActive:false


  }},

  methods:{
    addItem(){

      const addItem = useCounterStore()

      addItem.usuarios.push(this.user)
      
      this.user = {name: '', phone: ''};

      this.isActive = false



      



    }
  }
}
</script>

<!-- CSS -->
<style scoped>
section.modal {
  z-index: 10;
}
/* Label */
.quadro label {
  margin: 20px 0 10px 0;
}
/* Linha */
input.endereco {
  margin: 10px 0 0 0;
}
/* Data */
.quadro .data #seletorCalendario {
  position: absolute;
  top: 70px;
  left: -10px;
}
button.principal {
  margin: 20px 0 0 0;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
}
.tela {
  margin: 0 50px 0 0;
}

button.adicionar {
  margin-left: auto;
}
/* Responsivo */
@media screen and (max-width: 1000px) {
  .input {
    margin: 20px 0;
  }
  button.adicionar {
    margin-left: 0;
  }
}
</style>
