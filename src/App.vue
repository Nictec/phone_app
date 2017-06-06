<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main Views -->
    <f7-views layout="dark">
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- Navbar -->
        <f7-navbar>
          <f7-nav-center sliding>EasyRent</f7-nav-center>
          <f7-nav-right><f7-link v-on:click="logout()"><f7-icon fa="sign-out" style="color: white; cursor:pointer;"></f7-icon></f7-link></f7-nav-right>
        </f7-navbar>
        <!-- toolbar -->
        <f7-toolbar>
          <f7-link><f7-icon fa="cubes" style="color: white;"></f7-icon></f7-link>
          <f7-link><f7-icon fa="bell" style="color: white;"></f7-icon></f7-link>
          <f7-link href="/equipment/"><f7-icon fa="server" style="color: white;"></f7-icon></f7-link>
          <f7-link href="/clients/" title="about" link-view='#main-view' link-close-panel><f7-icon fa="users" style="color: white;"></f7-icon></f7-link>
        </f7-toolbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

    <!-- Login Screen -->
    <f7-login-screen id="login-screen" :opened="!user.authenticated" layout="dark">
      <f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-login-screen-title>Login</f7-login-screen-title>
            <div class="logmod" v-show="error"><h3>Benutzername oder Passwort falsch!</h3></div>
            <f7-list form>
              <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input name="username" placeholder="Username" type="text" v-model="username"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input name="password" type="password" placeholder="Password" v-model="password"></f7-input>
              </f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-button title="Sign In" v-on:click="login()"></f7-list-button>
              <f7-list-label>
              </f7-list-label>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-login-screen>

  </div>
</template>

<script>
import auth from "./auth.js"
var f7 = new Framework7();
export default {
data(){
  return{
    user: auth.user,
    error: auth.error,
    username: "",
    password: "",
  }
},
methods:{
    open_login(){
      f7.loginScreen();
    },
    login(){
      auth.login(this, this.username, this.password)
    },

    logout(){
      auth.logout()
    },
  },
  created(){
    auth.check();
  }
}
</script>

<style lang=scss>
  .logmod{
    background-color: #ff6c00;
    text-align: center;
    width:95%;
    height: 37px;
    margin-left:12px !important;
    border-radius: 7px;
    h3{
      padding-top: 5px;
    }
 }

</style>
