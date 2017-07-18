// var container = new Vue({
//   el: "#app",
//   data: {
//     header: "Welcome to Vue JS!"
//   }
// });

var frameworks = new Vue({
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
      selectedIndexes: [],
      cardIndexes: [],
      matchedIndexes: [],
      timer: "00:00:00",
      moves: 0,
      endGame: false
    };
  },
  mounted() {
    console.log("hello");
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
      console.log(counter.toString().toHHMMSS());
      this.timer = counter.toString().toHHMMSS();
    }, 1000);
  },
  methods: {
    flip(card_id, index) {
      this.moves++;
      this.selectedIndexes.push(index);
      this.cardIndexes.push(card_id);
      if (this.selectedIndexes.length === 2) {
        if (this.cardIndexes[0] === this.cardIndexes[1]) {
          this.matchedIndexes.push(card_id);
          if (this.images.length === this.matchedIndexes.length) {
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
  }
});
