<template>
  <v-form ref="form" @submit.prevent="submit">
      <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex xs12 sm2>
            <v-text-field
              v-model="form.route"
              color="green darken-3"
              label="Route"
              required
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm3>
            <v-text-field
              v-model="form.part"
              color="green darken-3"
              label="Part"
              required
              outline
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm2>
            <v-text-field
              v-model="form.workscope"
              color="green darken-3"
              label="Workscope"
              required
              outline
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'routing-criteria-component',
    data () {
      const defaultForm = Object.freeze({
        route: '',
        part: '',
        workscope: '',
        released: true
      })

      return {
        form: Object.assign({}, defaultForm),
        defaultForm
      }
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      }
    }
  }
</script>

<style scoped>
  .item {
    height: 350px;
    width: 400px;
    min-height: 50px;
    min-width: 80px;
    margin: 10px;
  }

#criteriaForm {
  z-index: 100;
  border: 1px solid #cccccc;
}

</style>

