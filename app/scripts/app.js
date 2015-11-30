(function(){

  var app = angular.module("NrecaBod", ["ui.router"]);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    //configureStateProviders(stateConfigurationObj) // [{ state: 'home', templateUrl: 'templateUrl' ....} {....}]
    //create object that pulls all the info needed
    $stateProvider.state('home', {
      url: '/',
      views: {
        '' : {
          templateUrl: '/templates/home.html',
          controller: 'Main.controller',
        },
        'navigation@home' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 1,
        pageTitle: 'Welcome to the Expense Site'
      }
    });
    $stateProvider.state('general', {
      url: '/general',
      views: {
        '' : {
          templateUrl: '/templates/general.html',
          controller: 'Main.controller',
        },
        'navigation@general' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 2,
        pageTitle: 'General Info'
      }
    });
    $stateProvider.state('travel', {
      url: '/travel',
      views: {
        '' : {
          templateUrl: '/templates/travel.html',
          controller: 'Main.controller',
        },
        'navigation@travel' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 3,
        pageTitle: 'Travel'
      }
    });
    $stateProvider.state('expenses', {
      url: '/expenses',
      views: {
        '' : {
          templateUrl: '/templates/expenses.html',
          controller: 'Main.controller',
        },
        'navigation@expenses' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 4,
        pageTitle: 'Expenses'
      }
    });
    $stateProvider.state('deductions', {
      url: '/deductions',
      views: {
        '' : {
          templateUrl: '/templates/deductions.html',
          controller: 'Main.controller',
        },
        'navigation@deductions' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 5,
        pageTitle: 'Deductions and Per Diem'
      }
    });
    $stateProvider.state('review', {
      url: '/review',
      views: {
        '' : {
          templateUrl: '/templates/review.html',
          controller: 'Main.controller',
        },
        'navigation@review' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 6,
        pageTitle: 'Review'
      }
    });
    /*$stateProvider.state('othertransportation', {
      url: '/othertransportation',
      views: {
        '' : {
          templateUrl: '/templates/othertransportation.html',
          controller: 'Main.controller',
        },
        'navigation@othertransportation' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 7,
        pageTitle: 'Other Transportation'
      }
    });
    $stateProvider.state('parking', {
      url: '/parking',
      views: {
        '' : {
          templateUrl: '/templates/parking.html',
          controller: 'Main.controller',
        },
        'navigation@parking' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 8,
        pageTitle: 'Parking'
      }
    });
    $stateProvider.state('hotel', {
      url: '/hotel',
      views: {
        '' : {
          templateUrl: '/templates/hotel.html',
          controller: 'Main.controller',
        },
        'navigation@hotel' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 9,
        pageTitle: 'Other Transportation'
      }
    });
    $stateProvider.state('otherexpenses', {
      url: '/otherexpenses',
      views: {
        '' : {
          templateUrl: '/templates/otherexpenses.html',
          controller: 'Main.controller',
        },
        'navigation@otherexpenses' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 10,
        pageTitle: 'Other Expenses'
      }
    });
    $stateProvider.state('deductions', {
      url: '/deductions',
      views: {
        '' : {
          templateUrl: '/templates/deductions.html',
          controller: 'Main.controller',
        },
        'navigation@deductions' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 11,
        pageTitle: 'Deductions'
      }
    });
    $stateProvider.state('perdiem', {
      url: '/perdiem',
      views: {
        '' : {
          templateUrl: '/templates/perdiem.html',
          controller: 'Main.controller',
        },
        'navigation@perdiem' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 12,
        pageTitle: 'Per Diem'
      }
    });
    $stateProvider.state('receipts', {
      url: '/receipts',
      views: {
        '' : {
          templateUrl: '/templates/receipts.html',
          controller: 'Main.controller',
        },
        'navigation@receipts' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 13,
        pageTitle: 'Receipts'
      }
    });
    $stateProvider.state('review', {
      url: '/review',
      views: {
        '' : {
          templateUrl: '/templates/review.html',
          controller: 'Main.controller',
        },
        'navigation@review' : {
          templateUrl: '/templates/navigation.html'
        }
      },
      data: {
        page: 14,
        pageTitle: 'Review'
      }
    });
    $stateProvider.state('pageIndex', {
        url: '/page/:index',
        controller: function($state, $stateParams, pages) {
          var state = pages[$stateParams.index];
          if ( state != null ) {
            $state.go(state)
          }
        }
    });*/
  }]);

  app.controller("Main.controller", ['$scope', '$state', function($scope, $state){
    var myState = $state.$current.data.page;
    console.log(myState);
    $scope.currentPageTitle = $state.$current.data.pageTitle;
    $scope.goNext = function goNext() {
      $state.go('pageIndex', { index: myState });
    };
    $scope.goPrevious = function goPrevious() {
      $state.go('pageIndex', { index: myState - 1});
    };
  }]);

  app.constant('pages', [
    'home',
    'general',
    'travel',
    'purpose',
    'airfare',
    'car',
    'othertransportation',
    'parking',
    'hotel',
    'otherexpenses',
    'deductions',
    'perdiem',
    'receipts',
    'review'
  ]);

  module.exports = app;
})();

/*
  /page/:index (where index >= 1)
    > /page/14 == look at service for next state, redirect to state, index in service is :index - 1
  service = [
    'review',
    'receipts'
  ];
*/
