var foodieApp = angular.module('foodieApp',['ngRoute']);

foodieApp.config(function ($routeProvider) {// function to create different routes for different pages
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

foodieApp.controller('loginController',function($scope,$location) {// controller for login page

	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {// controller for restaurant page containing different restaurant details
	$scope.restaurantId = $routeParams.id;// to show diffent restaurants pages according to id provided to each restaurant
	// <!--array containing details of different restaurants-->
	var restaurants =  [{
	name: 'Kalsang AMA Cafe',
	address: '88, Opposite Osho, Chander Lok Colony, Rajpur Road, Rajpur, Dehradun',
	location: 'Rajpur',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Cafe',
	cost: '600',
	hours: '10 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/3500484_RESTAURANT_82f34d69f769f76a5e113b8768b2df13.jpg',
	bestDish: {
	name: 'Latte',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Bg2E86pa65jybg6iBeN87Xl3G7ZkFPRWk8fZk7FZmc07wek6vA'
  },

},
{
name: 'Walk In Woods',
address: '323, 1st Floor, Above Axis Bank, G.M.S Road Ballupur',
location: 'Ballupur, Dehradun',
category: 'Casual Dining',
vote: '3.5',
cuisines: 'North Indian, Chinese, Mughlai, Pizza',
cost: '1200',
hours: '10 AM to 11 PM (Mon-Sun)',
image:'https://b.zmtcdn.com/data/pictures/8/3500118/01e2f8ff4794372ab3b6996f756e7bf7.jpg',
bestDish: {
name: 'Corn Pizza',
image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
},
{
name: 'Melt - Hotel Saffron Leaf',
address: 'Hotel Saffron Leaf, GMS Road, Kaonli, Dehradun',
location: 'GMS Road, Dehradun',
category: 'Kaonli, Casual Dining',
vote: '3.5',
cuisines: 'North Indian, Chinese, Finger Food',
cost: '1000',

hours: '7 AM to 10:30 PM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
bestDish: {
name: 'Chilli baby corn',
image: 'https://lh3.googleusercontent.com/ki1amgeMRSH0nWdJLR--ttpDntfI9ihHOxAZLvk7yGys1sw33xhzoric2o6pnHB2QFYOAg=s152'
},
},
{
name: 'Vatika Restaurant - Hotel Madhuban',
address: 'Hotel Madhuban, 97, Rajpur Road, Hathibarkala Salwala, Dehradun',
location: 'Hathibarkala Salwala',
category: 'Fine Dining',
vote: '4.1',
cuisines: 'North Indian, Chinese, Continental',
cost: '1200',
hours: '7 AM to 11:30 PM(Mon-Sun)',
image:'https://b.zmtcdn.com/data/res_imagery/3500096_RESTAURANT_2ef8cf15c0f1f9012a8b8e1681c078a6_c.jpg',
bestDish: {
name: 'Broccoli babycorn',
image: 'https://lh3.googleusercontent.com/I7E4eaDtm7nZoB6Y9aW_XgUrfzGCHrKa7I1nveXGi4KhB-l6EbpEv1WiObXbDWBK6wN8Yg=s160'
},
},
{
name: 'Tunday Kababi',
address: '4th Floor, Food Court, Times Square Mall, Sahastradhara Road, Near Chironwali, Dehradun',
location: 'Chironwali',
category: 'Quick Bites',
vote: '4.9',
cuisines: 'Awadhi, Lucknowi',
cost: '300',
hours: '11 AM to 9:30 PM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/reviews_photos/5c6/1221229a20b35b13792f6bcc4ec795c6_1500470698.jpg',
bestDish: {
name: 'Minced meat',
image: 'https://lh3.googleusercontent.com/65UIN2MCLwyqLhF2hI_ssEN49WQUGGc3tBLDpI30uOLnQ81cY03-BcqPq6GhYSAuhgQ1j_k=s113'
},
},
{
name: 'Thee Heart',
address: 'First Floor, Vikas Cinemall, Indira Nagar, Balliwala, Dehradun',
location: 'Balliwala',
category: 'Fine Dining',
vote: '4.7',
cuisines: 'North Indian, Chinese',
cost: '1100',
hours: '11:30 AM to 11 PM (Mon-Sun)',
image:'https://b.zmtcdn.com/data/pictures/2/3500352/42954a52cde8c5e30845671d1ccdc92d.jpg'
},
{
name: 'First Gear Cafe',
address: 'Khala Gaon, Near Shiv Mandir, Mussoorie road . Dehradun',
location: 'Malsi',
category: 'Café',
vote: '3.9',
cuisines: 'Cafe, Chinese',
cost: '700',
hours: '9 AM to 9 PM (Mon-Sun)',
image:'https://b.zmtcdn.com/data/reviews_photos/3d6/3f8d6c8392fccbbefaa6fcf076ed23d6_1501072922.jpg'
},
{
name: 'Elloras Melting Moments',
address: '29, Rajpur Road, Chukkuwala, Dehradun',
location: 'Chukkuwala',
category: 'Bakery, Quick Bites',
vote: '4.2',
cuisines: 'Bakery, Fast Food',
cost: '250',
hours: '8 AM to 10 PM (Mon-Sun)',
image:'https://b.zmtcdn.com/data/reviews_photos/940/8c5968448d0ae9302d586a2521b34940_1484310596.jpg'
}]// end of restaurant array

$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.ingredients = [];// array to store list of ingredients of recommended food item
$scope.getIngredients = function(url) {//function to get ingredients list of recommended item using clarifai
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key a6e6bdad3da248c5a7b90bde46c8becd',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {
			var ingredients = response.data.outputs[0].data.concepts;
  			// var list = '';
  			for (var i =0;i < ingredients.length;i++) {
  				// list += '<div class="ingredient">' + ingredients[i].name + '</div>'
					$scope.ingredients.push(ingredients[i].name);
  			}
    		// $('.ingredients').html(list);
    		// console.log(list);
        }, function (xhr) {
        	console.log(xhr);

        })
	}

	var diabeticItems = ['sugar', 'candy', 'fruit juice', 'alcohol', 'beer', 'oil',
	'chips', 'nachos', 'butter', 'whiskey', 'cake', 'chocolate', 'sweet', 'confectionery',
	'jelly', 'potato', 'cookie', 'cupcake'];// <!--array of diabetes items-->

	// $scope.ingredients = [];
  $scope.itemsToCheck = [];
  $scope.isSuitableForDiabetics;
	// A function to check whether the featured dish is suitable for diabetes patients or not.
	  // Works similar to the previous getIngredients() function.
	$scope.checkForDiabetes = function(url) {// function compare diabetic ingredients with list of ingredients of recommended item using clarifai
    var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}';
    $http({
      'method': 'POST',
      'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
      'headers': {
        'Authorization': 'Key a6e6bdad3da248c5a7b90bde46c8becd',
        'Content-Type': 'application/json'
      },
      'data': data
    })
    .then(function(response) {
      var  itemsToCheck = response.data.outputs[0].data.concepts;
      for(var i=0; i<itemsToCheck.length; ++i) {
        if(itemsToCheck[i].value >= 0.75)
          $scope.itemsToCheck.push(itemsToCheck[i].name);
      }
      // console.log($scope.itemsToCheck);
      // Now check every ingredient in $scope.itemsToCheck array to see if it occurs within the diabeticItems array.
      // If it does, mark $scope.isSuitableForDiabetics = false and end the function.
      // Suitable messages will be displayed to the user.
      for(var i=0; i<$scope.itemsToCheck.length; ++i) {
        for(var j=0; j<diabeticItems.length; ++j) {
          if($scope.itemsToCheck[i] == diabeticItems[j]) {
            $scope.isSuitableForDiabetics = false;
            console.log('Not suitable for diabetics');
            return;
          }
          // else {
          //   console.log($scope.itemsToCheck[i]+' '+diabeticItems[j]+' '+$scope.isSuitableForDiabetics);
          // }
        }
      }
      $scope.isSuitableForDiabetics = true;
      // console.log('Suitable for diabetics');
    },
    function(xhr) {
      console.log(xhr);
    })
  }// <!--end of checkForDiabetes-->


})// <!--restaurantController function end>

foodieApp.controller('mainController',function($scope) {
  $scope.restaurants = [{
	name: 'Kalsang AMA Cafe',
	address: '88, Opposite Osho, Chander Lok Colony, Rajpur Road, Rajpur, Dehradun',
	location: 'Rajpur',
	category: 'Casual Dining, Bar',
	id: 1,
	vote: '4.2',
	cuisines: 'Cafe',
	cost: '600',
	hours: '10 AM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/res_imagery/3500484_RESTAURANT_82f34d69f769f76a5e113b8768b2df13.jpg'
},
{
name: 'Walk In Woods',
address: '323, 1st Floor, Above Axis Bank, G.M.S Road Ballupur',
location: 'Ballupur, Dehradun',
category: 'Casual Dining',
id: 2,
vote: '3.5',
cuisines: 'North Indian, Chinese, Mughlai, Pizza',
cost: '1200',
hours: '10 AM to 11 PM (Mon-Sun)',
image:'https://b.zmtcdn.com/data/pictures/8/3500118/01e2f8ff4794372ab3b6996f756e7bf7.jpg'
},
{
name: 'Melt - Hotel Saffron Leaf',
address: 'Hotel Saffron Leaf, GMS Road, Kaonli, Dehradun',
location: 'GMS Road, Dehradun',
category: 'Kaonli, Casual Dining',
id: 3,
vote: '3.5',
cuisines: 'North Indian, Chinese, Finger Food',
cost: '1000',
hours: '7 AM to 10:30 PM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'Vatika Restaurant - Hotel Madhuban',
address: 'Hotel Madhuban, 97, Rajpur Road, Hathibarkala Salwala, Dehradun',
location: 'Hathibarkala Salwala',
category: 'Fine Dining',
id: 4,
vote: '4.1',
cuisines: 'North Indian, Chinese, Continental',
cost: '1200',
hours: '7 AM to 11:30 PM(Mon-Sun)',
image:'https://b.zmtcdn.com/data/res_imagery/3500096_RESTAURANT_2ef8cf15c0f1f9012a8b8e1681c078a6_c.jpg'
},
{
name: 'Tunday Kababi',
address: '4th Floor, Food Court, Times Square Mall, Sahastradhara Road, Near Chironwali, Dehradun',
location: 'Chironwali',
category: 'Quick Bites',
id: 5,
vote: '4.9',
cuisines: 'Awadhi, Lucknowi',
cost: '300',
hours: '11 AM to 9:30 PM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/reviews_photos/5c6/1221229a20b35b13792f6bcc4ec795c6_1500470698.jpg'
},
{
name: 'Thee Heart',
address: 'First Floor, Vikas Cinemall, Indira Nagar, Balliwala, Dehradun',
location: 'Balliwala',
category: 'Fine Dining',
id: 6,
vote: '4.7',
cuisines: 'North Indian, Chinese',
cost: '1100',
hours: '11:30 AM to 11 PM (Mon-Sun)',
image:'https://b.zmtcdn.com/data/pictures/2/3500352/42954a52cde8c5e30845671d1ccdc92d.jpg'
},
{
name: 'First Gear Cafe',
address: 'Khala Gaon, Near Shiv Mandir, Mussoorie road . Dehradun',
location: 'Malsi',
category: 'Café',
id: 7,
vote: '3.9',
cuisines: 'Cafe, Chinese',
cost: '700',
hours: '9 AM to 9 PM (Mon-Sun)',
image:'https://b.zmtcdn.com/data/reviews_photos/3d6/3f8d6c8392fccbbefaa6fcf076ed23d6_1501072922.jpg'
},
{
name: 'Elloras Melting Moments',
address: '29, Rajpur Road, Chukkuwala, Dehradun',
location: 'Chukkuwala',
category: 'Bakery, Quick Bites',
id: 8,
vote: '4.2',
cuisines: 'Bakery, Fast Food',
cost: '250',
hours: '8 AM to 10 PM (Mon-Sun)',
image:'https://b.zmtcdn.com/data/reviews_photos/940/8c5968448d0ae9302d586a2521b34940_1484310596.jpg'
}]

})
