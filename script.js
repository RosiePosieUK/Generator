

var category1 = [
  {"product": "https://dosrgfkou9o2m.cloudfront.net/api/images/Cardshop/1/product/NWCHLB4-AR/6?subscription-key=b00894e69b9f499cb2beb782cf79e5be&w=680",
   "url": "https://www.moonpig.com/uk/Gift/Flowers/Detail/NWCHLB4-AR/",
   "name": "Lanson Black Label & Exclusive Champagne Stopper!",
   "price": "£36.00"
  },

  {"product": "https://dosrgfkou9o2m.cloudfront.net/api/images/Cardshop/1/product/HAMP34/2?subscription-key=b00894e69b9f499cb2beb782cf79e5be&w=680",
   "url": "https://www.moonpig.com/uk/Gift/Flowers/Detail/HAMP34/",
   "name": "Thornton & France Cheese Lovers Wicker Tray",
   "price": "£20.00"
  },

  {"product": "https://dosrgfkou9o2m.cloudfront.net/api/images/Cardshop/1/product/NWSLG2/1?subscription-key=b00894e69b9f499cb2beb782cf79e5be&w=680",
   "url": "https://www.moonpig.com/uk/Gift/Flowers/Detail/NWSLG2/",
   "name": "Freedom Award Winning British Lagers Gift Set",
   "price": "£22.00"
  },

  {"product": "https://dosrgfkou9o2m.cloudfront.net/api/images/Cardshop/1/product/HAMP45/2?subscription-key=b00894e69b9f499cb2beb782cf79e5be&w=680",
   "url": "https://www.moonpig.com/uk/Gift/Flowers/Detail/HAMP45/",
   "name": "Christmas Favourites Filled Santa Sack",
   "price": "£35.00"
  },

  {"product": "https://dosrgfkou9o2m.cloudfront.net/api/images/Cardshop/1/product/BOX440/3?subscription-key=b00894e69b9f499cb2beb782cf79e5be&w=680",
   "url": "https://www.moonpig.com/uk/Gift/Flowers/Detail/BOX440/",
   "name": "The Curry Night Box",
   "price": "£35.00"
  }
]  

var category2 = [
  {"product": "https://dosrgfkou9o2m.cloudfront.net/api/images/Cardshop/1/product/NWCHLB4-AR/6?subscription-key=b00894e69b9f499cb2beb782cf79e5be&w=680",
   "url": "https://www.moonpig.com/uk/Gift/Flowers/Detail/NWCHLB4-AR/",
   "name": "Lanson Black Label & Exclusive Champagne Stopper!",
   "price": "£36.00"
  },

  {"product": "https://dosrgfkou9o2m.cloudfront.net/api/images/Cardshop/1/product/HAMP34/2?subscription-key=b00894e69b9f499cb2beb782cf79e5be&w=680",
   "url": "https://www.moonpig.com/uk/Gift/Flowers/Detail/HAMP34/",
   "name": "Thornton & France Cheese Lovers Wicker Tray",
   "price": "£20.00"
  },

  {"product": "https://dosrgfkou9o2m.cloudfront.net/api/images/Cardshop/1/product/NWSLG2/1?subscription-key=b00894e69b9f499cb2beb782cf79e5be&w=680",
   "url": "https://www.moonpig.com/uk/Gift/Flowers/Detail/NWSLG2/",
   "name": "Freedom Award Winning British Lagers Gift Set",
   "price": "£22.00"
  },

  {"product": "https://dosrgfkou9o2m.cloudfront.net/api/images/Cardshop/1/product/HAMP45/2?subscription-key=b00894e69b9f499cb2beb782cf79e5be&w=680",
   "url": "https://www.moonpig.com/uk/Gift/Flowers/Detail/HAMP45/",
   "name": "Christmas Favourites Filled Santa Sack",
   "price": "£35.00"
  },

  {"product": "https://dosrgfkou9o2m.cloudfront.net/api/images/Cardshop/1/product/BOX440/3?subscription-key=b00894e69b9f499cb2beb782cf79e5be&w=680",
   "url": "https://www.moonpig.com/uk/Gift/Flowers/Detail/BOX440/",
   "name": "The Curry Night Box",
   "price": "£35.00"
  }
]

var gift = document.getElementById("gift");
var recipient = document.getElementById("recipient");
var generate = document.getElementById("generate");
var price = document.getElementById("price");
var name = document.getElementById("name");
var shop = document.getElementById("shop");
var category;

function generateGift(){
  
  var selection = recipient.value;

  if (selection == 'dd_category1'){
    category = category1;
  }
  else if (selection == 'dd_category2'){
    category = category2;
  }

  var n = Math.floor((Math.random() * (category.length)));
  console.log(category);
  console.log(category.length);
  console.log(n);

  gift.src = category[n].product;

  updatePage();
  


}

function updatePage(){

}

//on click of generate

// selection = recipient.value

// case selection = category1FullName
  // category = category1

// call random number function & feed in argument of category so can get length of this category

//
// gift img src = category[i].product
// shop display visible
// shop href = category[i].url
// price = category[i].price
// title = category[i].name