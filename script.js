

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
var generateBtn = document.getElementById("generate");
var giftPrice = document.getElementById("price");
var giftName = document.getElementById("name");
var giftCopy = document.getElementById("giftCopy");
var shopBtn = document.getElementById("shop");
var category;
var n;



  generateBtn.addEventListener('click', function(){
    generateGift();
  })

  recipient.addEventListener('change', function(){
    if(recipient.value !== 'Select an option'){
      generateBtn.classList.remove('disabled');
      }
    else{
      generateBtn.classList.add('disabled');
    }
  })



function generateGift(){
  
  var selection = recipient.value;

  if (selection == 'dd_category1'){
    category = category1;
  }
  else if (selection == 'dd_category2'){
    category = category2;
  }
  else{
    category = "";
    generateBtn.classList.add('disabled');
  }

  random();
  updatePage();
  
}

function random(){
  n = Math.floor((Math.random() * (category.length)));
}

function updatePage(){
  gift.src = category[n].product;
  giftCopy.classList.remove('hidden');
  giftPrice.innerHTML = category[n].price;
  giftName.innerHTML = category[n].name;
  shopBtn.classList.remove('hidden');
  shopBtn.addEventListener('click', function(){
    window.open(category[n].url)
  })
}







