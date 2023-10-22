<template>
  <div class="">
    <div v-if="get_friend" class="get-friends">
      <div class="mb-4">
        <button @click="getFriend" class="btn btn-primary">Загрузите список друзей</button>
      </div>
      <div class="mb-4">
        <button @click="buildNewListFriends" class="btn btn-primary">Построить</button>
      </div>
      <div class=" mb-4">
        <input v-model="select_friends" @input="newFriends" class="form-control" placeholder="Начните вводить текст для поиска друга, которого хотите добавить" type="text" name="" id="">
      </div>
      <ul v-if="new_friends.length!=0" class="get-friends-items" >
        <li  class="get-friends-link" v-for="(friend,index) in new_friends" :key="index">
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
    <!-- <ListFriends v-if="!get_friend" :list_friends="new_list_friends" @get_friend="get_friend=$event"/> -->
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
import list_friend from '../store/store.js'

export default {
  components:{
    // ListFriends
  },
  setup(){
    return{
      AppID : '51773806',
      v : '5.154',
      friends:ref([]),
      new_friends:ref([]),
      select_friends:ref(''),
      new_list_friend:ref([]),
      list_friend,
      get_friend:ref(true)
    }
  },
  beforeMount(){
    this.init()
  },
  methods:{
    buildNewListFriends(){
      this.list_friend = this.new_friends.filter(friend=>friend.isAdd===true?friend:'')
      console.log(this.new_list_friends);
      this.get_friend = false
      this.$router.push('/get-friends/list-friends')
    },

    newFriends(){
      const searchText = this.select_friends.toLowerCase();
      this.new_friends = this.friends.filter(friend => {
        const firstName = friend.first_name.toLowerCase();
        const lastName = friend.last_name.toLowerCase();
        return friend ? firstName.startsWith(searchText) || lastName.startsWith(searchText):'';
      });
    },
    async init(){
      await VK.init({
        apiId: this.AppID
      });
    },
    getFriend(){
      self =this
       VK.Api.call('friends.get', {
        user_ids: 6492, 
        fields:'photo_50',
        v:this.v,
      }, 
      function(r) {
        if(r.response) {
          self.friends = r.response.items
          self.new_friends = r.response.items
          localStorage.setItem('r',r.response)
          // self.$router.push('/get-friends/list-friends')
        }
      });
    }
  },
}
</script>


