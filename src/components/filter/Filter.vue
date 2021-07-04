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
      // Обнулить результаты, если ввод очистили
      if (this.inputText.length == 0) {
        setTimeout(() => {
          this.$store.dispatch("setSearchStatus", false);
          this.$store.dispatch("resetSearchedEstates");
        }, 400);
        return;
      }

      // Ничего не делать, если введено от 1-3 символа
      if (this.inputText.length < 4) {
        return;
      }

      // Найти, если введено
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
