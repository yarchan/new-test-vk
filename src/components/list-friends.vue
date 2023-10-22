<template>
  <div class="d-flex justify-content-center align-items-center">
    <button @click="this.$router.push('/')" class="btn-list btn btn-primary">Назад</button>
    <ul class="get-friends-items" >
      <li @click="openFriendInfo(friend.id,friend.common_friends)" class="get-friends-link" v-for="(friend,index) in list_friend" :key="index" :style="`background-color: rgba(18, 0, 255,${friend.percent_common_friends});`">
        <div class="d-flex justify-content-center align-items-center">
          <img class="get-friends-link-img" :src="friend.photo_50" alt="">
          <p class="mb-0 me-2">{{friend.first_name}}</p>
          <p class="mb-0 me-2">{{friend.last_name}}</p>
          <p class="mb-0 me-2">{{friend.age}}</p>
          <p class="mb-0">
            {{ (friend.sex === 1) ? 'Женский пол' : 'Мужской пол' }}
          </p>          
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
import {list_friend} from '../store/store.js'
import {selected_friend_common} from '../store/store.js'
import {selected_friend} from '../store/store.js'
import {ref} from 'vue'

export default {
  setup() {
    return {
      AppID : '51773846',
      v : '5.154',
      list_friend,
      selected_friend,
      selected_friend_common,
      mutual_friends:ref([]),
      style:ref(0)
    };
  },
  mounted(){
    this.getGeneralFriend()
  },
  methods:{
    getAge(){
      this.list_friend.forEach((el)=>{
        let dobParts = el.bdate.split('.');
        let birthDate = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]);
        let currentDate = new Date();
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        if (
          currentDate.getMonth() < birthDate.getMonth() ||
          (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
        ) {
          age--;
        }
        el.age='0'
        if (age.toString().slice(-1) === '1') {
          el.age = `${age} год`;
        } else if (age.toString().slice(-1) >= '2' && age.toString().slice(-1) <= '4') {
          el.age = `${age} года`;
        } else if (age.toString().slice(-1) >= '5') {
          el.age = `${age} лет`;
        }
      })
    },
    async getGeneralFriend(){
      self = this       
      let uids = ''
      this.list_friend.forEach((el)=>{
        uids.length===0?uids+=el.id:uids+=','+el.id
      })
       VK.Api.call('friends.getMutual', {
        target_uids:uids,
        v:this.v,
      }, 
      function(r) {
        if(r.response) {
          self.mutual_friends = r.response
          self.calcColorAndSort(r.response)
        }else{
          console.log(r);
        }
      });
    },
    async calcColorAndSort(among_friends){
      let max_friends=0
      among_friends.filter((el)=>{(max_friends<el.common_count)&&(max_friends=el.common_count)})
      await this.list_friend.forEach((el,i)=>{
        el.common_friends=this.mutual_friends[i].common_friends
        el.percent_common_friends=(this.mutual_friends[i].common_count/max_friends).toFixed(1)
      })
      this.list_friend.sort((a, b) => {
        if (a.first_name < b.first_name) return -1;
        if (a.first_name > b.first_name) return 1;
        if (a.last_name < b.last_name) return -1;
        if (a.last_name > b.last_name) return 1;
        return 0;
      });      
    },
    openFriendInfo(id,common_friends){
      this.selected_friend = id
      this.selected_friend_common = common_friends
      this.$router.push('/friend-info')
    },
  }
}

</script>