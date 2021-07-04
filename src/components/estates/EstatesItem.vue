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
          :class="'badge--type--' + formatTypeToKebab(item.type)"
        >
          {{ formatTypeToCapitalizedText(item.type) }}
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
    formattedPrice() {
      let price = this.item.price;
      let formattedPrice = "";

      let digitsArray = price.toString().split("").reverse();

      // add ',' after each 3 digits
      for (let i = 0; i < digitsArray.length; i++) {
        formattedPrice += digitsArray[i];

        if ((i + 1) % 3 == 0 && i < digitsArray.length - 1) {
          formattedPrice += ",";
        }
      }

      return formattedPrice.split("").reverse().join("");
    },
  },

  methods: {
    formatTypeToKebab(type) {
      return kebabCase(type);
    },

    formatTypeToCapitalizedText(type) {
      let wordsArray = lowerCase(type).split(" ");

      let wordsCapitalizedArray = wordsArray.map((item) => {
        return upperFirst(item);
      });

      return wordsCapitalizedArray.join(" ");
    },
  },
};
</script>

<style lang="scss" scoped></style>
