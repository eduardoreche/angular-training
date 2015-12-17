function MyCtrl( $scope ) {
    $scope.q = "is there anybody in there?";
    $scope.Click = function() {
        alert( "Hello " + $scope.name );
    }
}