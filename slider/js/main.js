$(document).ready(function(){
	$("section.menu").css("margin-left",($("section.menu").width()*-1)-10);
});

var app = angular.module("slider", []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/bananas', {templateUrl: 'partials/bananas.html', controller: "natureCtrl"}).
      when('/carrots', {templateUrl: 'partials/carrots.html', controller: "natureCtrl"}).
      when('/peanuts', {templateUrl: 'partials/peanuts.html', controller: "natureCtrl"}).
      otherwise({redirectTo: '/index'});
}]);

app.factory("Nature",function(){
	var Nature={};
	Nature.products=[
					 {"name":"Fruit","icon":"/img/icons/fruits.png","elements":[{"name":"Banana","link":"/bananas"}]},
					 {"name":"Vegetables","icon":"/img/icons/veggies.png","elements":[{"name":"Carrots","link":"/carrots"}]},
					 {"name":"Legumes","icon":"/img/icons/legumes.png","elements":[{"name":"Peanuts","link":"/peanuts"}]}
					];
					return Nature;
});

function natureCtrl($scope,Nature,$location){
	$scope.nature=Nature;

	$scope.getClass = function(product) {

	    if ($location.path().substr(0, product.length) == product) {
	      return true
	    } else {
	      return false
	    }
}
}

app.directive("click",function(){
	return function(scope,element){
		element.bind("click",function(){
			
			if($("section.menu").css("margin-left").replace(/[^-\d\.]/g, '')<0){
				$("section.menu").animate({marginLeft:0});


			}else{
				$("section.menu").animate({marginLeft:($("section.menu").width()*-1)-10});
			}
			

		})

	}
})

app.directive("mouseenter",function(){
	return function(scope,element){
		element.bind("mouseenter",function(){
			element.addClass("hover");
			

		})

	}
})


app.directive("mouseleave",function(){
	return function(scope,element){
		element.bind("mouseleave",function(){
			element.removeClass("hover");
			

		})

	}
})

app.directive("clickoption",function(){
	return function(scope,element){
		element.bind("click",function(){
			$("li.active").removeClass("active");
			element.parent().addClass("active");
			scope.url=element.parent().attr("link");
			$("section.content").attr("src",scope.url);
			$("section.menu").animate({marginLeft:($("section.menu").width()*-1)-10});
		})

	}
})