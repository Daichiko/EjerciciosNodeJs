Object.defineProperty(String.prototype, "toJadenCase", {
  value: function toJadenCase() {
    return this.split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  },
});

// Example usage:
const notJaden = "most trees are blue";
const jadenCased = notJaden.toJadenCase();
console.log(`Not Jaden-Cased: ${notJaden}`);
console.log(`Jaden-Cased: ${jadenCased}`);

const anotherNotJaden = "the quick brown fox jumps over the lazy dogs";
const anotherJaden = anotherNotJaden.toJadenCase();
console.log(`Not Jaden-Cased: ${anotherNotJaden}`);
console.log(`Jaden-Cased: ${anotherJaden}`);

const withContraction = "i'm a little teapot";
const jadenContraction = withContraction.toJadenCase();
console.log(`Not Jaden-Cased: ${withContraction}`);
console.log(`Jaden-Cased: ${jadenContraction}`);
