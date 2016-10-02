(function(){

  function quizService($q, $http, $rootScope, MainService) {

  	var services = {}; //Object to return
    var base_url = "http://localhost:8082";

    services.getAllQuizes = function(){
      return MainService.get('/get-all-quizes');
    }

    services.saveQuiz = function(data){
      var deferred = $q.defer();

      var req = {
        method: 'POST',
        url: base_url + '/add-quiz',
        data: data,
        dataType: 'json',
      }
      $http(req)
      .then(function(data) { 
          deferred.resolve(data.data);
        },
        function(response, code) {
          deferred.reject(response);
        }
      );
      return deferred.promise;
    }

    services.getInvitedCandidates = function(data){
      var deferred = $q.defer();

      var req = {
        method: 'GET',
        url: base_url + '/get-all-candidates',
      }

      $http(req)
      .then(function(data) { 
          deferred.resolve(data.data);
        },
        function(response, code) {
          deferred.reject(response);
        }
      );

      return deferred.promise;
    }

    services.resendEmail = function(data){
      var deferred = $q.defer();

      var req = {
        method: 'GET',
        url: base_url + '/get-all-candidates',
      }

      $http(req)
      .then(function(data) { 
          deferred.resolve(data.data);
        },
        function(response, code) {
          deferred.reject(response);
        }
      );

      return deferred.promise;
    }

    // private functions
    function handleSuccess(data) { //SUCCESS API HIT
        deferred.resolve(data);
    }
    function handleError(error) { //ERROR ON API HIT
        deferred.reject(error);
    }

    return services;

  }

  var quizServiceArray = [
      "$q",
      "$http",
      "$rootScope",
      "MainService",
      quizService,
  ];

  angular.module('GruiApp').service('quizService', quizServiceArray); 

})();