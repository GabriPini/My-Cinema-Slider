const app = new Vue(
    {
        el : '#app',
        data : {
            activeImage: 0,
            movie:{
                images:[
                'https://www.themoviedb.org/t/p/original/BbNvKCuEF4SRzFXR16aK6ISFtR.jpg',

                 'https://www.themoviedb.org/t/p/original/sovNinySiSUgv7xGr2ax803R5i8.jpg',

                 'https://www.themoviedb.org/t/p/original/1xO2UnWyxoyTrdvVDXW276LaHQc.jpg',

                 'https://www.themoviedb.org/t/p/original/rTChPZw7Jyf4c20OZpN99QCRwkz.jpg',
                 
                 'https://www.themoviedb.org/t/p/original/vnrcb0H1k2PiXcaRpnUihKrUIBV.jpg',
                ],
                 

                title: 'The Mandalorian',
                category:'Sci-Fi & Fantasy, Action & Adventure, Dramma' ,
                length: '47m ep',
                        
            }
        },
        methods: {

              prevImage(){
                  if(this.activeImage === 0)
                  this.activeImage = this.movie.images.length
                  console.log('prev image')
                  this.activeImage--
              },

              nextImage(){
                
                console.log('next image')
                this.activeImage++
                if(this.activeImage === this.movie.images.length){ 
                    this.activeImage = 0
                }
              } 
        }
    }
);

   