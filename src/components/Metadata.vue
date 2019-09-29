<template>
  <v-col cols="12">
    <h3 class="headline">Metadata</h3>
    <p class="caption font-italic">*Outlined inputs are mandatory</p>
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
          prepend-inner-icon="mdi-numeric"
          placeholder="1"
          type="number"
          outlined
          messages="For a new chart, best to put 1 as chart version. If editing an existing one, make sure to put higher value than previous one. Defaults to 1 if you don't fill this manually."
          v-model="_chartVersion"
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="3">
        <v-text-field
          v-model="_chartAuthor"
          prepend-inner-icon="mdi-account"
          label="Chart Author"
          outlined
          class="red--text"
          messages="*Required"
          :rules="required"
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="3">
        <v-text-field
          v-model="_musicTitle"
          prepend-inner-icon="mdi-music"
          label="Music Title."
          messages="*Required. The original title."
          outlined
          :rules="required"
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="3">
        <v-text-field
          v-model="_musicTitleLocalized"
          label="Music Title (Localized)"
          prepend-inner-icon="mdi-music-box"
          messages="Only needed if the original title is not in english. Strictly optional."
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="3">
        <v-text-field
          label="Chart ID"
          :placeholder="(chartAuthor && musicTitle) ? __chartId : ''"
          prepend-inner-icon="mdi-identifier"
          messages="Only supports latin texts, numbers and dash-underscore-dot symbols . Change this value if it does not appear as you wish it. All values will turn to lowercase and unsupported values turn to underscores."
          outlined
          v-model="_chartId"
        ></v-text-field>
      </v-col>

      <v-col sm="12" md="6" lg="4">
        <v-text-field
          v-model="_musicArtist"
          label="Music Artist"
          prepend-inner-icon="mdi-artist"
          messages="*Required."
          :rules="required"
          outlined
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="4">
        <v-text-field
          v-model="_musicArtistLocalized"
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
          :rules="URLRule"
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="6">
        <v-text-field
          label="Picture Author"
          messages="*Required."
          prepend-inner-icon="mdi-account"
          outlined
          :rules="required"
        ></v-text-field>
      </v-col>
      <v-col sm="12" md="6" lg="6">
        <v-text-field
          label="Picture Source"
          messages="*Required. URL link where the picture can be found. Like pixiv."
          prepend-inner-icon="mdi-link"
          outlined
          :rules="URLRule"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { mapState, mapMutations } from "vuex";
const urlRegex = /^(ftp|https?):\/\/[^ "]+$/;
export default {
  name: "Metadata",
  data() {
    return {
      required: [v => !!v || "Please fill this field"],
      URLRule: [
        v => !!v || "Please fill this field",
        v => urlRegex.test(v) || "Wrong URL format"
      ]
    };
  },
  computed: {
    ...mapState([
      "chartVersion",
      "chartAuthor",
      "musicTitle",
      "musicTitleLocalized",
      "chartId",
      "_chartId",
      "musicArtist",
      "musicArtistLocalized",
      "musicSource",
      "pictureAuthor",
      "pictureSource"
    ]),

    _chartVersion: {
      get() {
        return this.chartVersion;
      },
      set(val) {
        this.setChartVersion(val);
      }
    },

    _chartAuthor: {
      get() {
        return this.chartAuthor;
      },
      set(val) {
        this.setChartAuthor(val);
      }
    },

    _musicTitle: {
      get() {
        return this.musicTitle;
      },
      set(val) {
        this.setMusicTitle(val);
      }
    },

    _musicTitleLocalized: {
      get() {
        return this.musicTitleLocalized;
      },
      set(val) {
        this.setMusicTitleLocalized(val);
      }
    },

    _chartId: {
      get() {
        return this.chartId;
      },
      set(val) {
        let foo = val
          .trim()
          .replace(/\s/g, "_")
          .replace(/[^\dA-Za-z_\-\.]/g, "_")
          .toLowerCase();
        this.setChartId(foo);
      }
    },

    __chartId: {
      get() {
        let author = this.chartAuthor
          .trim()
          .replace(/\s/g, "_")
          .replace(/[^\dA-Za-z_\-\.]/g, "_")
          .toLowerCase();
        let music = this.musicTitle
          .trim()
          .replace(/\s/g, "_")
          .replace(/[^\dA-Za-z_\-\.]/g, "_")
          .toLowerCase();
        return author + "." + music;
      },
      set() {
        return;
      }
    },
    _musicArtist: {
      get() {
        return this.musicArtist;
      },
      set(val) {
        this.setMusicArtist(val);
      }
    },
    _musicArtistLocalized: {
      get() {
        return this.musicArtistLocalized;
      },
      set(val) {
        this.setMusicArtistLocalized(val);
      }
    }
  },
  methods: {
    ...mapMutations([
      "setChartVersion",
      "setChartAuthor",
      "setMusicTitle",
      "setMusicTitleLocalized",
      "setChartId",
      "set_ChartId",
      "setMusicArtist",
      "setMusicArtistLocalized",
      "setMusicSource",
      "setPictureAuthor",
      "setPictureSource"
    ])
  }
};
</script>

<style scoped>
.red-text-field >>> .v-text-field__slot input {
  color: red;
}
</style>
