(function(){
  // modules are where our application components live
  var storeApp = angular.module('StoreApp', [ ]);
  // controllers are where we define our apps behavior by adding functions and values
  storeApp.controller('StoreController', function(){
    this.products = gems;
  });

  storeApp.controller('GalleryController', function(){
    this.selectedImage = 0;
    this.setSelectedImage = function(imageNumber){
      console.log('Changing to image number: ',imageNumber);
      if(imageNumber){
        this.selectedImage = imageNumber;
      }else{
        this.selectedImage = 0;
      }
    }
  });

  storeApp.controller('PanelController', function(){
    this.selectedTab = 'description';
    this.setTab = function(setTab){
      console.log('tab is set to:', setTab);
      this.selectedTab = setTab;
    };
    this.isTabSelected = function(tab){
      // console.log('Checking to see if ', this.selectedTab, ' === ', tab, 'it is: ', this.selectedTab === tab);
      return this.selectedTab === tab;
    }
  });

  storeApp.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product, reviewForm){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
      reviewForm.$setPristine()
    };
  });

  var gems = [{
    name: 'Ruby',
    price: 2,
    shine: 1,
    description: 'This is a red gem!',
    images: [
      {
        full: '../images/gem-01.gif',
        thumb: '../images/gem-01.gif'
      },
      {
        full: '../images/gem-02.gif',
        thumb: '../images/gem-02.gif'
      },
      {
        full: '../images/gem-03.gif',
        thumb: '../images/gem-03.gif'
      },
      {
        full: '../images/gem-04.gif',
        thumb: '../images/gem-04.gif'
      }],
      reviews: [
        {
          stars: 2,
          body: "Good but not great.",
          author: "jon@mail.com",
          createdOn: new Date(1475766970611)
        },
        {
          stars: 5,
          body: "So Amazing!",
          author: "tina@mail.com",
          createdOn: new Date(1475766970611)
        },
        {
          stars: 4,
          body: "What shine!",
          author: "laura@mail.com",
          createdOn: new Date(1475766970611)
        }
      ],
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Saphire',
      price: 5.95,
      shine: 1,
      description: 'This is a blue gem!',
      images: [
        {
          full: '../images/gem-05.gif',
          thumb: '../images/gem-05.gif'
        },
        {
          full: '../images/gem-06.gif',
          thumb: '../images/gem-06.gif'
        },
        {
          full: '../images/gem-07.gif',
          thumb: '../images/gem-07.gif'
        }],
        reviews: [
          {
            stars: 2,
            body: "Good but not great.",
            author: "jon@mail.com",
            createdOn: new Date(1475766970611)
          },
          {
            stars: 5,
            body: "So Amazing!",
            author: "tina@mail.com",
            createdOn: new Date(1475766970611)
          },
          {
            stars: 4,
            body: "What shine!",
            author: "laura@mail.com",
            createdOn: new Date(1475766970611)
          }
        ],
        canPurchase: false,
        soldOut: false
      },
      {
        name: 'Emerald',
        price: 12.95,
        shine: 1,
        description: 'This is a green gem!',
        images: [
          {
            full: '../images/gem-07.gif',
            thumb: '../images/gem-07.gif'
          },
          {
            full: '../images/gem-08.gif',
            thumb: '../images/gem-08.gif'
          },
          {
            full: '../images/gem-09.gif',
            thumb: '../images/gem-09.gif'
          }],
          reviews: [
            {
              stars: 2,
              body: "Good but not great.",
              author: "jon@mail.com",
              createdOn: new Date(1475766970611)
            },
            {
              stars: 5,
              body: "So Amazing!",
              author: "tina@mail.com",
              createdOn: new Date(1475766970611)
            },
            {
              stars: 4,
              body: "What shine!",
              author: "laura@mail.com",
              createdOn: new Date(1475766970611)
            }
          ],
          canPurchase: true,
          soldOut: true
        }];
      })();
