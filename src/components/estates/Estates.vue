<template>
  <div class="estates">
    <div class="row-flex estates-inner">
      <div
        class="mv_12 mh_6 tb_6 ds_4 estates__item-outer"
        v-for="item in estates"
        :key="item.id"
      >
        <EstatesItem :item="item"></EstatesItem>
      </div>
    </div>
  </div>
</template>

<script>
import EstatesItem from "@/components/estates/EstatesItem.vue";

export default {
  name: "Estates",

  components: {
    EstatesItem,
  },

  created() {
    this.$store.dispatch("fetchEstates");
  },

  computed: {
    searchStatus() {
      return this.$store.getters.getSearchStatus;
    },

    estates() {
      if (this.searchStatus) {
        return this.estatesSearched;
      }
      return this.estatesInitial;
    },

    estatesInitial() {
      return this.$store.getters.getEstates;
    },

    estatesSearched() {
      return this.$store.getters.getEstatesSearched;
    },
  },
};
</script>

<style lang="scss" scoped></style>
