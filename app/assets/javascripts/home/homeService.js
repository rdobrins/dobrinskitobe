angular.module('dobrinskiToBe')

.service('HomeService', function () {
    var photoModal = null;

    this.storePhotoModal = function (photo) {
      photoModal = photo;
    }

    this.clearPhotoModal = function () {
      photoModal = null;
    }

    this.photoModal = function () {
        return photoModal;
    }
});
