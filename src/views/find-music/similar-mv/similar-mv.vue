<template>
  <div class="similar-mv">
    <div class="all-card">
          <mv-card
            v-for="item in MvInfo"
            :key="item.id"
            :id="item.id"
            :pic="item.cover"
            :playcount="item.playCount"
            :singer="item.artists.map(({ name }) => name)"
            :text="item.name"
            class="item"
          ></mv-card>
    </div>
  </div>
</template>

<script>
import MvCard from "../../../components/common/recommend-mv/mv-card.vue";
import {getSimiMv} from '../../../network/api'
export default {
    name:"SimilarMv",
    components:{MvCard},
    data() {
        return {
            MvInfo: [],
        }
    },
    methods: {
      async getSimiMv(){
        const {data} = await getSimiMv(this.$store.state.mvid)
        this.MvInfo = data.mvs
        console.log(data)
      },
    },
    created() {
      this.getSimiMv()
    },
    activated() {
      this.getSimiMv()
    },
}
</script>

<style scoped>
@import "./similar-mv.css";
</style>