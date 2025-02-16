import img1 from "../assets/Artboard_1.png"
import img2 from "../assets/Artboard_2.png"
import img3 from "../assets/Artboard_3.png"
 
export const baseUrl= "http://localhost:5000/";
export const logo="https://static.vecteezy.com/system/resources/previews/024/273/839/original/netflix-logo-transparent-free-png.png";
export const navItem= ["Movies","Series","TV Shows"];
export const cateogeries= [
    {ctgID:"Ctg_001", ctg_Name:"Movies"},
    {ctgID:"Ctg_002", ctg_Name:"Series"},
    {ctgID:"Ctg_003", ctg_Name:"TV Shows"}
    
]
export const languages= [
    {id:"en", lang:"English"},
    {id:"hd", lang:"Hindi"}, 
    {id:"ml", lang:"Malayalam"},
    {id:"tl", lang:"Tamil"},
    {id:"te", lang:"Telugu"}
];

export const genres=[
    {id:"G001", genre_name: "Action"},
    {id:"G002", genre_name: "Family"},
    {id:"G003", genre_name: "Comedy"},
    {id:"G004", genre_name: "Thriller"},
    {id:"G005", genre_name: "Romance"},
    {id:"G006", genre_name: "Drama"},
    {id:"G007", genre_name: "Crime"},
    {id:"G008", genre_name: "Horror"},
    {id:"G009", genre_name: "Science Fiction"},
    {id:"G010", genre_name: "Adventure"},
    {id:"G011", genre_name: "Fantasy"},
    {id:"G012", genre_name: "Mystery"},
    {id:"G013", genre_name: "Reality"},
    {id:"G014", genre_name: "Survival"},
    {id:"G015", genre_name: "Historial"},
    {id:"G016", genre_name: "Animation"},
    {id:"G017", genre_name: "Science and Technology"},

  

];

export const images = [
    img1,
    img2,
    img3
  ];

