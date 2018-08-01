<template>
  <div>
    <v-system-bar id="routing-action-bar" window color="white">
      <v-spacer></v-spacer>
      <v-btn color="white" :disabled="!canCopy" light><v-icon color="black">file_copy</v-icon>Copy</v-btn>
      <v-btn color="white" :disabled="!canCopy" light @click="showResequence()"><v-icon color="black">low_priority</v-icon>Resequence</v-btn>
      <v-btn color="primary" darken-3 dark @click="create()"><v-icon color="white">add</v-icon>New</v-btn>
    </v-system-bar>
    <v-layout row justify-center>
      <v-dialog v-model="resequenceDialog" persistent max-width="500px">
        <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
          <form>
          <v-card>
            <v-card-title class='header'>
              <span>Resequence - {{activeRoute.route}}</span>
            </v-card-title>
            <v-card-text>
                <v-layout row>
                  <v-container>
                    <v-layout row>
                      <v-flex>
                        <v-text-field 
                          v-model="resequenceConfig.start" 
                          label='Starting Value' 
                          :error-messages="startErrors"
                          @input="$v.resequenceConfig.start.$touch" 
                          @blur="$v.resequenceConfig.start.$touch" 
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex>
                        <v-text-field 
                          v-model="resequenceConfig.increment" 
                          label="Increment" 
                          :error-messages="incrementErrors"
                          @input="$v.resequenceConfig.increment.$touch" 
                          @blur="$v.resequenceConfig.increment.$touch"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-layout>
            </v-card-text>
            <v-card-actions class='footer'>
              <v-spacer></v-spacer>
              <v-btn :disabled="this.$v.$invalid" color="primary" @click.native="resequenceDialog = false;resequence();">Resequence</v-btn>
              <v-btn color="default" @click.native="resequenceDialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
          </form>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, integer, between } from 'vuelidate/lib/validators'
  import axios from 'axios';

  export default {
    mixins: [validationMixin],

    data () {
      return {
        resequenceDialog: false,
        newDialog: false,
        resequenceConfig: {
          start: 30,
          increment: 30
        },
        resequenceFormValid: false
      }
    },
    validations: {
      resequenceConfig: {
        start: {
          required,
          integer,
          between: between(1, 9999)
        },
        increment: {
          required,
          integer,
          between: between(1, 9999)
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
      startErrors () {
        const errors = []
        if (!this.$v.resequenceConfig.start.$dirty) return errors
        !this.$v.resequenceConfig.start.required && errors.push('Required.')
        !this.$v.resequenceConfig.start.integer && errors.push('Must be and integer')
        !this.$v.resequenceConfig.start.between && errors.push('Must be between 1 - 9999')
        return errors
      },
      incrementErrors () {
        const errors = []
        if (!this.$v.resequenceConfig.increment.$dirty) return errors
        !this.$v.resequenceConfig.increment.required && errors.push('Required.')
        !this.$v.resequenceConfig.increment.integer && errors.push('Must be and integer')
        !this.$v.resequenceConfig.increment.between && errors.push('Must be between 1 - 9999')
        return errors
      }
    },
    methods: {
      showResequence() {
        if ( this.isAvailable() ) {
          this.resequenceDialog = true
        }
      },
      resequence() {
        this.$v.$touch()
        const api = `http://localhost:3000/resequence`
        axios.post(api, {
          start: this.resequenceConfig.start,
          increment: this.resequenceConfig.increment,
          route: this.$store.state.activeRoute.route
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
      },
      isNumber(value){
        return typeof value === 'number' && isFinite(value);
      },
      create() {
        
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
