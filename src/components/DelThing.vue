<template>
  <div class="DelThing">
    <Dialog header="Подтверждение"  :visible.sync='isvisible'  :style="{width: '30vw'}" 
      :modal="true" :contentStyle="{overflow: 'visible'}">
      <p>Устройство <span class="emphasized">[{{thing.label}}]</span> будет удалено из системы. Нажмите ДА для подтверждения удаления</p>
      <template #footer>
        <Button label="Нет" icon="pi pi-times" class="p-button-text" @click="closeDialog"/>
        <Button label="Да" icon="pi pi-check" class="p-button-text" @click="save"/>
      </template>
    </Dialog>
  </div>
</template>

<script>
import ThingService from '../services/ThingsAPI';

export default {
  props: {
    showDialog: Boolean,
    thing: Object,
  },
  data: function() {
    return {
      isvisible: false,
    }
  },
  watch: {
    showDialog: function(newVal) { 
      this.isvisible = newVal;
    },
    isvisible: function (val) {
      if (val == false) this.$emit('delinvisible');
    },
  },
  methods: {
    closeDialog: function() {
      this.isvisible = false;
    },
    save: function() {
      this.ThingService.deleteThing(this.thing.UID).
        then(() => {
          this.$emit('delThing');
          this.closeDialog();
          });
    },
  },
  created: function() {
    this.ThingService = new ThingService();
  }
}
</script>

<style scoped>
.emphasized {
  font-style: oblique;
  color: blue; 
}
.DelThing {
  font-size: 60%; /* font-size 1em = 10px on default browser settings */
}
</style>