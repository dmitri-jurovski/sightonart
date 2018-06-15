const media = [
    {
      title: 'Hop on Pop',
      description: "A delightful children's book.",
      type: 'book',
      contributor: 'Dr. Suess',
      showDetail: false,
    },
    {



      title: 'The Joy of Painting',
      description: "Create a world of happy little trees!",
      type: 'DVD',
      contributor: 'Bob Ross',
      showDetail: false
    },
    {
      title: 'Supernatural: The Complete 12th Season',
      description: "A (literally) neverending roadtrip.",
      type: 'DVD',
      contributor: "",
      showDetail: false
    },
    {
      title: 'Planet Earth II',
      description: "Hours of beautiful but heart attack-inducing nature footage",
      type: 'streaming video',
      contributor: 'David Attenborough',
      showDetail: false,
    },
    {
      title: 'Titanic',
      description: "The boat sinks.",
      type: 'DVD',
      contributor: 'James Cameron',
      showDetail: false,
    },
    {
      title: 'The Sirens of Titan',
      description: "Mankind flung its advance agents ever outward, ever outward... it flung them like stones.",
      type: 'book',
      contributor: 'Kurt Vonnegut',
      showDetail: false,
    },
    {
      title: 'Better Call Saul',
      description: "A slow-burning Breaking Bad prequel.",
      type: 'streaming video',
      contributor: '',
      showDetail: false,
    }
  ]





const app = new Vue({
    el: '#media-list',
    data () {
      return {
        title: 'Treehouse Public Library',
        mediaList: media,
        type: '',
        info: null
      }
    },
    mounted () {
       fetch('https://dog.ceo/api/breeds/image/random')

   .then(
     function(response) {
       if (response.status !== 200) {
         console.log('Looks like there was a problem. Status Code: ' +
           response.status);
         return;
       }

       // Examine the text in the response
       response.json().then(function(data) {
         console.log(data);
       });
     }
   )
   .catch(function(err) {
     console.log('Fetch Error :-S', err);
   });
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
