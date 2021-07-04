<template>
  <div>
    <section class="section section-title">
      <div class="container">
        <div class="row">
          <div class="mv_12">
            <h1 class="page-title">Our Latest Developments</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-filter">
      <div class="container">
        <div class="row">
          <div class="mv_12 tb_8 ds_5">
            <FilterSearch></FilterSearch>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-estates">
      <div class="container">
        <Estates></Estates>

        <div class="row section__footer">
          <div class="mv_12 centered">
            <a href="#" class="button button-more">
              See more
              <i>
                <svg
                  width="7"
                  height="17"
                  viewBox="0 0 7 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Chevron"
                    d="M1 1L5.043 8.41667L1 15.8333"
                    stroke="#363636"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Estates from "./components/estates/Estates.vue";
import FilterSearch from "./components/filter/Filter.vue";

export default {
  name: "App",
  components: {
    Estates,
    FilterSearch,
  },
};
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
