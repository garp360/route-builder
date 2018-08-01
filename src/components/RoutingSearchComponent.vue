<template>
  <ag-grid-vue style='height: 100%; width: 100%'
                class='ag-theme-balham'
                :gridOptions='gridOptions'
                :rowData='rowData'
                :onGridReady='onGridReady'
                :rowDataChanged='onRowDataChanged'
                :selectionChanged='onSelectionChanged'
                :gridSizeChanged='onGridSizeChanged'
                :rowClicked='onRowClicked'
                :pagination=true
                :enableSorting=true
                :showToolPanel=true
                :enableFilter=true
                rowSelection="single">
    </ag-grid-vue>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import Vue from 'vue'
import moment from 'moment'
import axios from 'axios';

export default {
  name: 'routing-search-component',
  data () {
    return {
      rowData: null,
      gridOptions: null
    }
  },
  components: {
    AgGridVue
  },
  methods: {
    onGridReady (params) {
      this.gridApi = params.api
      this.columnApi = params.columnApi
      this.gridOptions.api.sizeColumnsToFit()
    },
    onRowDataChanged () {
      Vue.nextTick ( () => {
        this.gridOptions.api.sizeColumnsToFit()
      })
    },
    onRowClicked () {
      // var selectedRows = this.gridOptions.api.getSelectedRows()
      // this.$store.commit('activate', selectedRows[0])
    },
    onSelectionChanged () {
      var selectedRows = this.gridOptions.api.getSelectedRows()
      this.$store.commit('activate', selectedRows[0])
    },
    onGridSizeChanged () {
      this.gridOptions.api.sizeColumnsToFit()
    },
    load () {
      const api = `http://localhost:3000/routes`
      axios
        .get(api)
        .then(response => {
          this.rowData = response.data
        })
        .catch(error => {
          this.errMsg = 'Week not found [' + error + ']'
          this.rowData = []
      })
    }
  },
  created () {
    this.gridOptions = {
      rowSelection:'single'
    }
    this.gridOptions.columnDefs = [
      { headerName: ' ', field: '', checkboxSelection: true, maxWidth: 70},
      { headerName: 'Released', field: 'released', minWidth: 80, maxWidth: 100 },
      { headerName: 'Route', field: 'route', minWidth: 80,
        cellRenderer: function(params) {
          return '<a href="https://www.google.com" target="_blank">'+ params.value+'</a>'
        } 
      },
      { headerName: 'Part', field: 'part', minWidth: 80 },
      { headerName: 'Workscope', field: 'workscope', minWidth: 80 },
    ]
    this.load ()
  }
}

</script>

<style lang='scss'>

#page {
  position:absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

#grid {
  position:absolute;
  top: 70px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

#bar {
  position:absolute;
  top: 2px;
  left: 6px;
  right: 6px;
}

.ag-theme-balham .ag-cell-inline-editing select {
    height: 100% !important;
}

.ag-theme-balham .ag-root {
    border: none !important;
}

.ag-theme-balham .ag-paging-panel {
    background-color: #cccccc !important;
}
</style>

