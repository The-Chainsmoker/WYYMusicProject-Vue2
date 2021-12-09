<template>
  <div class="new-mv">
        <div class="alltype">
          <span
          v-for="item in area"
          :key="item"
          class="type"
          :class="item === currentArea ? 'active' : ''"
          @click="SongTypeClick(item)"
          >{{ item }}</span
        >
        </div>
        <div class="all-card">
          <mv-card
            v-for="item in newMvInfo.data"
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
import { getNewMv} from "../../../network/api";
export default {
    name:"NewMv",
    components:{MvCard},
    data() {
        return {
            area: ["全部","内地", "港台", "欧美", "日本", "韩国"],
            currentArea: "",
            newMvInfo: [],
        }
    },
    methods: {
      async SongTypeClick(type) {
      //设置当前音乐类型
      this.currentArea = type;
      //根据选着的音乐类型更新数据
      if(type == "全部"){
        type = ""
      }
      const res1 = await getNewMv(type);
      this.newMvInfo = res1.data;
    },
    },
    async created() {
        this.currentArea = "全部"
        const res1 = await getNewMv();
        this.newMvInfo = res1.data;
    }, 
}
</script>

<style scoped>
@import "./new-mv.css";
</style>