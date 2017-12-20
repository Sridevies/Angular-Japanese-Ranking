(function () {
    var app = angular.module('rank-app', []);

////// Double Tab //////
hmGestures = ['hmHold:hold',
                  'hmTap:tap',
                  'hmDoubletap:doubletap',
                  'hmDrag:drag',
                  'hmDragstart:dragstart',
                  'hmDragend:dragend',
                  'hmDragup:dragup',
                  'hmDragdown:dragdown',
                  'hmDragleft:dragleft',
                  'hmDragright:dragright',
                  'hmSwipe:swipe',
                  'hmSwipeup:swipeup',
                  'hmSwipedown:swipedown',
                  'hmSwipeleft:swipeleft',
                  'hmSwiperight:swiperight',
                  'hmTransformstart:transformstart',
                  'hmTransform:transform',
                  'hmTransformend:transformend',
                  'hmRotate:rotate',
                  'hmPinch:pinch',
                  'hmPinchin:pinchin',
                  'hmPinchout:pinchout',
                  'hmTouch:touch',
                  'hmRelease:release'];

angular.forEach(hmGestures, function(name){
  var directive = name.split(':'),
  directiveName = directive[0],
  eventName = directive[1];
  app.directive(directiveName, ["$parse", function($parse) {
    return {
      scope: true,
      link: function(scope, element, attr) {
        var fn, opts;
        fn = $parse(attr[directiveName]);
        opts = $parse(attr["hmOptions"])(scope, {});
        if(opts && opts.group) {
          scope.hammer = scope.hammer || Hammer(element[0], opts);
        } else {
          scope.hammer = Hammer(element[0], opts);
        }
        return scope.hammer.on(eventName, function(event) {
          return scope.$apply(function() {
            return fn(scope, {
              $event: event
            });
          });
        });
      }
    };
    }
  ]);
});
    

app.controller('ranking-controller', function ($scope, $window, $http, $timeout) {
	$scope.agentWidth = $window.innerWidth;
	$scope.rankdata_old;
	$scope.orderByField = 'Rank';
  $scope.reverseSort = false;
		
		////////// CSV //////////
		$scope.readCSV = function() {
		// http get request to read CSV file content
			$http.get('data/greti-transpency-ranking.csv').success($scope.processData);
		};

		$scope.processData = function(allText) {
			// split content based on new line
			var allTextLines = allText.split(/\r\n|\n/);
			var headers = allTextLines[0].split(',');
			//headers.push("Rent1","Rent2");
			var lines = [];
			for ( var i = 1; i < allTextLines.length-1; i++) {
				// split content based on comma
				var rankData = allTextLines[i].split(',');
				
					var tarr = {};
					for ( var j = 0; j < rankData.length; j++) {
					
						tarr[headers[j]]=rankData[j].replace(/\"/g,"");						
					}
					lines.push(tarr);
			}
			$scope.rankData = lines;
			$scope.rankdata_old=lines;
		};
		
			//////// Sorting /////////

	$scope.activecolumn = "Rank";
	$scope.sortData=function(column){

		if($scope.activecolumn == column){
			$scope.sort=$scope.sort == 'ASC' ? 'DSC' : 'ASC';
		}else{
			$scope.activecolumn=column;
			$scope.sort='ASC'
		}
		var unsorted=[];
		var tmpsorted=[];
		var sorted=[];
		angular.forEach($scope.rankData,function(d,i){
			if(column != 'Market' && column != 'Region'){
				unsorted.push(parseFloat(d[column]))
			}else{
				unsorted.push(d[column])
			}				
		})
		tmpsorted=unsorted.slice(0,unsorted.length);
		if(column != 'Market' && column != 'Region'){
		
			$scope.sort == 'ASC' ? tmpsorted.sort(function(a,b){return a-b}) : tmpsorted.sort(function(a,b){return b-a})
			
		}else{
			tmpsorted.sort();
			if($scope.sort != 'ASC'){tmpsorted.reverse()};
		}
		
		angular.forEach(tmpsorted,function(l,k){
			var oldIndex=unsorted.indexOf(l);
			sorted.push($scope.rankData[oldIndex]);
			unsorted.splice(oldIndex,2);
			$scope.rankData.splice(oldIndex,2);
		});
		$scope.rankData=sorted; 
	}

	$scope.sortData("Rank");

	$scope.setIcon=function(ctext){
		if(ctext == $scope.activecolumn)
		{	
			return $scope.sort == 'ASC' ? 'glyphiconAsc' : 'glyphiconDesc' ;
		}
		return 'glyphiconArrow';
	}

	/*angular.forEach($scope.rankData, function (rdta) {
		rdta.Rank = parseFloat(rdta.Rank);
	   });*/

	   angular.forEach($scope.rankData, function (rdata) {
    rdata.Rank = parseFloat(rdata.Rank);
   });
	   
		 /*  $scope.orderByField = function(rdata){
				return parseInt(rdata.Rank);
			};*/




    });



    
})();


