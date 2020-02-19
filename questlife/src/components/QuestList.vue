<template>
  <div class="questList">
    <QuestCard
      v-for="quest in questList"
      v-bind:key="quest"
      v-bind:quest="quest"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Quest from "../assets/lib/Quest";
import QuestCard from "@/components/QuestCard.vue";

@Component({
  components: { QuestCard }
})
export default class HelloWorld extends Vue {
  @Prop() private quests!: Quest[];
  private questList: Quest[] = JSON.parse(JSON.stringify(this.quests)).quests;
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
</style>
