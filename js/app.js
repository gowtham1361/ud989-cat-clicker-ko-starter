var ViewModel = function () {
 this.clickCount = ko.observable(0);
 console.log(this);
 this.name = ko.observable('Tabby');
 this.imgSrc = ko.observable('img/tabby.jpg');
 this.imgAttribution = ko.observable('https://www.flickr.com/photos/bigbem');

this.incrementCounter = function(){
     //console.log(this);
    this.clickCount(this.clickCount() + 1);
    };
this.months= ko.observableArray([
    'Bert' ,'Charles','Denise']);

};
//ViewModel.months().push('rabi');
ko.applyBindings(new ViewModel());
/*ko.applyBindings({
        months: [ 'Jan', 'Feb', 'Mar', 'etc' ]
    });*/