<template>
  <div class="estates">
    <div class="row-flex estates-inner">
      <div
        class="mv_12 mh_6 tb_6 ds_4 estates__item-outer"
        v-for="item in estates"
        :key="item.id"
      >
        <EstatesItem class="asd" :item="item"></EstatesItem>
      </div>

      <div
        class="mv_12 _mh_6 tb_6 ds_4 estates__item-outer"
        style="display: none"
      >
        <div class="estates__item estates__item--type--independent-living">
          <a href="/details/[id]" class="estates__item-image-outer">
            <div class="estates__item-image">
              <img
                src="https://source.unsplash.com/random/600x400"
                alt="Brunlees Court"
              />
              <div
                class="
                  estates__item-badge
                  badge badge--type--independent-living
                "
              >
                Independent living
              </div>
            </div>
          </a>

          <div class="estates__item-content">
            <h3 class="estates__item-title">Brunlees Court</h3>
            <div class="estates__item-address">
              19-23 Cambridge Road, Southport
            </div>
            <div class="estates__item-price">
              New Properties for Sale from
              <span class="estates__item-price-value">£214,999</span>
            </div>
            <div class="estates__item-notice">Shared Ownership Available</div>
          </div>
        </div>
      </div>

      <div
        class="mv_12 _mh_6 tb_6 ds_4 estates__item-outer"
        style="display: none"
      >
        <div class="estates__item estates__item--type--support-available">
          <a href="/details/[id]" class="estates__item-image-outer">
            <div class="estates__item-image">
              <img src="uploads/estates-item-2-image.jpg" alt="Grove Court" />
              <div
                class="estates__item-badge badge badge--type--support-available"
              >
                Restaurant & Support available
              </div>
            </div>
          </a>

          <div class="estates__item-content">
            <h3 class="estates__item-title">Grove Court</h3>
            <div class="estates__item-address">
              19-23 Cambridge Road, Southport
            </div>
            <div class="estates__item-price">
              New Properties for Sale from
              <span class="estates__item-price-value">£214,999</span>
            </div>
            <div class="estates__item-notice">Shared Ownership Available</div>
          </div>
        </div>
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

    // v3 with searchStatus
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
