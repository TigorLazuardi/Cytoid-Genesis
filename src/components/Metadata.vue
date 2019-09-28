<template>
  <v-col cols="12">
    <h3 class="headline">Metadata</h3>
    <v-divider></v-divider>
    <v-row>
      <v-col sm="12" md="6" lg="6">
        <v-text-field
          label="Schema Version"
          value="2"
          disabled
          messages="Unless otherwise stated, Schema Version is always '2'"
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="6">
        <v-text-field
          label="Chart Version"
          placeholder="1"
          type="number"
          outlined
          messages="For a new chart, best to put 1 as chart version. If editing an existing one, make sure to put higher value than previous one."
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="3">
        <v-text-field
          v-model="chartAuthor"
          prepend-inner-icon="mdi-account"
          label="Chart Author"
          messages="*Required."
          outlined
          class="red--text"
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="3">
        <v-text-field
          v-model="musicTitle"
          prepend-inner-icon="mdi-music"
          label="Music Title"
          messages="*Required."
          outlined
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="3">
        <v-text-field
          v-model="musicTitleLocalized"
          label="Music Title (Localized)"
          prepend-inner-icon="mdi-music-box"
          hint="Optional"
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="3">
        <v-text-field
          label="Chart ID"
          :placeholder="_chartId"
          prepend-inner-icon="mdi-identifier"
          messages="Only supports latin texts and numbers. Change this value if it does not appear as you wish it. All values will be lowercased and no symbols supported."
          outlined
        ></v-text-field>
      </v-col>

      <v-col sm="12" md="6" lg="4">
        <v-text-field
          label="Music Artist"
          prepend-inner-icon="mdi-artist"
          messages="*Required."
          outlined
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="4">
        <v-text-field
          label="Music Artist (Localized)"
          prepend-inner-icon="mdi-artist-outline"
          hint="Optional"
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="4">
        <v-text-field
          label="Music Source"
          messages="*Required. URL link where the music can be found. Like Youtube link or Artist's page."
          prepend-inner-icon="mdi-link"
          outlined
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="6">
        <v-text-field label="Picture Author" messages="*Required." prepend-inner-icon="mdi-account"></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="6">
        <v-text-field
          label="Picture Author"
          messages="*Required. URL link where the picture can be found. Like pixiv."
          prepend-inner-icon="mdi-link"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      chartAuthor: "",
      musicTitle: "",
      chartId: "",
      musicTitleLocalized: ""
    };
  },
  computed: {
    _chartId: {
      get() {
        let author = this.chartAuthor
          .replace(/\s/g, "_")
          .replace(/[^\dA-Za-z_\-\.]/g, "")
          .toLowerCase();
        let music = this.musicTitle
          .replace(/\s/g, "_")
          .replace(/\W/g, "")
          .toLowerCase();
        return author + "." + music;
      },
      set() {
        this.chartId = this._chartId;
      }
    }
  }
};
</script>

<style scoped>
.red-text-field >>> .v-text-field__slot input {
  color: red;
}
</style>
