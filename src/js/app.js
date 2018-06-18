'use strikc';

const token = '7562922180.1677ed0.fc4e273eea1049be86e4a335cb642dbc';
const insUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token;

var app = new Vue({
    el: '#app',
    data () {
      return {
        media: '',
        acc: {
          title: "Hello",
          addedd: false,
        }
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        axios.get(insUrl)
        .then(response => {
          // JSON responses are automatically parsed.
          this.media = response.data.data;

          this.media.forEach(function (media) {
            media.addmode = false;
          });
        })
      })
    },

    methods: {
      sayHello: function() {
        alert(this.addmode);
      },
      toggleMode: function() {
        this.addmode = !this.addmode;
        console.log(this.addmode);
      }


    }, // End methods

    computed: {

      uniqueItemList: function() {
      // Blanc function
      // ****
      }
    } // End computer

  });
