<template>
  <div class="filter">
    <div class="filter__field field">
      <div class="field-inner">
        <label for="filter_title">Filter</label>
        <input
          type="text"
          id="filter_title"
          name="filter_title"
          v-model="inputText"
          @input="onInput"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filter",

  data() {
    return {
      inputText: "",
    };
  },

  methods: {
    onInput() {
      // Reset results, if input clean
      if (this.inputText.length == 0) {
        setTimeout(() => {
          this.$store.dispatch("setSearchStatus", false);
          this.$store.dispatch("resetSearchedEstates");
        }, 400);
        return;
      }

      // Nothing, if 1-3 chars entered
      if (this.inputText.length < 4) {
        return;
      }

      // Search results
      let inputText = this.inputText;
      setTimeout(() => {
        this.$store.dispatch("setSearchStatus", true);
        this.$store.dispatch("searchEstates", {
          inputText,
        });
      }, 400);
    },
  },
};
</script>

<style lang="scss" scoped></style>
