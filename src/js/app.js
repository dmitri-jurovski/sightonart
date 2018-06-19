'use strikc';

// Display img inside flashcard from instagram api
// Add to each object in data array custom property name viweMode
// Display back part of flashcard width description
// Crate transition flip effect
// Sort by tag
// Booking button
// Description

const token = '7562922180.1677ed0.fc4e273eea1049be86e4a335cb642dbc';
const insUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token;

var app = new Vue({
    el: '#app',
    data () {
      return {
        media: '',
        errors: '',
        acc: {
          title: "Hello"
        }
      }
    },
    created: function () {
      axios.get(insUrl)
      .then(response => {
        // JSON responses are automatically parsed.
        this.media = response.data.data;
        this.media.forEach(function (value, key, i) {
            Vue.set(i[key],  'viewMode',  false );
        });
        //console.log("This media", this.media);
      })
      .catch(error => console.log(error))

    }, // created
    mounted: function () {
        console.log('Значение amounted: ' + this);
    }, // mounted
    ready: function () {
    console.log("Ready Statment");
    },
    methods: {

      sayHello: function() {
        alert(this.addmode);
      },
      toggleMode: function() {
        this.viewMode = !this.viewMode;
        console.log(this.viewMode);
      }


    }, // End methods

    computed: {

      uniqueItemList: function() {
      // Blanc function
      // ****
      }
    }, // End computer



  });
