<template>
  <div>
    <h1>Games and Simulation Projects</h1>

    <div style="margin-bottom: 30px;">
        These projects showcase my work in game development and simulation, highlighting system design, real-time interaction, and technical problem solving.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <!--<div style="margin-top: 20px;">
      There is more to see on <a target="_blank" href="https://someexternalwebsite.com">some external website</a>
    </div>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
