angular.module("module").directive("stars",function(){

    return {
    
    template:"<div class=\"ratings\"><div class=\"empty-stars\"></div><div class=\"full-stars\" style=\"width:{{rate*20}}%\"></div></div>",
    
    scope:{
    
    rate:"@"
    
    }
    
    }
    
    })