// var container = new Vue({
//   el: "#app",
//   data: {
//     header: "Welcome to Vue JS!"
//   }
// });

var secretPairs = new Vue({
  el: "#app",
  data() {
    return {
      tacos: "I like Al pastor tacos",
      images: [
        {
          url: "https://octodex.github.com/images/steroidtocat.png",
          id: 0
        },
        {
          url: "https://octodex.github.com/images/megacat-2.png",
          id: 1
        },
        {
          url: "https://octodex.github.com/images/dodgetocat_v2.png",
          id: 2
        },
        {
          url: "https://octodex.github.com/images/mcefeeline.jpg",
          id: 3
        },
        {
          url: "https://octodex.github.com/images/ironcat.jpg",
          id: 4
        },
        {
          url: "https://octodex.github.com/images/gracehoppertocat.jpg",
          id: 5
        },
        {
          url: "https://octodex.github.com/images/spidertocat.png",
          id: 6
        },
        {
          url: "https://octodex.github.com/images/octocat-de-los-muertos.jpg",
          id: 7
        },
        {
          url: "https://octodex.github.com/images/saritocat.png",
          id: 8
        },
        {
          url: "https://octodex.github.com/images/plumber.jpg",
          id: 9
        },
        {
          url: "https://octodex.github.com/images/linktocat.jpg",
          id: 10
        },
        {
          url: "https://octodex.github.com/images/kimonotocat.png",
          id: 11
        }
      ],
      finalArray: [],
      selectedIndexes: [],
      cardIndexes: [],
      matchedIndexes: [],
      timer: "00:00:00",
      moves: 0,
      endGame: false
    };
  },
  mounted() {
    this.images = this.images.slice(0).concat(this.images);
    this.finalArray = this.randomizeCards(this.images);
    console.log(this.finalArray);
    var counter = 0;
    String.prototype.toHHMMSS = function() {
      var sec_num = parseInt(this, 10);
      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - hours * 3600) / 60);
      var seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds;
    };

    var timer = setInterval(() => {
      if (this.endGame) {
        clearInterval(timer);
      }
      counter++;
      this.timer = counter.toString().toHHMMSS();
    }, 1000);
  },
  methods: {
    flip(card_id, index) {
      // if (this.selectedIndexes.length > 2) {
      //   console.log("hello");
      //   return;
      // }

      if (this.selectedIndexes.length < 2) {
        this.moves++;
        this.selectedIndexes.push(index);
        this.cardIndexes.push(card_id);

        if (this.selectedIndexes.length === 2) {
          if (this.cardIndexes[0] === this.cardIndexes[1]) {
            this.matchedIndexes.push(card_id);
            if (this.finalArray.length / 2 === this.matchedIndexes.length) {
              this.endGame = true;
              alert("Game Over");
            }
            this.selectedIndexes = [];
            this.cardIndexes = [];
          } else {
            setTimeout(() => {
              this.selectedIndexes = [];
              this.cardIndexes = [];
            }, 500);
          }
        }
      }
    },
    randomizeCards(array) {
      var m = array.length,
        t,
        i;
      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
      // return images;
    }
  }
});
