<template>
  <div class="comment-card">
    <div class="left">
      <img :src="pic" alt="" />
    </div>
    <div class="comment-content">
      <div class="text">
        <span>{{ name }}: </span>
        <span>{{ text }}</span>
      </div>
      <div class="time">{{ showDate }}</div>
    </div>
  </div>
</template>

<script>
import { getYMDHMS } from "../../../utils/uctil";
export default {
  name: "CommentCard",
  props: {
    name: String,
    text: String,
    pic: String,
    time: Number,
    uid:Number,
  },
  data() {
    return {};
  },
  computed: {
    showDate() {
      return getYMDHMS(this.time);
    },
  },
};
</script>

<style scoped>
@import 'comment-card.css';
</style>