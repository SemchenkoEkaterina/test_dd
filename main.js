const products = [
  {
    category: 1,
    name: "iphone 11",
    date: "01.01.2022",
    source: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
  },
  {
    category: 1,
    name: "iphone 99",
    date: "25.12.2022",
    source: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
  },
  {
    category: 2,
    name: "iphone 12",
    date: "02.01.2022",
    source: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
  },
  {
    category: 3,
    name: "iphone 13",
    date: "03.01.2022",
    source: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
  },
  {
    category: 1,
    name: "iphone 14",
    date: "04.01.2022",
    source: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
  },
  {
    category: 2,
    name: "iphone 15",
    date: "05.01.2022",
    source: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
  },
  {
    category: 2,
    name: "iphone 18",
    date: "19.01.2022",
    source: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
  },
  {
    category: 2,
    name: "iphone 20",
    date: "17.01.2022",
    source: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
  },
  {
    category: 3,
    name: "iphone 16",
    date: "06.01.2022",
    source: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
  },
  ,
  {
    category: 4,
    name: "iphone 36",
    date: "06.02.2022",
    source: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png",
  },
];

const categories = [
  {
    id: 1,
    name: "category 1",
  },
  {
    id: 2,
    name: "category 2",
  },
  {
    id: 3,
    name: "category 3",
  },
  {
    id: 4,
    name: "category 4",
  },
];

market.setProductsInCategories(products, categories);
market.setCategoriesInMenu(categories);
features.initScrollToTopButton();
features.initChangeTheme();

function show(state)
{
	document.getElementById('form').style.display = state;	 		
}
function getFormData()
{
	let form = document.forms.buy;	
  let value = form.elements.value.value; 	
  let color = form.elements.color.value;	
  let komment = form.elements.komment.value;
  alert('Вы купили ' + value + ' товар/а, цвета:' + color + ', комментарий:'+ komment)
}