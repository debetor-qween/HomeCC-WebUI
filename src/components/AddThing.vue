<template>
  <div class="AddThing">
    <Dialog class="my-font" header="Новое устройство"  :visible.sync='isvisible'  :style="{width: '50vw'}" 
      :modal="true" :contentStyle="{overflow: 'visible'}">
      <div class="p-fluid">
        <div class="p-field">
          <span class="p-float-label p-mb-4">
            <Dropdown id="thingtype" v-model="thingTypeSel" :options="thingTypes" optionLabel="label" aria-describedby="thingtype-help" />
            <label for="thingtype">Выберите тип устройства</label>
            <small id="thingtype-help">{{thingTypeDescription}}</small>
          </span>
          <!--p class="subtitle p-mb-4">{{thingTypeDescription}}</p-->
          <span class="p-float-label p-mb-4">
            <InputText id="label" type="text" v-model="thing.label" aria-describedby="label-help" />
            <label for="label">Метка (имя) устройства</label>
            <small id="label-help">* Обязательно для заполнения.</small>
          </span>
          <span class="p-float-label p-mb-4">
            <InputText id="location" type="text" v-model="thing.location" />
            <label for="location">Место установки</label>
          </span>
        </div>
      </div> 

      <template #footer>
        <Button label="Отменить" icon="pi pi-times" @click="closeAddThingDialog" class="p-button-text"/>
        <Button label="Сохранить" icon="pi pi-check" @click="save"/>
      </template>
    </Dialog>
  </div>
</template>

<script>
// Здесь код javascript
import BindService from '../services/BindingsAPI';
import ThingService from '../services/ThingsAPI';
import CommonService from '../services/Common';
export default {
  props: {
    displayAddThingDialog: Boolean,
  },

  data: function() {
    return {
      isvisible: false,
      bindings: [],
      bindIds: [],
      thingTypes: [],
      thingTypeSel: null,
      thingTypeDescription: '',
      thing: {
        ID: '',
        UID: '',
        label: '',
        configuration: {},
        channels: [],
        thingTypeUID: '',
      },
    }
  },

  watch: {
    displayAddThingDialog: function(newVal) { 
      this.isvisible = newVal; //(newVal == true) ? true : false;
    },
    isvisible: function (val) {
      if (val == false) this.$emit('addinvisible');
    },
    bindings: function(newval) {
      this.bindIds = [];
      if (newval.length > 0 ) {
        for ( let bindId of newval ) {
          this.bindIds.push(bindId.id);
        }
        this.fetchThingTypes('t4m');
      }
    },
    thingTypes: function() {
      console.log(this.thingTypes);
    },
    thingTypeSel: function() {
      this.initThingProps();
      this.thingTypeDescription = this.thingTypeSel.description;
      console.log(this.thingTypeSel);
    },
  },

  methods: {
    closeAddThingDialog: function() {
      this.isvisible = false;
    },
    fetchBindings: function () {
      this.BindService.getBindings().then(data =>{this.bindings = data});
    },
    fetchThingTypes: function() {
      this.ThingService.getThingTypes('t4m').then(data =>{this.thingTypes = data});
    },
    initThingProps: function() {
      this.thing.ID = this.CommonService.getId();
      this.thing.UID = [this.thingTypeSel.UID, this.thing.ID].join(':');
      this.thing.thingTypeUID = this.thingTypeSel.UID;
    },
    save: function() {
      if (!this.thing.label) {
        alert('Задайте имя для устройства');
        return;
      }
      this.ThingService.postThing(this.thing).
        then(() => {
          this.$emit('newThing');
          this.closeAddThingDialog();
          });

    },
  },

  created: function() {
    this.BindService = new BindService();
    this.ThingService = new ThingService();
    this.CommonService = new CommonService();
    this.fetchBindings();
  }
}
</script>

<style scoped>
.my-font {
  font-size: 60%; /* font-size 1em = 10px on default browser settings */
}
.subtitle {
  font-style: oblique;
  color: blue; 
  align-content: center;
}
.AddThing {
  font-size: 60%; /* font-size 1em = 10px on default browser settings */
}
/* Локальный список стилей компонента*/
</style>