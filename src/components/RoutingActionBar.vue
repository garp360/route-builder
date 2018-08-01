<template>
  <div>
    <v-system-bar id="routing-action-bar" window color="white">
      <v-spacer></v-spacer>
      <v-btn color="white" :disabled="!canCopy" round light><v-icon color="black">file_copy</v-icon>Copy</v-btn>
      <v-btn color="white" :disabled="!canCopy" round light @click="resequence()"><v-icon color="black">low_priority</v-icon>Resequence</v-btn>
      <v-btn color="primary" darken-3 round dark @click="create()"><v-icon color="white">add</v-icon>New</v-btn>
    </v-system-bar>
    <v-layout row justify-center>
      <v-dialog v-model="resequenceDialog" persistent max-width="500px">
        <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
        <v-card>
          <v-card-title class='header'>
            <span>Resequence - {{activeRoute.route}}</span>
          </v-card-title>
          <v-card-text>
            <v-layout row>
              <v-container>
                <v-layout row>
                  <v-flex>
                    <v-text-field v-model="resequenceConfig.start" label="Starting Value" required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field v-model="resequenceConfig.increment" label="Increment" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-container>
                <v-layout row>
                  <v-flex>
                    <v-text-field v-model="resequenceConfig.start" label="Starting Value" required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field v-model="resequenceConfig.increment" label="Increment" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-layout>
          </v-card-text>
          <v-card-actions class='footer'>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click.native="resequenceDialog = false">Save</v-btn>
            <v-btn color="default" @click.native="resequenceDialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="newDialog" persistent max-width="500px">
        <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
        <v-card>
          <v-card-title class='header'>
            <span>Create Route</span>
          </v-card-title>
          <v-card-text>
            <v-layout row>
              <v-container>
                <v-layout row>
                  <v-flex>
                    <v-text-field v-model="resequenceConfig.start" label="Starting Value" required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field v-model="resequenceConfig.increment" label="Increment" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-container>
                <v-layout row>
                  <v-flex>
                    <v-text-field v-model="resequenceConfig.start" label="Starting Value" required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field v-model="resequenceConfig.increment" label="Increment" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-layout>
          </v-card-text>
          <v-card-actions class='footer'>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click.native="newDialog = false">Save</v-btn>
            <v-btn color="default" @click.native="newDialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
  export default {
  data () {
    return {
      resequenceDialog: false,
      newDialog: false,
      resequenceConfig: {
        start: 30,
        increment: 30
      }
    }
  },
  computed: {
    canCopy () {
      return this.isAvailable() 
    },
    activeRoute () {
      return this.$store.state.activeRoute
    },
  },
  methods: {
    resequence() {
      if(this.isAvailable()) {
      this.resequenceDialog = true
      }
    },
    create() {
      this.newDialog = true
    },
    isAvailable() {
      return this.$store.state.activeRoute.hasOwnProperty('id') && !this.$store.state.activeRoute.hasOwnProperty('activityStatus')
    }

  }
}

</script>

<style lang="scss" scoped>
 #routing-action-bar {
   height: 50px !important;
 }

.header {
   background-color: rgb(60, 91, 177);
   color: #fff;
    span {
      font-size: 1.5em;
      font-weight: bold;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      min-height: 33px;
    }
 }

 .footer {
    background-color: #ccc;
    min-height: 60px;
 }

</style>
