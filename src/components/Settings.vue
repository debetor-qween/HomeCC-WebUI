<template>
  <div class="SettingsPage">
      <Button @click="openFindThingsDialog" label="Найти устройство" icon="pi pi-search" iconPos="left" class="p-button-sm"/>
      <Button  @click="openAddThingDialog" label="Добавить устройство вручную" icon="pi pi-cog" iconPos="left" class="p-button-sm" />
      
      <p class="listheader" >СПИСОК УСТРОЙСТВ</p>
      <DataTable :value="things" selectionMode="single" dataKey="id" class="p-datatable-gridlines">
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
        <FindThings v-bind:displayFindThingsDialog="displayFindDialog" v-on:fdinvisible="closeFinfThigsDialog"></FindThings>
      </div>

      <div class="AddThing">
        <Dialog header="Добавить устройство вручную" :visible.sync="displayAddThingDialog" :style="{width: '50vw'}" :modal="true" :contentStyle="{overflow: 'visible'}">
          <p class="p-m-0">Настройка устройства:</p>
          <div class="p-field p-col-12 p-md-4">
               <span class="p-float-label">
              <Dropdown id="dropdown" v-model="value8" :options="dicThingTypes" optionLabel="name" />
              <label for="dropdown">Выберите тип устройства</label>
            </span>
          </div>

          <template #footer>
            <Button label="Отменить" icon="pi pi-times" @click="closeAddThingDialog" class="p-button-text"/>
            <Button label="Сохранить" icon="pi pi-check" @click="closeAddThingDialog" autofocus />
          </template>
        </Dialog>
      </div>
  </div>
</template>

<script>
// Здесь должен быть код javascript
import ThingsService from '../services/ThingsService';
import FindThings from './FindThings.vue'

export default {
  name: 'SettingsPage',
  props: {
    msg: String,
  },
  data () {
    return {
      things: [],
      inboxContent: [],
      displayFindDialog: "F",
      displayAddThingDialog: false,
      value8: null,
      dicThingTypes: [
        {name: 'Сетевое устройство', code: 'network'},
        {name: 'Прогноз погоды', code: 'openweathermap'},
        {name: 'Активатор', code: 'activator'},
      ],
    }
  },
  components: {
    FindThings,
  },

  methods: {
    fetchThings: function () {
      this.thingsService.getThingsSummary().then(data =>{this.things = data});
    },
    fetchInbox: function () {
      this.thingsService.getInboxContent().then(data =>{this.inboxContent = data});
    },
    openFindThingsDialog: function() {
      this.displayFindDialog = "T";
    },
    closeFinfThigsDialog: function() {
      this.displayFindDialog = "F";
    },
    openAddThingDialog: function() {
      this.displayAddThingDialog = true;
      this.displayFindDialog = "F";
    },
    closeAddThingDialog: function() {
      this.displayAddThingDialog = false;
    }
  },
  created: function () {
    this.displayFindDialog = "F";
    this.thingsService = new ThingsService();
    this.fetchThings();
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