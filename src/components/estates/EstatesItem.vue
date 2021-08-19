<template>
  <article class="estates__item estates__item--type--independent-living">
    <a class="estates__item-image-outer" :href="'/details/' + item.id">
      <div class="estates__item-image">
        <img
          :src="'https://source.unsplash.com/random/600x400?sig=' + item.id"
          :alt="item.title"
        />
        <div
          class="estates__item-badge badge"
          :class="'badge--type--' + formatTypeToKebab"
        >
          {{ formatTypeToCapitalizedText }}
        </div>
      </div>
    </a>

    <div class="estates__item-content">
      <h3 class="estates__item-title" :title="item.title">
        {{ item.title }}
      </h3>
      <div class="estates__item-address">{{ item.address }}</div>
      <div class="estates__item-price">
        New Properties for Sale from
        <span class="estates__item-price-value">
          <span class="estates__item-price-value-currency">£</span
          >{{ formattedPrice }}
        </span>
      </div>
      <div class="estates__item-notice">Shared Ownership Available</div>
    </div>
  </article>
</template>

<script>
import kebabCase from "lodash.kebabcase";
import lowerCase from "lodash.lowercase"; // ! Need to additionaly install lodash.lowercase
import upperFirst from "lodash.upperfirst";

import chunk from "lodash.chunk";

export default {
  name: "EstatesItem",

  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  computed: {
    // v3
    formattedPrice() {
      let price = this.item.price;

      let priceReverseString = price.toString().split("").reverse();

      let priceArray = chunk(priceReverseString, 3);

      let priceComps = priceArray.map((item) => {
        return item.join("");
      }, "");

      let priceString = priceComps.join().split("").reverse().join("");

      return priceString;
    },

    formatTypeToKebab() {
      return kebabCase(this.item.type);
    },

    formatTypeToCapitalizedText() {
      let type = this.item.type;
      let wordsArray = lowerCase(type).split(" "); // [string, string]

      return wordsArray
        .map((item) => {
          return upperFirst(item);
        })
        .join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
// TEMP DEV
.estates__item-image-outer {
  &:after {
    display: none !important;
  }
}
</style>
