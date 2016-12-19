var initialCats = [
{
    clickCount: 0,
    name: 'Tabby',
    imgSrc:'img/tabby.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigbem',
    nicknames: ['tab' ,'tablet','tatatatab']
},

{
     clickCount: 0,
    name: 'Tiger',
    imgSrc:'img/tiger.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigbem',
    nicknames: ['tetra' ]

},

{
     clickCount: 0,
    name: 'Catty',
    imgSrc:'img/catty.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigbem',
    nicknames: ['catsy' ,'fsdhjl']

},

{
     clickCount: 0,
    name: 'Chan',
    imgSrc:'img/chan.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigbem',
    nicknames: ['chansy' ,'chandry']

},

{
     clickCount: 0,
    name: 'Gowji',
    imgSrc:'img/gowji.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigbem',
    nicknames: ['gowty' ,'bugger']
},
]









var Cat = function(data) {

var self=this;

 self.clickCount = ko.observable(data.clickCount);
 self.name = ko.observable(data.name);
 self.imgSrc = ko.observable(data.imgSrc);
 self.imgAttribution = ko.observable(data.imgAttribution);
 self.nicknames= ko.observableArray(data.nicknames);

//displaying of title
self.title = ko.computed(function(){
    var title ;
    var clicks = self.clickCount();
    if (clicks<10) {
        title= 'infant';
    }
    else if (clicks<25) {
        title = "teen";
    }
    else if (clicks<35) {
        title= 'adult';
    }
    return title;
},self);

};


var ViewModel = function () {

var self= this;

self.CatList = ko.observableArray([]);

initialCats.forEach(function(catItem){
    self.CatList.push( new Cat(catItem) );

});

//passing the data values to the Cat constructor
self.currentCat= ko.observable( self.CatList()[0] );

self.changeCurrentCat = function(clickedCat){
        self.currentCat(clickedCat);
};

self.incrementCounter = function(){
     //using self to avoid confusion of this keyword
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    //similar to var count=0; count++;
    };
};

ko.applyBindings(new ViewModel());
