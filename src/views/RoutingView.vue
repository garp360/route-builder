<template>
  <v-card id='page' flat>
    <v-card flat id='h-action-bar'>
      <routing-action-bar></routing-action-bar>
    </v-card>
    <v-card flat id='h-grid'>
      <routing-search-component></routing-search-component>
    </v-card>
  </v-card>
</template>

<script>
import RoutingSearchComponent from '@/components/RoutingSearchComponent'
import RoutingActionBar from '@/components/RoutingActionBar'

export default {
  data () {
    return {
      
    }
  },
  components: {
    RoutingSearchComponent,
    RoutingActionBar
  },
  methods: {
   
  }
}

</script>

<style>
#page {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right:0px;
}

#h-action-bar {
  
}

#h-grid {
  position: absolute;
  top: 55px;
  bottom: 0px;
  left: 0px;
  right:0px;
}

.h-10pct {
  height:10%;
}
.h-90pct {
  height:90%;
}
.h-20pct {
  height:20%;
}
.h-80pct {
  height:80%;
}

.h-100pct {
  height:100%;
}

.ag-theme-balham .ag-cell-inline-editing select {
    height: 100% !important;
}

.ag-theme-balham .ag-root {
    border: none !important;
    border-top: 1px solid #ddd !important;
}

.ag-theme-balham .ag-paging-panel {
    background-color: #cccccc !important;
}
</style>

