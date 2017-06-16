localStorage.pdfUrl = "/blank.pdf";
angular.module('pdfApp', ['ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages','lfNgMdFileInput'])
    .controller('appController', function($scope,$http,$mdDialog) {
        $scope.activeTab=0;
        $scope.preview = false;
        $scope.isUpload = true;
        $scope.changeStep = function(step){
        	$scope.activeTab=step;
        }
        $scope.fullscreenStatus = false;

        $scope.$watch('files.length',function(newVal,oldVal){
            
	        angular.forEach($scope.files,function(obj){
	        	
	        	if (obj.lfFile.type == "application/pdf") {
	        		$scope.url = "/preview";
		        	localStorage.pdfUrl = obj.lfDataUrl;
		        	$scope.activeTab=1;
		            $scope.preview = true;	
		            $scope.isUpload = false;
	        	}else{
	        		$mdDialog.show(
				      $mdDialog.alert()
				        .parent(angular.element(document.querySelector('#popupContainer')))
				        .clickOutsideToClose(true)
				        .title('Type invalid')
				        .textContent('Please upload .pdf file')
				        .ariaLabel('type mismatch')
				        .ok('Close')
				    );
	        	}
	        	
	        });
        });


    })