<template>
  <div class="q-pa-md q-gutter-sm bg-page">
    <q-breadcrumbs>
      <q-breadcrumbs-el :label="dataSource" clickable :to="dataSourceUrl" />
      <q-breadcrumbs-el :label="tableCaption" clickable :to="listUrl" />
      <q-breadcrumbs-el label="列表" />
    </q-breadcrumbs>

    <q-separator />

    <CTableListRead
      v-if="isShow"
      ref="rTablelistRead"
      :tableName="tableName"
      :dataSource="dataSource">
    </CTableListRead>
  </div>
</template>

<script>
import { tableService } from "../../../service";
import { metadataTableService } from "../../../service";
import { metadataRelationService } from "../../../service";
import { date } from "../../../utils";

export default {
  data () {
    return {
      dataSource: "",
      dataSourceUrl: "",
      tableName: "",
      tableCaption: "",
      listUrl: "",
      isShow: false
    }
  },

  async created() {
    await this.init();
  },

  mounted: function() {
    console.info('mounted');
  },

  activated: function() {
    console.info('activated');
  },

  deactivated: function() {
    console.info('deactivated');
  },

  updated: function() {
    console.info('updated');
  },

  destroyed: function() {
    console.info('destroyed');
  },

  async beforeRouteUpdate (to, from, next) {
    console.info('beforeRouteUpdate');
    await this.init(to.params.dataSource, to.params.tableName);
    next();
  },
  filters: {
  },
  methods: {
    async init(dataSource, tableName) {
      console.info("init:" + tableName);
      this.$store.commit(
        "config/updateIsAllowBack",
        this.$route.meta.isAllowBack
      );
      this.isShow = false;
      this.dataSource = dataSource || this.$route.params.dataSource;
      this.tableName = tableName || this.$route.params.tableName;
      this.dataSourceUrl = "/dataSource/" + this.dataSource;
      this.$nextTick(() => {
        this.isShow= true;
      });
      await this.loadMeta();
    },

    async loadMeta() {
      this.loading = true;
      try {
        const table = await metadataTableService.getByName(this.dataSource, this.tableName);
        this.tableCaption = table.caption;
        this.listUrl = "/dataSource/" + this.dataSource + "/business/" + this.tableName;

        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.error(error);
      }
    }
  }
}
</script>
