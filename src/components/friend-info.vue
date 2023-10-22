<template>
  <div class="d-flex">
    <div class="">
      <h3>Общий друзья</h3>
      <ul class="get-friends-items" >
        <li  class="get-friends-link" v-for="(friend,index) in common_friends" :key="index">
          <div class="d-flex justify-content-center align-items-center">
            <img class="get-friends-link-img" :src="friend.photo_50" alt="">
            <p class="mb-0 me-2">{{friend.first_name}}</p>
            <p class="mb-0">{{friend.last_name}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="">
      <h3>Записи на стене</h3>
      <ul class="get-friends-items" >
        <li class="get-friends-link" v-for="(post,i) in posts" :key="i">
          {{post.text}}           
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {all_friend} from '../store/store.js'
import {selected_friend} from '../store/store.js'
import {selected_friend_common} from '../store/store.js'
import {ref} from 'vue'

export default{
  setup(){
    return{
      all_friend,
      selected_friend,
      selected_friend_common,
      common_friends:ref([]),
      v : '5.154',
      posts:ref([])
    }
  },
  mounted(){
    console.log("Choose",this.selected_friend);    
    this.getCommonFriends()
    this.getPosts()
  },
  methods:{
    getCommonFriends(){
      this.all_friend.forEach((el)=>{(this.selected_friend_common.includes(el.id))&&(this.common_friends.push(el))})
      console.log(this.common_friends);
    },
    async getPosts(){
      self = this
      await VK.Api.call('wall.get', {
        owner_id:this.selected_friend,
        filter:'owner',
        v:this.v,
      }, 
      function(r) {
        if(r.response) {
          self.posts = r.response.items
          console.log(r.response);
        }
      });
    }  
  }
}

</script>