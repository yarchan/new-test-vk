<template>
  <div class="d-flex justify-content-center align-items-center">
    <button @click="goBack" class="btn-list btn btn-primary">Назад</button>
    <ul class="get-friends-items" >
      <li @click="openFriendInfo(friend.id)" class="get-friends-link" v-for="(friend,index) in list_friends" :key="index">
        <div class="d-flex justify-content-center align-items-center">
          <img class="get-friends-link-img" :src="friend.photo_50" alt="">
          <p class="mb-0 me-2">{{friend.first_name}}</p>
          <p class="mb-0">{{friend.last_name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.btn-list{
  position: absolute;
  top: 20px;
  left: 20px;
}
.get-friends-link{
  cursor: pointer;
}
</style>

<script>
import list_friend from '../store/store.js'

export default {
  data() {
    return {
      list_friend:list_friend.value,
    };
  },
  mounted() {
    console.log(this.list_friends);
  },
  methods:{
    async getGeneralFriend(){
      self =this
      await VK.Api.call('friends.get', {
        user_ids: 6492, 
        fields:'photo_50',
        v:this.v,
      }, 
      function(r) {
        if(r.response) {
          self.friends = r.response.items
          self.new_friends = r.response.items
          localStorage.setItem('r',r.response)
        }
      });
    },
    openFriendInfo(){
     this.$router.push('/friend-info')
    },
    goBack(){
      this.$emit("get_friend",true)
    }
  }
}

</script>