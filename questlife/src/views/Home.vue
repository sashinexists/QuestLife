<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <QuestList v-bind:quests="{ quests }" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import QuestList from "@/components/QuestList.vue";
import Quest from "../assets/lib/Quest";
import data from "@/data/quests.json";

const quests: Quest[] = [];

data.quests.forEach(quest => quests.push(new Quest(quest)));
console.log(quests[2].name);

export default {
  name: "Home",
  components: {
    QuestList
  },
  data: function() {
    return {
      title: "QuestLife",
      quests: quests
    };
  }
};
</script>
