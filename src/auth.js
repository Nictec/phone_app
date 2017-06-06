  const LOGIN_URL = "http://technick.pythonanywhere.com/auth/"
 const CURRENT = "http://technick.pythonanywhere.com/current-user/"

export default{
  user: {
    authenticated: false,
    is_superuser: false,
    is_staff: false,
    name:"",
  },
  error:false,
  logInfo:false,

  check_permissions(context){
    context.$http.get("current-user/").then(function(response){
      this.user.is_superuser = response.data.is_superuser
       this.user.is_staff = response.data.is_staff
    })
  },

  login(context, username, password){
    var data = new FormData()
    data.append('username', username)
    data.append('password', password)
    context.$http.post(LOGIN_URL, data, {emulateJSON:true}).then(function(response){
      localStorage.setItem('id_token', response.data.token)
      this.user.authenticated = true
      console.log("login sucessful:"+response.data.token)
      window.bus.$emit("reload");
    },function(response){
      this.user.authenticated = false
      console.log("login failed")
      this.error = true
    })
  },


  logout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
    this.logInfo = true
  },

    getAuthHeader() {
        var jwt = localStorage.getItem('id_token')
        if(jwt){
          var string = "Token "
          return string+localStorage.getItem('id_token')
        }else{
          return null
        }
    },

  check(){
    var jwt = localStorage.getItem('id_token')
    if(jwt){
      this.user.authenticated = true
    }else{
      this.user.authenticated = false
    }
  },

  current_user(context){
    context.$http.get("current-user/").then(function(response){
      this.user.is_superuser = response.data.is_superuser
       this.user.is_staff = response.data.is_staff
       this.user.name = response.data.name
    })
  }

};
