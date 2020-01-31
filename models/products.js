const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
    console.log(this.title)
  }
}
