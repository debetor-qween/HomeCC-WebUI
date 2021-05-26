<template>
  <div class="FindThings">
    <Dialog header="Поиск устройств" :visible.sync='isvisible' :style="{width: '50vw'}" :modal="true" :contentStyle="{overflow: 'visible'}">
      <!--p class="hidden">{{displayFindThingsDialog}}</p-->
      <p>Ckexfqysq</p>
      <template #footer>
        <Button label="Отменить" icon="pi pi-times" @click="closeFindThingsDialog" class="p-button-text"/>
        <Button label="Сохранить" icon="pi pi-check" @click="closeFindThingsDialog" />
      </template>
    </Dialog>

  </div>
</template>

<script>
// Здесь должен быть код javascript
export default {
  props: {
    displayFindThingsDialog: String,
  },

  data: function() {
    return {
      isvisible: false,
    }
  },

  watch: {
    displayFindThingsDialog: function(newVal) { 
      this.isvisible = (newVal == 'T') ? true : false;
    },
    isvisible: function (val) {
      if (val == false) this.$emit('fdinvisible');
    },
  },

  methods: {
    closeFindThingsDialog: function() {
      this.isvisible = false;
    }
  },
}
</script>

<style scoped>

</style>