<template>
  <v-col cols="12" class="d-flex flex-column">
    <h3 class="headline">Charts</h3>
    <p class="caption font-italic">
      *Outlined inputs are mandatory.
      <br />**At least one difficulty must be used.
      <br />***Expanding the panel means you declare you will use the difficulty. Close the panel if you don't use it or else validation will be fired on it and get errors.
    </p>
    <v-divider class="mb-4"></v-divider>
    <v-expansion-panels multiple>
      <v-row>
        <v-col lg="4" md="4" sm="12">
          <v-expansion-panel>
            <v-expansion-panel-header class="cyan darken-2" @click="easy.use = !easy.use;">Easy</v-expansion-panel-header>
            <v-expansion-panel-content class="cyan darken-4">
              <v-text-field
                class="mt-4"
                label="Difficulty"
                type="number"
                hint="*Required. Value below 1 will show '?' while above 15 as '15+'"
                persistent-hint
                prepend-icon="mdi-counter"
                outlined
                v-model="easy.difficulty"
              ></v-text-field>
              <v-text-field
                label="Custom Difficulty Name"
                hint="Optional"
                class="my-4"
                prepend-icon="mdi-tag-text-outline"
                v-model="easy.name"
              ></v-text-field>
              <v-file-input
                label="Chart File"
                outlined
                hint="*Required"
                persistent-hint
                prepend-icon="mdi-text"
              ></v-file-input>
              <v-file-input label="Custom Music" prepend-icon="mdi-file-music"></v-file-input>
              <v-file-input label="Custom Storyboard" prepend-icon="mdi-json"></v-file-input>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-col>
        <v-col lg="4" md="4" sm="12">
          <v-expansion-panel>
            <v-expansion-panel-header class="purple darken-2" @click="hard.use = !hard.use;">Hard</v-expansion-panel-header>
            <v-expansion-panel-content class="purple darken-4">
              <v-text-field
                class="mt-4"
                label="Difficulty"
                type="number"
                hint="*Required. Value below 1 will show '?' while above 15 as '15+'"
                persistent-hint
                outlined
                prepend-icon="mdi-counter"
              ></v-text-field>
              <v-text-field
                label="Custom Difficulty Name"
                hint="Optional"
                class="my-4"
                prepend-icon="mdi-tag-text-outline"
              ></v-text-field>
              <v-file-input
                label="Chart File"
                outlined
                hint="*Required"
                persistent-hint
                prepend-icon="mdi-text"
              ></v-file-input>
              <v-file-input label="Custom Music" prepend-icon="mdi-file-music"></v-file-input>
              <v-file-input label="Custom Storyboard" prepend-icon="mdi-json"></v-file-input>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-col>
        <v-col lg="4" md="4" sm="12">
          <v-expansion-panel>
            <v-expansion-panel-header class="red darken-2" @click="EX.use = !EX.use;">EX</v-expansion-panel-header>
            <v-expansion-panel-content class="red darken-4">
              <v-text-field
                class="mt-4"
                label="Difficulty"
                type="number"
                hint="*Required. Value below 1 will show '?' while above 15 as '15+'"
                persistent-hint
                outlined
                prepend-icon="mdi-counter"
              ></v-text-field>
              <v-text-field
                label="Custom Difficulty Name"
                hint="Optional"
                class="my-4"
                prepend-icon="mdi-tag-text-outline"
              ></v-text-field>
              <v-file-input
                label="Chart File"
                outlined
                hint="*Required"
                persistent-hint
                prepend-icon="mdi-text"
              ></v-file-input>
              <v-file-input label="Custom Music" prepend-icon="mdi-file-music"></v-file-input>
              <v-file-input label="Custom Storyboard" prepend-icon="mdi-json"></v-file-input>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-col>
      </v-row>
    </v-expansion-panels>
  </v-col>
</template>

<script>
export default {
  name: "Charts",
  data() {
    return {
      easy: {
        use: false,
        name: "",
        difficulty: null,
        path: "",
        storyboard: "",
        musicOverride: ""
      },
      hard: {
        use: false,
        name: "",
        difficulty: 1,
        path: "",
        storyboard: "",
        musicOverride: ""
      },
      EX: {
        use: false,
        name: "",
        difficulty: 1,
        path: "",
        storyboard: "",
        musicOverride: ""
      }
    };
  },
  methods: {},
  computed: {}
};
</script>

<style>
</style>
