<template>
  <div class="FindThing">
    <Dialog header="Поиск устройств" :visible.sync='isvisible' :style="{width: '50vw'}"
     :modal="true" :contentStyle="{overflow: 'visible'}">
      <!--p class="hidden">{{displayFindThingDialog}}</p-->
      <p>Ckexfqysq</p>
      <template #footer>
        <Button label="Отменить" icon="pi pi-times" @click="closeFindThingDialog" class="p-button-text"/>
        <Button label="Сохранить" icon="pi pi-check" @click="closeFindThingDialog" />
      </template>
    </Dialog>

  </div>
</template>

<script>
// Здесь должен быть код javascript
export default {
  props: {
    displayFindThingDialog: Boolean,
  },

  data: function() {
    return {
      isvisible: false,
    }
  },

  watch: {
    displayFindThingDialog: function(newVal) { 
      this.isvisible = newVal; //(newVal == true) ? true : false;
    },
    isvisible: function (val) {
      if (val == false) this.$emit('fdinvisible');
    },
  },

  methods: {
    closeFindThingDialog: function() {
      this.isvisible = false;
    }
  },
}
</script>

<style scoped>

</style>