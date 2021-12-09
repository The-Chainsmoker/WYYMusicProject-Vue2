<template>
  <div class="recommend-mv">
    <div class="all-card">
      <mv-card
            v-for="item in MvInfo"
            :key="item.id"
            :id="item.id"
            :pic="item.picUrl"
            :playcount="item.id"
            :singer="item.song.artists.map(({ name }) => name)"
            :text="item.name"
            class="item"
          ></mv-card>
    </div>
  </div>
</template>

<script>
import MvCard from "../../../components/common/recommend-mv/mv-card.vue";
import {getPersonalizedNewSong} from '../../../network/api'
export default {
    name:"RecommendMv",
    components:{MvCard},
    data() {
        return {
            MvInfo: [],
        }
    },
    methods: {
      async getPersonalizedNewSong(){
        const {data} = await getPersonalizedNewSong(12)
        console.log(data)
        this.MvInfo=data.result
      },
    },
    created() {
      this.getPersonalizedNewSong()
    },
}
</script>

<style scoped>
@import "./recommend-mv.css";
</style>