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
    // v1
    // formattedPrice() {
    //   let price = this.item.price;
    //   let formattedPrice = "";

    //   let digitsArray = price.toString().split("").reverse();

    //   // add ',' after each 3 digits
    //   for (let i = 0; i < digitsArray.length; i++) {
    //     formattedPrice += digitsArray[i];

    //     if ((i + 1) % 3 == 0 && i < digitsArray.length - 1) {
    //       formattedPrice += ",";
    //     }
    //   }

    //   return formattedPrice.split("").reverse().join("");
    // },

    // v2
    // 1. переворачиваем
    // 2. делим на 3 части
    // 3. склеиваем с разделителем
    // formattedPrice() {
    //   // let price = this.item.price;

    //   // let priceReverseString = price.toString().split("").reverse();

    //   let priceArray = chunk(priceReverseString, 3);

    //   let priceComps = priceArray.map((item) => {
    //     // return item.join("");
    //     return item.reverse().join("");
    //   }, "");

    //   // let result = priceComps.join(",");
    //   // let result = priceComps.reverse().join(",");

    //   // return priceComps; // 000 864
    //   // return priceComps.reverse(); // 864 000
    //   // return priceComps.reverse().join(",").split().reverse(); // 864 000

    //   return priceComps.reverse().join(",");
    // },
    //
    // v3
    formattedPrice() {
      let price = this.item.price;

      let priceReverseString = price.toString().split("").reverse();

      let priceArray = chunk(priceReverseString, 3);

      let priceComps = priceArray.map((item) => {
        return item.join("");
        // return item.reverse().join("");
      }, "");

      // let priceString = priceComps.join(); // "000,864 "
      // let priceString = priceComps.reverse().join(); // "864,000 "
      let priceString = priceComps.join().split("").reverse().join("");

      return priceString;
    },
  },

  methods: {
    formatTypeToKebab(type) {
      return kebabCase(type);
    },

    // // v1
    // formatTypeToCapitalizedText(type) {
    //   let wordsArray = lowerCase(type).split(" ");

    //   let wordsCapitalizedArray = wordsArray.map((item) => {
    //     return upperFirst(item);
    //   });

    //   return wordsCapitalizedArray.join(" ");
    // },

    // // v2
    // // Есть строка "IndependentLiving"
    // // Нужно получить Строку "Independent Living"
    // // Т.е. добавить пробел
    // formatTypeToCapitalizedText(type) {
    //   let wordsArray = lowerCase(type).split(" "); // [string, string]

    //   let result = wordsArray.reduce((sum, current, index, array) => {
    //     let separator = index < array.length - 1 ? " " : "";
    //     return sum + upperFirst(current) + separator;
    //   }, "");

    //   return result;
    // },

    // // v3
    // // Склеим строку с reduce - и обрежем пробелы с краев
    // formatTypeToCapitalizedText(type) {
    //   let wordsArray = lowerCase(type).split(" "); // [string, string]

    //   let result = wordsArray.reduce((sum, current) => {
    //     return sum + upperFirst(current) + " ";
    //   }, "");

    //   return result.trim();
    // },

    // v4
    // Склеим строку с reduce - и обрежем пробелы с краев
    formatTypeToCapitalizedText(type) {
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
