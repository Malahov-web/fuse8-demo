<template>
  <article class="estates__item estates__item--type--independent-living">
    <a class="estates__item-image-outer" :href="'/details/' + item.id">
      <div class="estates__item-image">
        <img
          src="https://source.unsplash.com/random/600x400"
          :alt="item.title"
        />
        <div
          class="estates__item-badge badge __badge--type--independent-living"
          :class="'badge--type--' + formatTypeToKebab(item.type)"
        >
          <!-- Independent living -->
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
        <!-- <span class="estates__item-price-value">£214,999</span> -->
        <span class="estates__item-price-value">
          <!-- {{ addCurrencyToPrice(this.price) }} -->
          <span class="estates__item-price-value-currency">£</span
          >{{ formatPrice(item.price) }}
        </span>
      </div>
      <div class="estates__item-notice">Shared Ownership Available</div>
    </div>
  </article>
</template>

<script>
import kebabCase from "lodash.kebabcase"; // +
import lowerCase from "lodash.lowercase"; // ! Need to additionaly install lodash.lowercase
import upperFirst from "lodash.upperfirst";
// import chunk from "lodash.chunk";

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

  data() {
    return {
      example: {
        id: "1",
        title: "Brunlees Court",
        address: "19-23 Cambridge Road, Southport",
        type: "IndependentLiving",
        price: 48555300, // price: 48 300,
      },
    };
  },

  // computed: {
  //   formatPrice() {
  //     let price = this.price;
  //     let digitsArray = chunk(price, 3);

  //     return digitsArray;

  //     // _.chunk(['a', 'b', 'c', 'd'], 3);
  //     // => [['a', 'b', 'c'], ['d']]
  //   },
  // },

  methods: {
    addCurrencyToPrice(price) {
      return "£" + price;
    },

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
    // v1
    // formatPrice(price) {
    //   // console.log("price.toString()");
    //   // console.log(price.toString());
    //   let priceReverseArray = price.toString().split("").reverse(); // массив наоборот
    //   // let priceStr = price.toString().split(""); // массив наоборот
    //   // console.log("priceStr");
    //   // console.log(priceStr);
    //   let digitsArray = chunk(priceReverseArray, 3);
    //   // let newDigitsArray = digitsArray.join(",");

    //   let newDigitsArray = [];
    //   for (let i = 0; i < digitsArray.length; i++) {
    //     newDigitsArray.push(digitsArray[i].join(""));
    //   }

    //   // return newDigitsArray.reverse();
    //   return newDigitsArray;
    //   // return digitsArray;

    //   // _.chunk(['a', 'b', 'c', 'd'], 3);
    //   // => [['a', 'b', 'c'], ['d']]
    // },

    // v2
    formatPrice(price) {
      // console.log(chunk(["a", "b", "c", "d"], 3));
      let digitsArray = price.toString().split("").reverse();
      // let digitsArray = price.toString();
      let formattedPrice = "";

      for (let i = 0; i < digitsArray.length; i++) {
        formattedPrice += digitsArray[i];

        if ((i + 1) % 3 == 0 && i < digitsArray.length - 1) {
          formattedPrice += ",";
        }
      }

      // return formattedPrice.split("").reverse().join(","); // - между каждой цифрой запятая
      // return formattedPrice.split(",").reverse().join(); // внутри троек цифры задом наперед
      // return formattedPrice.split(",").reverse(); // внутри троек цифры задом наперед
      // return formattedPrice;

      // let finalRes = formattedPrice.split(",");
      // let finalRes = formattedPrice.split(",").reverse(); // Вот здесь он переворачивает
      // return finalRes;

      // v
      return formattedPrice.split("").reverse().join("");
    },
  },
};
</script>

<style lang="scss" scoped></style>
