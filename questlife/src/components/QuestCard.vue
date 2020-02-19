<template>
  <div class="questCard">
    <h1>{{ quest.name }}</h1>
    <h2>{{ quest.deadline }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Quest from "../assets/lib/Quest";

@Component
export default class QuestCard extends Vue {
  @Prop() private quest!: Quest;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.questCard {
  background: #c0d6ff;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
