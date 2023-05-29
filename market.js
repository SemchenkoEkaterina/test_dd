market = (() => {
  const PRODUCT_TEMPLATE_ID = "producttemplateid";
  const CATEGOTY_TEMPLATE_ID = "sectiontemplateid";
  const CONTENT_ID = "appcontent";

  return {
    setProductsInCategories: function (products, categories) {
      // TODO remove all categories and products before start
      categories.forEach((category) => {
        const categoryContent = document.querySelector(`#${CONTENT_ID}`);
        const template = document.querySelector(`#${CATEGOTY_TEMPLATE_ID}`);
        const clone = template.content.cloneNode(true);
        const categoryNameH3 = clone.querySelectorAll("h3");
        categoryNameH3[0].textContent = category.name;
        categoryNameH3[0].id = `section-${category.id}`;

        const productsInCategory = products.filter(
          (product) => product.category === category.id
        );

        productsInCategory.forEach((product) => {
          const productContent = clone.querySelector('.section-products');
          const productTemplate = document.querySelector(`#${PRODUCT_TEMPLATE_ID}`);
          const productClone = productTemplate.content.cloneNode(true);
          const description = productClone.querySelector(
            ".product-description"
          );
          description.textContent = product.name;
          const date = productClone.querySelector(".product-date");
          // dateLib is outside
          date.textContent = dateLib.transformDate(product.date);
          const image = productClone.querySelector("picture img");
          image.src = product.source;

          productContent.appendChild(productClone);
        });

        categoryContent.appendChild(clone);
      });
    },

    setCategoriesInMenu: function (categories) {
      let menuStr = '';
      const menu = document.querySelector(`.menu`);
      const footer = document.querySelector(`.footer`);
      // TODO remove all categories and products before start
      categories.slice(0,4).forEach((category) => {
        menuStr += `<a href="#section-${category.id}"> ${category.name} </a>`;
      });

      menu.innerHTML = menuStr;
      footer.innerHTML =  menuStr;
    },
  };
})();
