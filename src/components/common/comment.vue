<template>
  <div class="comment">
    <div class="comment-item">
      <comment-card v-for="(item,index) in commentInfo" :key="index" :likedCount="item.likedCount" :name="item.user.nickname" :pic="item.user.avatarUrl" :text="item.content" :time="item.time" :uid="item.commentId" @handleReplyComment="handleReplyComment"></comment-card>
    </div>
  </div>
</template>
<script>
import CommentCard from "../comment-card.vue";
export default {
  components: { CommentCard },
  name: "Comment",
  data() {
    return {
      textarea: "",
      uid: null,
    };
  },
  props: {
    commentInfo: {
      type: Array,
      default: () => [],
    },
    id: String,
    type: Number,
    t: Number,
  },
  methods: {},
};
</script>

<style scoped>
.comment {
  width: 100%;
}
.comment .comment-input-area {
  width: 98%;
}
.send {
  margin-top: 10px;
  float: right;
}
</style>