export const data=[
    {
        id:"list001",
        cID:"Ctg_001", 
        title:"Avatar - The way of water", 
        year:2022,
        duration:"3h 12 min",
        certifted:"U/A 13+",
        description:"Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        bg_img:"https://image.tmdb.org/t/p/original/AlIFUGFzxzb7G5KJWxShv1034No.jpg", 
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tIcbs6fN8WHSo6iFETz23l2N8tl.jpg",
        lg_ids:[
            "en",
            "hi",
            "tl",
            "te"
        ],
        genre_ids:[
            "G001",
            "G009",
            "G010",
            "G011", 
        ]
    },
    {
        id:"list002", 
        cID:"Ctg_001", 
        title:"Avengers: Endgame",
        year:2019,
        duration:"3h 1 min",
        certifted:"U/A 13+",
        description:"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2z7A7Qfcjb2UHF7ZAIZ2fOmPG9J.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/h9q0ozwMWy7CK5U7FSZsMVtbsCQ.jpg",
        lg_ids:[
            "en",
            "hi",
            "tl",
            "te"
        ],
        genre_ids:[
            "G001",
            "G009",
            "G010"
        ]
    },
    
    {
        id:"list003",
        cID:"Ctg_002",
         title:"Squid Game 2",
         year:2024,
         duration:"7 Episodes",
         seasons:2 ,
         certifted:"U/A 16+",
         description:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
         asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sXZhtWLo3fecavpDuOyJiayjt32.jpg",
         bg_img:"https://image.tmdb.org/t/p/original/2kzwrXJ7LUtVLohiw4xZDcB8eWz.jpg",
         lg_ids:[
            "en"
        ],
        genre_ids:[
            "G001",
            "G006",
            "G010",
            "G012"
        ]
    },
    {
        id:"list004",
        cID:"Ctg_002",  
        title:"Game of Thrones",
        year:2011,
        seasons:4,
         duration:"6 Episodes",
         certifted:"U/A 18+",
         description:"Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2AmrHvmq0kzNpYeXFSgX5QT4nDi.jpg", 
        bg_img:"https://image.tmdb.org/t/p/original/95mqtO1ZHvtnsqoMXAqBk8EjuRu.jpg",
        lg_ids:[
            "en",
            "hi",
        ],
        genre_ids:[
            "G001",
            "G006",
            "G010",
            "G009",
            "G011"
        ]
    },
    {
        id:"list005",
        cID:"Ctg_002",  
        title:"The Good Doctor",
        seasons:7,
        year:2017,
        duration:"10 Episodes",
        certifted:"U/A 16+",
        description:"Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, Shaun uses his extraordinary medical gifts to save lives and challenge the skepticism of his colleagues.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/iKsStIUwRN4XEDFrDZcpQWubdyt.jpg",
        lg_ids:[
            "en"
        ],
        genre_ids:[
            "G006"
        ]
    },
    {
        id:"list006",
        cID:"Ctg_002",  
        title:"Bridgerton",
        seasons:3,
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wMADoEM3Ngv2XcLm5EQZh37ECWk.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/tdlHJ8KoOd9UgUygCWQ3fKRNkAR.jpg",
        year:2020,
        duration:"8 Episodes",
        certifted:"U/A 18+",
        description:"As a new crop of debutantes yearns to become the brightest of the ball, a wallflower with a double life finds her light amid secrets and surprises.",
        lg_ids:[
            "en",
            "hi"
        ],
        genre_ids:[
            "G006",
            "G005"
        ]
    },
    {
        id:"list007", 
        cID:"Ctg_001", 
        title:"Marco",
        year:2024,
        duration:"2h 25 min",
        certifted:"U/A 18+",
        description:"In Kerala, the Adat family reigns supreme in the gold trade and other influential businesses. With George Peter as the respected patriarch and Marco as the fearsome adopted son, their empire is built on power and loyalty, but their world is fraught with danger and conflict.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/izLf9I5L1uJ9suO4egTyPLhz7Qq.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/a6RkQIOZ6wThQOEDv6lHsfH53hD.jpg",
        lg_ids:[
            "ml",
            "hi",
            "tl",
            "te"
        ],
        genre_ids:[
            "G001",
            "G004",
            "G007"
        ]
    },
    {
        id:"list008",
        cID:"Ctg_001",  
        title:"Interstellar",
        year:2014,
        duration:"2h 49 min",
        certifted:"U/A 13+",
        description:"The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bzONet3OeCTz5q9WOkGjVpOHMSR.jpg", 
        bg_img:"https://image.tmdb.org/t/p/original/w7F97hhhUPLVPWERoYGAiZrQpsz.jpg",
        lg_ids:[
            "en",
            "hi",
            "tl"
        ],
        genre_ids:[
            "G006",
            "G009",
            "G011"
        ]
    },
    {
        id:"list009",
        cID:"Ctg_003",
        title:"Top Chef",
        year:2006,
        seasons:21,
        duration:" 8 Episodes",
        certifted:"U/A 7+",
        description:"An American reality competition show in which chefs compete against each other in culinary challenges and are judged by a panel of professional chefs and other notables from the food and wine industry with one or more contestants eliminated in each episode.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z61ri5TRlMCdFLlcdOnyQt4OzAd.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/ntKJ3uP5EV5bcLtEOiQiT8oIOco.jpg",
        lg_ids:[
            "en"
        ],
        genre_ids:[
            "G013",
        ]
    },
    {
        id:"list010",
        cID:"Ctg_003",  
        title:"Naked and Afraid",
        year:2013,
        seasons:10,
        duration:"10 Episodes",
        certifted:"U/A 18+",
        description:"In Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village.",
        asset:"https://image.tmdb.org/t/p/original/i3yw594k1abxLXhDr1JqkGQJNAg.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/9XWqP0wvCfVmp7aJjzGy1A69s9M.jpg",
        lg_ids:[
            "en",
            "hi"
        ],
        genre_ids:[
            "G001",
            "G010",
            "G014"
        ]
    },
    {
        id:"list010",
        cID:"Ctg_002", 
        title:"Shōgun",
        year:2024,
        seasons:1,
        duration:"8 Episodes",
        certifted:"U/A 18+",
        description:"What happens when you put two complete strangers - sans clothes - in some of the most extreme environments on Earth? Each male-female duo is left with no food, no water, no clothes, and only one survival item each as they attempt to survive on their own.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/hVtuVCAxahkHdfsKkRhPsuYFior.jpg",
        lg_ids:[
            "en"
        ],
        genre_ids:[
            "G001",
            "G006",
            "G015",
            "G010"
        ]
    },
    {
        id:"list011",
        cID:"Ctg_001",  
        title:"Moana 2",
        year:2024,
        duration:"1h 20 min",
        certifted:"U/A 6+",
        description:"After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/ucF4aQhaj0hWdV4jtBSqXh2zgXi.jpg",
        lg_ids:[
            "en",
            "hi"
        ],
        genre_ids:[
            "G006",
            "G016",
            "G010","G003"
        ]
    },
    {
        id:"list012",
        cID:"Ctg_003",  
        title:"Top Gear",
        year:2002,
        seasons:33,
        duration:"10 Episodes",
        certifted:"U/A 18+",
        description:"This fast-paced and stunt-filled motor show tests whether cars, both mundane and extraordinary, live up to their manufacturers' claims. The long-running show travels to locations around the world, performing extreme stunts and challenges to see what the featured cars are capable of doing.",
        asset:"https://media.themoviedb.org/t/p/w220_and_h330_face/vYxss8LjEd8NORSIHa83cQ9wMxS.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/7zwk7X59iMHP8FzylWGsuwdSi1r.jpg",
        lg_ids:[
            "en"
        ],
        genre_ids:[
            "G013",
            "G010"
        ]
    },
    {
        id:"list013",
        cID:"Ctg_003",  
        title:"Brain Games",
        year:2016,
        seasons:5,
        duration:"8 Episodes",
        certifted:"U/A 7+",
        description:"Get ready to have your mind messed with! ''Brain Games'' is a groundbreaking series that uses interactive experiments, misdirection and tricks to demonstrate how our brains create the illusion of seamless reality through our memory, through our sensory perception, and how we focus our attention.",
        asset:"https://image.tmdb.org/t/p/original/nyOYOWwAjBPS1ZNkkWUqe5qRNTh.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/ujZjuLtkrlHOnTyWC0v8CKSsz43.jpg",
        lg_ids:[
            "en"
        ],
        genre_ids:[
            "G013",
            "G003",
            "G017"
        ]
    },
    {
        id:"list001",
        cID:"Ctg_001", 
        title:"Avatar - The way of water", 
        year:2022,
        duration:"3h 12 min",
        certifted:"U/A 13+",
        description:"Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        bg_img:"https://image.tmdb.org/t/p/original/AlIFUGFzxzb7G5KJWxShv1034No.jpg", 
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tIcbs6fN8WHSo6iFETz23l2N8tl.jpg",
        lg_ids:[
            "en",
            "hi",
            "tl",
            "te"
        ],
        genre_ids:[
            "G001",
            "G009",
            "G010",
            "G011", 
        ]
    },
    {
        id:"list002", 
        cID:"Ctg_001", 
        title:"Avengers: Endgame",
        year:2019,
        duration:"3h 1 min",
        certifted:"U/A 13+",
        description:"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2z7A7Qfcjb2UHF7ZAIZ2fOmPG9J.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/h9q0ozwMWy7CK5U7FSZsMVtbsCQ.jpg",
        lg_ids:[
            "en",
            "hi",
            "tl",
            "te"
        ],
        genre_ids:[
            "G001",
            "G009",
            "G010"
        ]
    },
    
    {
        id:"list003",
        cID:"Ctg_002",
         title:"Squid Game 2",
         year:2024,
         duration:"7 Episodes",
         seasons:2 ,
         certifted:"U/A 16+",
         description:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
         asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sXZhtWLo3fecavpDuOyJiayjt32.jpg",
         bg_img:"https://image.tmdb.org/t/p/original/2kzwrXJ7LUtVLohiw4xZDcB8eWz.jpg",
         lg_ids:[
            "en"
        ],
        genre_ids:[
            "G001",
            "G006",
            "G010",
            "G012"
        ]
    },
    {
        id:"list004",
        cID:"Ctg_002",  
        title:"Game of Thrones",
        year:2011,
        seasons:4,
         duration:"6 Episodes",
         certifted:"U/A 18+",
         description:"Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2AmrHvmq0kzNpYeXFSgX5QT4nDi.jpg", 
        bg_img:"https://image.tmdb.org/t/p/original/95mqtO1ZHvtnsqoMXAqBk8EjuRu.jpg",
        lg_ids:[
            "en",
            "hi",
        ],
        genre_ids:[
            "G001",
            "G006",
            "G010",
            "G009",
            "G011"
        ]
    },
    {
        id:"list005",
        cID:"Ctg_002",  
        title:"The Good Doctor",
        seasons:7,
        year:2017,
        duration:"10 Episodes",
        certifted:"U/A 16+",
        description:"Shaun Murphy, a young surgeon with autism and savant syndrome, relocates from a quiet country life to join a prestigious hospital's surgical unit. Unable to personally connect with those around him, Shaun uses his extraordinary medical gifts to save lives and challenge the skepticism of his colleagues.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/iKsStIUwRN4XEDFrDZcpQWubdyt.jpg",
        lg_ids:[
            "en"
        ],
        genre_ids:[
            "G006"
        ]
    },
    {
        id:"list006",
        cID:"Ctg_002",  
        title:"Bridgerton",
        seasons:3,
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wMADoEM3Ngv2XcLm5EQZh37ECWk.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/tdlHJ8KoOd9UgUygCWQ3fKRNkAR.jpg",
        year:2020,
        duration:"8 Episodes",
        certifted:"U/A 18+",
        description:"As a new crop of debutantes yearns to become the brightest of the ball, a wallflower with a double life finds her light amid secrets and surprises.",
        lg_ids:[
            "en",
            "hi"
        ],
        genre_ids:[
            "G006",
            "G005"
        ]
    },
    {
        id:"list007", 
        cID:"Ctg_001", 
        title:"Marco",
        year:2024,
        duration:"2h 25 min",
        certifted:"U/A 18+",
        description:"In Kerala, the Adat family reigns supreme in the gold trade and other influential businesses. With George Peter as the respected patriarch and Marco as the fearsome adopted son, their empire is built on power and loyalty, but their world is fraught with danger and conflict.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/izLf9I5L1uJ9suO4egTyPLhz7Qq.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/a6RkQIOZ6wThQOEDv6lHsfH53hD.jpg",
        lg_ids:[
            "ml",
            "hi",
            "tl",
            "te"
        ],
        genre_ids:[
            "G001",
            "G004",
            "G007"
        ]
    },
    {
        id:"list008",
        cID:"Ctg_001",  
        title:"Interstellar",
        year:2014,
        duration:"2h 49 min",
        certifted:"U/A 13+",
        description:"The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bzONet3OeCTz5q9WOkGjVpOHMSR.jpg", 
        bg_img:"https://image.tmdb.org/t/p/original/w7F97hhhUPLVPWERoYGAiZrQpsz.jpg",
        lg_ids:[
            "en",
            "hi",
            "tl"
        ],
        genre_ids:[
            "G006",
            "G009",
            "G011"
        ]
    },
    {
        id:"list009",
        cID:"Ctg_003",
        title:"Top Chef",
        year:2006,
        seasons:21,
        duration:" 8 Episodes",
        certifted:"U/A 7+",
        description:"An American reality competition show in which chefs compete against each other in culinary challenges and are judged by a panel of professional chefs and other notables from the food and wine industry with one or more contestants eliminated in each episode.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z61ri5TRlMCdFLlcdOnyQt4OzAd.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/ntKJ3uP5EV5bcLtEOiQiT8oIOco.jpg",
        lg_ids:[
            "en"
        ],
        genre_ids:[
            "G013",
        ]
    },
    {
        id:"list010",
        cID:"Ctg_003",  
        title:"Naked and Afraid",
        year:2013,
        seasons:10,
        duration:"10 Episodes",
        certifted:"U/A 18+",
        description:"In Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village.",
        asset:"https://image.tmdb.org/t/p/original/i3yw594k1abxLXhDr1JqkGQJNAg.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/9XWqP0wvCfVmp7aJjzGy1A69s9M.jpg",
        lg_ids:[
            "en",
            "hi"
        ],
        genre_ids:[
            "G001",
            "G010",
            "G014"
        ]
    },
    {
        id:"list010",
        cID:"Ctg_002", 
        title:"Shōgun",
        year:2024,
        seasons:1,
        duration:"8 Episodes",
        certifted:"U/A 18+",
        description:"What happens when you put two complete strangers - sans clothes - in some of the most extreme environments on Earth? Each male-female duo is left with no food, no water, no clothes, and only one survival item each as they attempt to survive on their own.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/hVtuVCAxahkHdfsKkRhPsuYFior.jpg",
        lg_ids:[
            "en"
        ],
        genre_ids:[
            "G001",
            "G006",
            "G015",
            "G010"
        ]
    },
    {
        id:"list011",
        cID:"Ctg_001",  
        title:"Moana 2",
        year:2024,
        duration:"1h 20 min",
        certifted:"U/A 6+",
        description:"After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
        asset:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/ucF4aQhaj0hWdV4jtBSqXh2zgXi.jpg",
        lg_ids:[
            "en",
            "hi"
        ],
        genre_ids:[
            "G006",
            "G016",
            "G010","G003"
        ]
    },
    {
        id:"list012",
        cID:"Ctg_003",  
        title:"Top Gear",
        year:2002,
        seasons:33,
        duration:"10 Episodes",
        certifted:"U/A 18+",
        description:"This fast-paced and stunt-filled motor show tests whether cars, both mundane and extraordinary, live up to their manufacturers' claims. The long-running show travels to locations around the world, performing extreme stunts and challenges to see what the featured cars are capable of doing.",
        asset:"https://media.themoviedb.org/t/p/w220_and_h330_face/vYxss8LjEd8NORSIHa83cQ9wMxS.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/7zwk7X59iMHP8FzylWGsuwdSi1r.jpg",
        lg_ids:[
            "en"
        ],
        genre_ids:[
            "G013",
            "G010"
        ]
    },
    {
        id:"list013",
        cID:"Ctg_003",  
        title:"Brain Games",
        year:2016,
        seasons:5,
        duration:"8 Episodes",
        certifted:"U/A 7+",
        description:"Get ready to have your mind messed with! ''Brain Games'' is a groundbreaking series that uses interactive experiments, misdirection and tricks to demonstrate how our brains create the illusion of seamless reality through our memory, through our sensory perception, and how we focus our attention.",
        asset:"https://image.tmdb.org/t/p/original/nyOYOWwAjBPS1ZNkkWUqe5qRNTh.jpg",
        bg_img:"https://image.tmdb.org/t/p/original/ujZjuLtkrlHOnTyWC0v8CKSsz43.jpg",
        lg_ids:[
            "en"
        ],
        genre_ids:[
            "G013",
            "G003",
            "G017"
        ]
    },
    ]