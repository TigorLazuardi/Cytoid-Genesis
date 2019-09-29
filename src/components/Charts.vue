<template>
  <v-col cols="12" class="d-flex flex-column">
    <h3 class="headline">Charts</h3>
    <p class="caption font-italic">
      *Outlined inputs are mandatory.
      <br />**At least one difficulty must be used.
      <br />***Expanding the panel means you declare you will use the difficulty. Close the panel if you don't use it since validation will be fired on all open panels and may return error.
    </p>
    <v-divider class="mb-4"></v-divider>
    <v-expansion-panels multiple>
      <v-row>
        <v-col lg="4" md="4" sm="12">
          <v-expansion-panel>
            <v-expansion-panel-header class="cyan darken-2" @click="toggleEasy()">Easy</v-expansion-panel-header>
            <v-expansion-panel-content class="cyan darken-4">
              <v-text-field
                class="mt-4"
                label="Difficulty"
                type="number"
                hint="*Required. Value below 1 will show '?' while above 15 as '15+'"
                persistent-hint
                prepend-icon="mdi-counter"
                outlined
                v-model="_easyDifficulty"
                :rules="charts.easy.use ? required : true"
              ></v-text-field>
              <v-file-input
                label="Chart File"
                outlined
                hint="*Required"
                persistent-hint
                prepend-icon="mdi-text"
                :rules="charts.easy.use ? required : true"
              ></v-file-input>
              <v-text-field
                label="Custom Difficulty Name"
                hint="Optional"
                class="my-4"
                prepend-icon="mdi-tag-text-outline"
              ></v-text-field>
              <v-file-input label="Music Override" prepend-icon="mdi-file-music"></v-file-input>
              <v-file-input label="Level Specific Storyboard" prepend-icon="mdi-json"></v-file-input>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-col>
        <v-col lg="4" md="4" sm="12">
          <v-expansion-panel>
            <v-expansion-panel-header class="purple darken-2" @click="toggleHard()">Hard</v-expansion-panel-header>
            <v-expansion-panel-content class="purple darken-4">
              <v-text-field
                class="mt-4"
                label="Difficulty"
                type="number"
                hint="*Required. Value below 1 will show '?' while above 15 as '15+'"
                persistent-hint
                outlined
                :rules="charts.hard.use ? required : true"
                prepend-icon="mdi-counter"
              ></v-text-field>
              <v-file-input
                label="Chart File"
                outlined
                hint="*Required"
                persistent-hint
                :rules="charts.hard.use ? required : true"
                prepend-icon="mdi-text"
              ></v-file-input>
              <v-text-field
                label="Custom Difficulty Name"
                hint="Optional"
                class="my-4"
                prepend-icon="mdi-tag-text-outline"
              ></v-text-field>

              <v-file-input label="Music Override" prepend-icon="mdi-file-music"></v-file-input>
              <v-file-input label="Level Specific Storyboard" prepend-icon="mdi-json"></v-file-input>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-col>
        <v-col lg="4" md="4" sm="12">
          <v-expansion-panel>
            <v-expansion-panel-header class="red darken-2" @click="toggleEX()">EX</v-expansion-panel-header>
            <v-expansion-panel-content class="red darken-4">
              <v-text-field
                class="mt-4"
                label="Difficulty"
                type="number"
                hint="*Required. Value below 1 will show '?' while above 15 as '15+'"
                persistent-hint
                outlined
                :rules="charts.EX.use ? required : true"
                prepend-icon="mdi-counter"
              ></v-text-field>
              <v-file-input
                label="Chart File"
                outlined
                hint="*Required"
                persistent-hint
                :rules="charts.EX.use ? required : true"
                prepend-icon="mdi-text"
              ></v-file-input>
              <v-text-field
                label="Custom Difficulty Name"
                hint="Optional"
                class="my-4"
                prepend-icon="mdi-tag-text-outline"
              ></v-text-field>

              <v-file-input label="Music Override" prepend-icon="mdi-file-music"></v-file-input>
              <v-file-input label="Level Specific Storyboard" prepend-icon="mdi-json"></v-file-input>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-col>
      </v-row>
    </v-expansion-panels>
  </v-col>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Charts",
  data() {
    return {
      required: [v => (v != "" && v != null) || "Please fill out this field"]
    };
  },
  methods: {
    ...mapMutations([
      // ! Easy
      "toggleEasy",
      "setDifficultyEasy",
      "setCustomNameEasy",
      "setChartEasy",
      "setMusicEasy",
      "setCustomStoryboardEasy",

      // ! Hard
      "toggleHard",
      "setDifficultyHard",
      "setCustomNameHard",
      "setChartHard",
      "setMusicHard",
      "setCustomStoryboardHard",

      // ! EX
      "toggleEX",
      "setDifficultyEX",
      "setChartEasy",
      "setMusicEX",
      "setCustomStoryboardEX",
      "setCustomNameEX"
    ])
  },
  computed: {
    ...mapState(["charts"]),
    _EasyState() {
      return this.charts.easy.use;
    },

    // * Easy
    _easyDifficulty: {
      get() {
        return this.charts.easy.diffulty;
      },
      set(val) {
        this.setDifficultyEasy(val);
      }
    },
    _easyMusic: {
      get() {
        return this.charts.easy.music;
      },
      set(val) {
        this.setMusicEasy(val);
      }
    }
  }
};
</script>

<style>
</style>
