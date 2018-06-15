'use strikc';

const token = '7562922180.1677ed0.fc4e273eea1049be86e4a335cb642dbc';
const insUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token;
 new Vue({
    el: '#app',
    data () {
      return {
        media: [],
        acc: {
          title: "Hello"
        }
      }
    },
    mounted () {
        axios.get(insUrl)
        .then(response => {
      // JSON responses are automatically parsed.
      this.media = response.data.data
      })
    },
    methods: {
      toggleDetails: function(media) {
        console.log(media.title);
        media.showDetail = !media.showDetail
      },
      filterList: function() {
        this.type = event.target.value;
      },
    }, // End methods

    computed: {
      uniqueItemList: function() {
        const types = [];
        this.mediaList.forEach((item) => {
          if(!types.includes(item.type)) {
            types.push(item.type);
          }
        });
        return types;

      }
    } // End computer

  });
