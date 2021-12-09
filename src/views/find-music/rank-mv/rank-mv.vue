A<template>
  <div class="rank-mv">
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
        v-for="item in rankMvInfo.data"
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
import { getTopMv } from "../../../network/api";
export default {
  name: "RankMv",
  components: { MvCard },
  data() {
    return {
      area: ["全部","内地", "港台", "欧美", "日本", "韩国"],
      currentArea: "",
      rankMvInfo: [],
    };
  },
  methods: {
    async SongTypeClick(type) {
      this.currentArea = type;
      if(type == "全部"){
        type = ""
      }
      const res1 = await getTopMv(type);
      this.rankMvInfo = res1.data;
    },
  },
  async created() {
    this.currentArea = "全部"
    const res1 = await getTopMv();
    this.rankMvInfo = res1.data;
  },
};
</script>

<style scoped>
@import "./rank-mv.css";
</style>