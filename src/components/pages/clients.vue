<template>
  <f7-page>
    <f7-navbar back-link=" " sliding>
      <f7-nav-center>Kunden</f7-nav-center>
      <f7-nav-right><f7-link><f7-icon fa="plus" style="color: white;"></f7-icon></f7-link></f7-nav-right>
    </f7-navbar>
    <f7-list>
      <f7-list-item v-for="client in client">{{client.firstname}} {{client.secondname}}</f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data(){
    return{
      client: "",
    }
  },
  created(){
    this.$http.get('client/').then(function(response){
      this.client = response.data;
    })
  },
  computed:{
  }
}
</script>
