var foodieApp = angular.module('foodieApp',['ngRoute']);

foodieApp.config(function ($routeProvider) {
	$routeProvider


	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

foodieApp.controller('loginController',function($scope,$location) {
$scope.goToHome= function(){
	// console.log('Do Something')
	$location.url('home')
}
})
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	//Empty
	//console.log($routeParams.id);
	$scope.ingredients = [];


	$scope.getIngredients = function(url) {
	// Do something
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	    $http({
	        'method': 'POST',
	        'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
	        'headers': {
	            'Authorization': 'Key d34db9c8fbfc4fa48bc87b06a5b8e676',
	            'Content-Type': 'application/json'
	        },
	        'data': data,
	       /* success: function (response) {
	           // console.log(response.outputs[0]);
				var ingredients = response.outputs[0].data.concepts;
	            var list = '';
	            for (var i =0;i < ingredients.length;i++) {
	                list += '<div class="ingredient">' + ingredients[i].name + '</div>'
	            }
	           // $('.ingredients').html(list);
	        },
	        error: function (xhr) {
	           // console.log(xhr);
	        } */
	    }).then(function (response) {
								var ingredients = response.data.outputs[0].data.concepts;
						for (var i =0;i < ingredients.length;i++) {
						$scope.ingredients.push(ingredients[i].name);
						}
    		// $('.ingredients').html(list);
    		console.log(list);
        }, function (xhr) {
        	console.log(xhr);
        })
	}

	$scope.toDoList = function(){


		 var todoarray = angular.copy($scope.ingredients);

			$scope.todoList = [];
			for(var i = 0 ; i<todoarray.length; i++){
				$scope.todoList.push({todoText:todoarray[i], done:false});
			}

			 $scope.remove = function() {
					 var oldList = $scope.todoList;
					 $scope.todoList = [];
					 angular.forEach(oldList, function(x) {
							 if (!x.done) $scope.todoList.push(x);
					 });
			 };

			 $scope.done = function() {

					console.log("hhhh");
				//	donee=!donee;
					//$.text-decoration: overline;

			 }



	}

	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
	name: 'Apex',
	address: 'Baddi',
	location: 'Himachal Pradesh',
	category: 'Casual Dining, Bar',
	vote: '4.8',
	cuisines: 'Modern Indian and Foreigners',
	cost: '2000',
	hours: 'Always Open',
 id:1,
	image: 'http://inleapexhotel-nyaungshwe.com/wp-content/uploads/2014/02/night-seen2.jpg'
},
{
	name: 'Pizza Hut',
	address: 'Sector-17',
	location: 'Chandigarh',
	category: 'Pizza',
	vote: '4.7',
	cuisines: 'Italian',
	cost: '1500',
	hours: '12 Noon to 12 AM (Mon-Sun)',
 id :2,
 bestDish: {
	name: 'Pizza de Francais',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
           },
	image: 'https://s3-media3.fl.yelpcdn.com/bphoto/4pR0J1Atzp6RzDeDFvc1Qw/ls.jpg'
},
{
	name: 'Indian Accent',
	address: 'SCO 45,46 & 47,Near Taj Hotel,Sector 17A,Chandigarh ',
	location: 'Chandigarh',
	category: 'Family Restaurant',
	vote: '4.9',
	cuisines: 'Indian',
	cost: '1000',
	hours: '8 AM to 11 PM (Mon-Sun)',
 id:3,
	image: 'http://www.indianaccent.com/newdelhi/images/gallery-images/indian-accent-verendha.jpg'
},
{
	name: 'Peshawari',
	address: 'sector-68',
	location: 'New Delhi',
	category: 'Casual Dining',
	vote: '4.5',
	cuisines: 'Modern Indian ',
	cost: '2500',
	hours: '10 AM to 12 AM (Mon-Sun)',
 id :4,
	image: 'https://b.zmtcdn.com/data/pictures/9/3400059/61e35a79d96ee21fa4ee56264988283a_featured_v2.jpg'
},
{
	name: 'Taj Restaurent',
	address: 'City Center,Sector 3,Panchkulahkula',
	location: 'Haryana',
	category: 'Bar & Restaurant',
	vote: '4.8',
	cuisines: 'Italian',
	cost: '2200',
	hours: '11 AM to 11 PM (Mon-Sun)',
 id :5,
 bestDish: {
	name: 'lamb cheezza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
          },
	image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/2a/0d/f2/taj-mahal.jpg'
}]
	$scope.restaurant = restaurants[$routeParams.id - 1];

})
//controller bnaya h....
foodieApp.controller('mainController',function($scope) {
	//what it will do.....
	$scope.restaurants = [{
		var restaurants = [{
		name: 'Apex',
		address: 'Baddi',
		location: 'Himachal Pradesh',
		category: 'Casual Dining, Bar',
		vote: '4.8',
		cuisines: 'Modern Indian and Foreigners',
		cost: '2000',
		hours: 'Always Open',
	 id:1,
		image: 'http://inleapexhotel-nyaungshwe.com/wp-content/uploads/2014/02/night-seen2.jpg'
	},
{
	name: 'Pizza Hut',
	address: 'Sector-17',
	location: 'Chandigarh',
	category: 'Pizza',
	vote: '4.7',
	cuisines: 'Italian',
	cost: '1500',
	hours: '12 Noon to 12 AM (Mon-Sun)',
	id :2,
	image: 'https://s3-media3.fl.yelpcdn.com/bphoto/4pR0J1Atzp6RzDeDFvc1Qw/ls.jpg'
},
{
	name: 'Indian Accent',
	address: 'SCO 45,46 & 47,Near Taj Hotel,Sector 17A,Chandigarh ',
	location: 'Chandigarh',
	category: 'Family Restaurant',
	vote: '4.9',
	cuisines: 'Indian',
	cost: '1000',
	hours: '8 AM to 11 PM (Mon-Sun)',
 id:3,
	image: 'http://www.indianaccent.com/newdelhi/images/gallery-images/indian-accent-verendha.jpg'
},
{
	name: 'Peshawari',
	address: 'sector-68',
	location: 'New Delhi',
	category: 'Casual Dining',
	vote: '4.5',
	cuisines: 'Modern Indian ',
	cost: '2500',
	hours: '10 AM to 12 AM (Mon-Sun)',
 id :4,
	image: 'https://b.zmtcdn.com/data/pictures/9/3400059/61e35a79d96ee21fa4ee56264988283a_featured_v2.jpg'
},
{
	name: 'Taj Restaurent',
	address: 'City Center,Sector 3,Panchkulahkula',
	location: 'Haryana',
	category: 'Bar & Restaurant',
	vote: '4.8',
	cuisines: 'Italian',
	cost: '2200',
	hours: '11 AM to 11 PM (Mon-Sun)',
 id :5,
	image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/2a/0d/f2/taj-mahal.jpg'
},
]
//3434
		$scope.ingredients = [];
		$scope.probabilityvalue=[];



})
