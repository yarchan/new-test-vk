<template>
  <div class="">
    <div class="get-friends">
      <div class="mb-4">
        <button @click="getFriend" class="btn btn-primary">Загрузите список друзей</button>
      </div>
      <div class="mb-4">
        <button @click="buildNewListFriends" class="btn btn-primary">Построить</button>
      </div>
      <div class=" mb-4">
        <input v-model="select_friends" @input="newFriends" class="form-control" placeholder="Начните вводить текст для поиска друга, которого хотите добавить" type="text" name="" id="">
      </div>
      <ul v-if="all_friend.length!=0" class="get-friends-items" >
        <li  class="get-friends-link" v-for="(friend,index) in all_friend" :key="index">
          <div class="d-flex justify-content-center align-items-center">
            <img class="get-friends-link-img" :src="friend.photo_50" alt="">
            <p class="mb-0 me-2">{{friend.first_name}}</p>
            <p class="mb-0">{{friend.last_name}}</p>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button @click="friend.isAdd=true" class="btn btn1">Добавить</button>
            <button @click="friend.isAdd=false" v-if="friend.isAdd" class="btn btn2">Удалить</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
  .get-friends{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .get-friends-items{
    min-width: 500px;
    max-width: 500px;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 0;
    margin: 0;
  }
  .get-friends-link{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    transition: 0.2s linear;
  }
  .get-friends-link-img{
    margin-right: 20px;
  }
</style>

<script>
import {ref} from 'vue'
import {list_friend} from '../store/store.js'
import {all_friend} from '../store/store.js'

export default {
  setup(){
    return{
      AppID : '51773846',
      v : '5.154',
      friends:ref([]),
      select_friends:ref(''),
      list_friend,
      all_friend,
      get_friend:ref(true)
    }
  },

  methods:{
    buildNewListFriends(){
      this.list_friend.splice(0, this.list_friend.length);
      this.all_friend.filter(friend=>friend.isAdd===true?this.list_friend.push(friend):'')
      this.$router.push('/list')
    },

    newFriends(){
      const searchText = this.select_friends.toLowerCase();
      this.all_friend = this.all_friend.filter(friend => {
        const firstName = friend.first_name.toLowerCase();
        const lastName = friend.last_name.toLowerCase();
        return friend ? firstName.startsWith(searchText) || lastName.startsWith(searchText):'';
      });
    },
    async getFriend(){
      self =this
      // self.$router.push('/list')
      await VK.Api.call('friends.get', {
        fields:"photo_50,bdate,sex",
        v:this.v,
      }, 
      function(r) {
        if(r.response) {
          self.all_friend = r.response.items
        }
      });
    }
  },
}
</script>


