<template>
  <div class="SettingsPage">
      <Button @click="openFindThingDialog" label="Найти устройство" icon="pi pi-search" iconPos="left" class="p-button-sm"/>
      <Button  @click="openAddThingDialog" label="Добавить устройство вручную" icon="pi pi-cog" iconPos="left" class="p-button-sm" />
      
      <p class="listheader" >СПИСОК УСТРОЙСТВ</p>
      <DataTable :value="Things" selectionMode="single" dataKey="id" class="p-datatable-gridlines">
        <Column field="UID" header="Идентификатор"></Column>
        <Column field="label" header="Наименование"></Column>
        <Column field="statusInfo.status" header="Состояние"></Column>
        <Column headerStyle="width: 18em" bodyStyle="text-align: center">
          <template #body>
            <Button type="button" icon="pi pi-times" class="p-button-danger" style="margin-right: .5em"></Button>
            <Button type="button" icon="pi pi-cog" class="p-button-warning"></Button>
          </template>
        </Column>
      </DataTable>
      <p style="font: italic small-caps bold; text-align: center;">Входящие: {{inboxContent.length}}</p>

      <div>
        <FindThing v-bind:displayFindThingDialog="displayFindDialog" v-on:fdinvisible="closeFindThingDialog"></FindThing>
      </div>

      <div>
        <AddThing v-bind:displayAddThingDialog="displayAddDialog" v-on:addinvisible="closeAddThingDialog"></AddThing>
      </div>
  </div>
</template>

<script>
// Здесь должен быть код javascript
import ThingService from '../services/ThingsService';
import FindThing from './FindThing.vue';
import AddThing from './AddThing.vue';

export default {
  name: 'SettingsPage',
  props: {
    msg: String,
  },
  data () {
    return {
      Things: [],
      inboxContent: [],
      displayFindDialog: false,
      displayAddDialog: false,
    }
  },
  components: {
    FindThing,
    AddThing,
  },

  methods: {
    fetchThing: function () {
      this.ThingService.getThingSummary().then(data =>{this.Things = data});
    },
    fetchInbox: function () {
      this.ThingService.getInboxContent().then(data =>{this.inboxContent = data});
    },
    openFindThingDialog: function() {
      this.displayFindDialog = true;
    },
    closeFindThingDialog: function() {
      this.displayFindDialog = false;
    },
    openAddThingDialog: function() {
      this.displayAddDialog = true;
    },
    closeAddThingDialog: function() {
      this.displayAddDialog = false;
    }
  },
  created: function () {
    this.displayFindDialog = false;
    this.displayAddDialog = false;
    this.ThingService = new ThingService();
    this.fetchThing();
    this.fetchInbox ();
  }
  
}
</script>

<style scoped>
/* Локальный список стилей компонента*/
  div {
    text-align: left;
  }
    button {
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .listheader {
        width: 1200px;
        margin: 10px, 0, 10px, 0;
        border-bottom: thick solid red;
    }

    #AddThing {
      font-size: 6vh;
    }
</style>