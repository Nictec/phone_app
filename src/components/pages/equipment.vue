<template>
  <f7-page>
    <f7-navbar back-link=" " sliding>
      <f7-nav-center>Equipment</f7-nav-center>
      <f7-nav-right><f7-link><f7-icon fa="plus" style="color: white;"></f7-icon></f7-link></f7-nav-right>
    </f7-navbar>
    <f7-list>
      <f7-list-item v-for="equipment in equipment" >{{equipment.fabricator}} {{equipment.name}}</f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data(){
    return{
      equipment: "",
    }
  },
  created(){
    this.$http.get('equipment/').then(function(response){
      this.equipment = response.data;
    })
  },
  computed:{
  }
}
</script>
