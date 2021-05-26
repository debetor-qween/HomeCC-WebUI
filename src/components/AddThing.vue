<template>
  <div class="AddThing">
    <Dialog header="Добавить устройство"  :visible.sync='isvisible'  :style="{width: '50vw'}" 
      :modal="true" :contentStyle="{overflow: 'visible'}">
      <div class="p-field p-col-12 p-md-4">
        <span class="p-float-label">
          <Dropdown id="dropdown" v-model="value8" :options="dicThingTypes" optionLabel="name" />
          <label for="dropdown">Выберите тип устройства</label>
        </span>
      </div>

      <template #footer>
        <Button label="Отменить" icon="pi pi-times" @click="closeAddThingDialog" class="p-button-text"/>
        <Button label="Сохранить" icon="pi pi-check" @click="closeAddThingDialog"/>
      </template>
    </Dialog>
  </div>
</template>

<script>
// Здесь код javascript
export default {
  props: {
    displayAddThingDialog: Boolean,
  },

  data: function() {
    return {
      isvisible: false,
      value8: null,
      dicThingTypes: [
        {name: 'Сетевое устройство', code: 'network'},
        {name: 'Прогноз погоды', code: 'openweathermap'},
        {name: 'Активатор', code: 'activator'},
      ],
    }
  },

  watch: {
    displayAddThingDialog: function(newVal) { 
      this.isvisible = newVal; //(newVal == true) ? true : false;
    },
    isvisible: function (val) {
      if (val == false) this.$emit('addinvisible');
    },
  },

  methods: {
    closeAddThingDialog: function() {
      this.isvisible = false;
    }
  },
}
</script>

<style scoped>
/* Локальный список стилей компонента*/
</style>