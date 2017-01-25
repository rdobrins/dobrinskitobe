angular.module('dobrinskiToBe')

.controller('HomeCtrl', [ '$scope', 'HomeService', function($scope, HomeService) {
    $scope.author = 'Ryan';
    $scope.photos = [];
    for (var i = 1; i <= 18; i++) {
      var imgExt = '/MegMillerJpegs-' + (i).toString() + '.jpg';
      var picId = i;
      var pic = {src: imgExt, id: picId};
      $scope.photos.push(pic);
    }
    $scope.photoModal = function(photo) {
      $scope.modalPhoto = photo;
      HomeService.storePhotoModal(photo);
    }
    // $scope.keyRelease = function(event){
    //   if (event.which === 37) {
    //     $scope.prevPicture();
    //   } else if (event.which === 39) {
    //     $scope.nextPicture();
    //   }
    // }
    function isNextPhoto(value) {
      var currentPhoto = HomeService.photoModal();
      var nextPhotoId = currentPhoto.id + 1;
      return value.id === nextPhotoId;
    }
    function isPrevPhoto(value) {
      var currentPhoto = HomeService.photoModal();
      var prevPhotoId = currentPhoto.id - 1;
      return value.id === prevPhotoId;
    }
    $scope.nextPicture = function() {
      var nextPhotoArray = $scope.photos.filter(isNextPhoto);
      if (nextPhotoArray.length > 0) {
        $scope.modalPhoto = nextPhotoArray[0];
      } else {
        $scope.modalPhoto = $scope.photos[0];
      }
      HomeService.storePhotoModal($scope.modalPhoto);
    }
    $scope.prevPicture = function() {
      var prevPhotoArray = $scope.photos.filter(isPrevPhoto);
      if (prevPhotoArray.length > 0) {
        $scope.modalPhoto = prevPhotoArray[0];
      } else {
        $scope.modalPhoto = $scope.photos[($scope.photos.length - 1)];
      }
      HomeService.storePhotoModal($scope.modalPhoto);
    }
  }]
)
