<template>
    <div class="navmenu">
    <nav v-bind:class="active" v-on:click.prevent>
        <a href="#" class="settings" v-on:click="makeActive('settings')">Настройка</a>
        <a href="#" class="monitoring" v-on:click="makeActive('monitoring')">Мониторинг</a>
        <a href="#" class="scripts" v-on:click="makeActive('scripts')">Сценарии</a>
        <a href="#" class="help" v-on:click="makeActive('help')">Помощь</a>
    </nav>
    
    <!--p>Пользователь выбрал <b>{{ active }}</b></p>
    -->
    </div>  
  </template>

<script>
export default {
  name: 'navmenu',
  props: {
    msg: String
  },
  data() {
    return {active: 'settings'};
  },
  methods: {
    makeActive: function(item){
      this.active = item;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding:0;
}

body{
  font:15px/1.3 'Open Sans', sans-serif;
  color: #5e5b64;
  text-align:center;
}

a, a:visited {
  outline:none;
  color:#389dc1;
}

a:hover{
  text-decoration:none;
}

section, footer, header, aside, nav{
  display: block;
}

/*-------------------------
  The menu
--------------------------*/

nav{
  display:inline-block;
  margin: 0px auto 5px;
  background-color:#5597b4;
  box-shadow:0 1px 1px #ccc;
  border-radius:2px;
}

nav a{
  display:inline-block;
  padding: 18px 30px;
  color:#fff !important;
  font-weight:bold;
  font-size:16px;
  text-decoration:none !important;
  line-height:1;
  text-transform: uppercase;
  background-color:transparent;

  -webkit-transition:background-color 0.25s;
  -moz-transition:background-color 0.25s;
  transition:background-color 0.25s;
}

nav a:first-child{
  border-radius:2px 0 0 2px;
}

nav a:last-child{
  border-radius:0 2px 2px 0;
}

p{
  font-size:12px;
  font-weight:bold;
  color:#7d9098;
}

p b{
  color:#ffffff;
  display:inline-block;
  padding:5px 10px;
  background-color:#c4d7e0;
  border-radius:2px;
  text-transform:uppercase;
  font-size:12px;
}
</style>
