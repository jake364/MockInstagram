export default function handler(req, res) {
  const data = {
    data: [
      {
        id: 1,
        title: "Golden Hour in the Mountains",
        thumbnail: "https://picsum.photos/400/400?random=1",
        fullsize: "https://picsum.photos/1200/1200?random=1",
        dateTaken: "2024-03-15",
        author: {
          name: "Sarah Chen",
          image: "https://i.pravatar.cc/150?img=1",
          userSince: "2022-01-10",
          channel: "@sarahphotography"
        }
      },
      {
        id: 2,
        title: "Urban Street Photography",
        thumbnail: "https://picsum.photos/400/400?random=2",
        fullsize: "https://picsum.photos/1200/1200?random=2",
        dateTaken: "2024-05-22",
        author: {
          name: "Michael Torres",
          image: "https://i.pravatar.cc/150?img=2",
          userSince: "2021-08-05",
          channel: "@miketorresphotos"
        }
      },
      {
        id: 3,
        title: "Ocean Waves at Sunset",
        thumbnail: "https://picsum.photos/400/400?random=3",
        fullsize: "https://picsum.photos/1200/1200?random=3",
        dateTaken: "2024-07-10",
        author: {
          name: "Emma Wilson",
          image: "https://i.pravatar.cc/150?img=3",
          userSince: "2023-02-14",
          channel: "@emmawilsonphoto"
        }
      },
      {
        id: 4,
        title: "Autumn Forest Path",
        thumbnail: "https://picsum.photos/400/400?random=4",
        fullsize: "https://picsum.photos/1200/1200?random=4",
        dateTaken: "2023-10-08",
        author: {
          name: "David Park",
          image: "https://i.pravatar.cc/150?img=4",
          userSince: "2020-11-20",
          channel: "@davidparkphotos"
        }
      },
      {
        id: 5,
        title: "City Lights at Night",
        thumbnail: "https://picsum.photos/400/400?random=5",
        fullsize: "https://picsum.photos/1200/1200?random=5",
        dateTaken: "2024-01-18",
        author: {
          name: "Lisa Rodriguez",
          image: "https://i.pravatar.cc/150?img=5",
          userSince: "2022-06-30",
          channel: "@lisarodphoto"
        }
      },
      {
        id: 6,
        title: "Desert Landscape",
        thumbnail: "https://picsum.photos/400/400?random=6",
        fullsize: "https://picsum.photos/1200/1200?random=6",
        dateTaken: "2024-04-12",
        author: {
          name: "James Anderson",
          image: "https://i.pravatar.cc/150?img=6",
          userSince: "2021-03-15",
          channel: "@jamesandersonphoto"
        }
      },
      {
        id: 7,
        title: "Spring Flowers Bloom",
        thumbnail: "https://picsum.photos/400/400?random=7",
        fullsize: "https://picsum.photos/1200/1200?random=7",
        dateTaken: "2024-03-28",
        author: {
          name: "Sophia Lee",
          image: "https://i.pravatar.cc/150?img=7",
          userSince: "2023-09-01",
          channel: "@sophialeephoto"
        }
      },
      {
        id: 8,
        title: "Mountain Lake Reflection",
        thumbnail: "https://picsum.photos/400/400?random=8",
        fullsize: "https://picsum.photos/1200/1200?random=8",
        dateTaken: "2024-06-05",
        author: {
          name: "Ryan Martinez",
          image: "https://i.pravatar.cc/150?img=8",
          userSince: "2020-07-22",
          channel: "@ryanmartinezphoto"
        }
      },
      {
        id: 9,
        title: "Rainy Day in the City",
        thumbnail: "https://picsum.photos/400/400?random=9",
        fullsize: "https://picsum.photos/1200/1200?random=9",
        dateTaken: "2024-02-14",
        author: {
          name: "Olivia Taylor",
          image: "https://i.pravatar.cc/150?img=9",
          userSince: "2022-12-10",
          channel: "@oliviataylorphoto"
        }
      },
      {
        id: 10,
        title: "Wildlife in Nature",
        thumbnail: "https://picsum.photos/400/400?random=10",
        fullsize: "https://picsum.photos/1200/1200?random=10",
        dateTaken: "2024-08-20",
        author: {
          name: "Daniel Kim",
          image: "https://i.pravatar.cc/150?img=10",
          userSince: "2021-05-18",
          channel: "@danielkimphoto"
        }
      },
      {
        id: 11,
        title: "Minimalist Architecture",
        thumbnail: "https://picsum.photos/400/400?random=11",
        fullsize: "https://picsum.photos/1200/1200?random=11",
        dateTaken: "2024-07-03",
        author: {
          name: "Sarah Chen",
          image: "https://i.pravatar.cc/150?img=1",
          userSince: "2022-01-10",
          channel: "@sarahphotography"
        }
      },
      {
        id: 12,
        title: "Tropical Paradise",
        thumbnail: "https://picsum.photos/400/400?random=12",
        fullsize: "https://picsum.photos/1200/1200?random=12",
        dateTaken: "2024-09-15",
        author: {
          name: "Michael Torres",
          image: "https://i.pravatar.cc/150?img=2",
          userSince: "2021-08-05",
          channel: "@miketorresphotos"
        }
      },
      {
        id: 13,
        title: "Vintage Car Show",
        thumbnail: "https://picsum.photos/400/400?random=13",
        fullsize: "https://picsum.photos/1200/1200?random=13",
        dateTaken: "2024-05-08",
        author: {
          name: "Emma Wilson",
          image: "https://i.pravatar.cc/150?img=3",
          userSince: "2023-02-14",
          channel: "@emmawilsonphoto"
        }
      },
      {
        id: 14,
        title: "Snowy Mountain Peak",
        thumbnail: "https://picsum.photos/400/400?random=14",
        fullsize: "https://picsum.photos/1200/1200?random=14",
        dateTaken: "2023-12-20",
        author: {
          name: "David Park",
          image: "https://i.pravatar.cc/150?img=4",
          userSince: "2020-11-20",
          channel: "@davidparkphotos"
        }
      },
      {
        id: 15,
        title: "Coffee Shop Vibes",
        thumbnail: "https://picsum.photos/400/400?random=15",
        fullsize: "https://picsum.photos/1200/1200?random=15",
        dateTaken: "2024-04-25",
        author: {
          name: "Lisa Rodriguez",
          image: "https://i.pravatar.cc/150?img=5",
          userSince: "2022-06-30",
          channel: "@lisarodphoto"
        }
      },
      {
        id: 16,
        title: "Lighthouse at Dawn",
        thumbnail: "https://picsum.photos/400/400?random=16",
        fullsize: "https://picsum.photos/1200/1200?random=16",
        dateTaken: "2024-06-18",
        author: {
          name: "James Anderson",
          image: "https://i.pravatar.cc/150?img=6",
          userSince: "2021-03-15",
          channel: "@jamesandersonphoto"
        }
      },
      {
        id: 17,
        title: "Street Art Mural",
        thumbnail: "https://picsum.photos/400/400?random=17",
        fullsize: "https://picsum.photos/1200/1200?random=17",
        dateTaken: "2024-08-05",
        author: {
          name: "Sophia Lee",
          image: "https://i.pravatar.cc/150?img=7",
          userSince: "2023-09-01",
          channel: "@sophialeephoto"
        }
      },
      {
        id: 18,
        title: "Waterfall in the Jungle",
        thumbnail: "https://picsum.photos/400/400?random=18",
        fullsize: "https://picsum.photos/1200/1200?random=18",
        dateTaken: "2024-07-22",
        author: {
          name: "Ryan Martinez",
          image: "https://i.pravatar.cc/150?img=8",
          userSince: "2020-07-22",
          channel: "@ryanmartinezphoto"
        }
      },
      {
        id: 19,
        title: "Industrial Design",
        thumbnail: "https://picsum.photos/400/400?random=19",
        fullsize: "https://picsum.photos/1200/1200?random=19",
        dateTaken: "2024-03-10",
        author: {
          name: "Olivia Taylor",
          image: "https://i.pravatar.cc/150?img=9",
          userSince: "2022-12-10",
          channel: "@oliviataylorphoto"
        }
      },
      {
        id: 20,
        title: "Sunset on the Beach",
        thumbnail: "https://picsum.photos/400/400?random=20",
        fullsize: "https://picsum.photos/1200/1200?random=20",
        dateTaken: "2024-09-08",
        author: {
          name: "Daniel Kim",
          image: "https://i.pravatar.cc/150?img=10",
          userSince: "2021-05-18",
          channel: "@danielkimphoto"
        }
      },
      {
        id: 21,
        title: "Northern Lights Display",
        thumbnail: "https://picsum.photos/400/400?random=21",
        fullsize: "https://picsum.photos/1200/1200?random=21",
        dateTaken: "2024-01-30",
        author: {
          name: "Sarah Chen",
          image: "https://i.pravatar.cc/150?img=1",
          userSince: "2022-01-10",
          channel: "@sarahphotography"
        }
      },
      {
        id: 22,
        title: "Farmer's Market",
        thumbnail: "https://picsum.photos/400/400?random=22",
        fullsize: "https://picsum.photos/1200/1200?random=22",
        dateTaken: "2024-05-14",
        author: {
          name: "Michael Torres",
          image: "https://i.pravatar.cc/150?img=2",
          userSince: "2021-08-05",
          channel: "@miketorresphotos"
        }
      },
      {
        id: 23,
        title: "Modern Skyscraper",
        thumbnail: "https://picsum.photos/400/400?random=23",
        fullsize: "https://picsum.photos/1200/1200?random=23",
        dateTaken: "2024-06-28",
        author: {
          name: "Emma Wilson",
          image: "https://i.pravatar.cc/150?img=3",
          userSince: "2023-02-14",
          channel: "@emmawilsonphoto"
        }
      },
      {
        id: 24,
        title: "Countryside Farmland",
        thumbnail: "https://picsum.photos/400/400?random=24",
        fullsize: "https://picsum.photos/1200/1200?random=24",
        dateTaken: "2024-08-12",
        author: {
          name: "David Park",
          image: "https://i.pravatar.cc/150?img=4",
          userSince: "2020-11-20",
          channel: "@davidparkphotos"
        }
      },
      {
        id: 25,
        title: "Historic Temple",
        thumbnail: "https://picsum.photos/400/400?random=25",
        fullsize: "https://picsum.photos/1200/1200?random=25",
        dateTaken: "2024-04-05",
        author: {
          name: "Lisa Rodriguez",
          image: "https://i.pravatar.cc/150?img=5",
          userSince: "2022-06-30",
          channel: "@lisarodphoto"
        }
      },
      {
        id: 26,
        title: "Foggy Morning Bridge",
        thumbnail: "https://picsum.photos/400/400?random=26",
        fullsize: "https://picsum.photos/1200/1200?random=26",
        dateTaken: "2024-02-28",
        author: {
          name: "James Anderson",
          image: "https://i.pravatar.cc/150?img=6",
          userSince: "2021-03-15",
          channel: "@jamesandersonphoto"
        }
      },
      {
        id: 27,
        title: "Colorful Hot Air Balloons",
        thumbnail: "https://picsum.photos/400/400?random=27",
        fullsize: "https://picsum.photos/1200/1200?random=27",
        dateTaken: "2024-07-15",
        author: {
          name: "Sophia Lee",
          image: "https://i.pravatar.cc/150?img=7",
          userSince: "2023-09-01",
          channel: "@sophialeephoto"
        }
      },
      {
        id: 28,
        title: "Rocky Coastline",
        thumbnail: "https://picsum.photos/400/400?random=28",
        fullsize: "https://picsum.photos/1200/1200?random=28",
        dateTaken: "2024-09-22",
        author: {
          name: "Ryan Martinez",
          image: "https://i.pravatar.cc/150?img=8",
          userSince: "2020-07-22",
          channel: "@ryanmartinezphoto"
        }
      },
      {
        id: 29,
        title: "Cherry Blossoms",
        thumbnail: "https://picsum.photos/400/400?random=29",
        fullsize: "https://picsum.photos/1200/1200?random=29",
        dateTaken: "2024-03-20",
        author: {
          name: "Olivia Taylor",
          image: "https://i.pravatar.cc/150?img=9",
          userSince: "2022-12-10",
          channel: "@oliviataylorphoto"
        }
      },
      {
        id: 30,
        title: "Canyon Vista",
        thumbnail: "https://picsum.photos/400/400?random=30",
        fullsize: "https://picsum.photos/1200/1200?random=30",
        dateTaken: "2024-05-30",
        author: {
          name: "Daniel Kim",
          image: "https://i.pravatar.cc/150?img=10",
          userSince: "2021-05-18",
          channel: "@danielkimphoto"
        }
      },
      {
        id: 31,
        title: "Winter Wonderland",
        thumbnail: "https://picsum.photos/400/400?random=31",
        fullsize: "https://picsum.photos/1200/1200?random=31",
        dateTaken: "2023-12-15",
        author: {
          name: "Sarah Chen",
          image: "https://i.pravatar.cc/150?img=1",
          userSince: "2022-01-10",
          channel: "@sarahphotography"
        }
      },
      {
        id: 32,
        title: "Urban Graffiti",
        thumbnail: "https://picsum.photos/400/400?random=32",
        fullsize: "https://picsum.photos/1200/1200?random=32",
        dateTaken: "2024-06-10",
        author: {
          name: "Michael Torres",
          image: "https://i.pravatar.cc/150?img=2",
          userSince: "2021-08-05",
          channel: "@miketorresphotos"
        }
      },
      {
        id: 33,
        title: "Sailing at Sea",
        thumbnail: "https://picsum.photos/400/400?random=33",
        fullsize: "https://picsum.photos/1200/1200?random=33",
        dateTaken: "2024-08-18",
        author: {
          name: "Emma Wilson",
          image: "https://i.pravatar.cc/150?img=3",
          userSince: "2023-02-14",
          channel: "@emmawilsonphoto"
        }
      },
      {
        id: 34,
        title: "Starry Night Sky",
        thumbnail: "https://picsum.photos/400/400?random=34",
        fullsize: "https://picsum.photos/1200/1200?random=34",
        dateTaken: "2024-07-28",
        author: {
          name: "David Park",
          image: "https://i.pravatar.cc/150?img=4",
          userSince: "2020-11-20",
          channel: "@davidparkphotos"
        }
      },
      {
        id: 35,
        title: "Bamboo Forest",
        thumbnail: "https://picsum.photos/400/400?random=35",
        fullsize: "https://picsum.photos/1200/1200?random=35",
        dateTaken: "2024-04-18",
        author: {
          name: "Lisa Rodriguez",
          image: "https://i.pravatar.cc/150?img=5",
          userSince: "2022-06-30",
          channel: "@lisarodphoto"
        }
      },
      {
        id: 36,
        title: "Rustic Barn",
        thumbnail: "https://picsum.photos/400/400?random=36",
        fullsize: "https://picsum.photos/1200/1200?random=36",
        dateTaken: "2024-09-05",
        author: {
          name: "James Anderson",
          image: "https://i.pravatar.cc/150?img=6",
          userSince: "2021-03-15",
          channel: "@jamesandersonphoto"
        }
      },
      {
        id: 37,
        title: "Neon Signs at Night",
        thumbnail: "https://picsum.photos/400/400?random=37",
        fullsize: "https://picsum.photos/1200/1200?random=37",
        dateTaken: "2024-05-20",
        author: {
          name: "Sophia Lee",
          image: "https://i.pravatar.cc/150?img=7",
          userSince: "2023-09-01",
          channel: "@sophialeephoto"
        }
      },
      {
        id: 38,
        title: "Volcanic Landscape",
        thumbnail: "https://picsum.photos/400/400?random=38",
        fullsize: "https://picsum.photos/1200/1200?random=38",
        dateTaken: "2024-06-25",
        author: {
          name: "Ryan Martinez",
          image: "https://i.pravatar.cc/150?img=8",
          userSince: "2020-07-22",
          channel: "@ryanmartinezphoto"
        }
      },
      {
        id: 39,
        title: "Garden Paradise",
        thumbnail: "https://picsum.photos/400/400?random=39",
        fullsize: "https://picsum.photos/1200/1200?random=39",
        dateTaken: "2024-03-25",
        author: {
          name: "Olivia Taylor",
          image: "https://i.pravatar.cc/150?img=9",
          userSince: "2022-12-10",
          channel: "@oliviataylorphoto"
        }
      },
      {
        id: 40,
        title: "Ice Cave Exploration",
        thumbnail: "https://picsum.photos/400/400?random=40",
        fullsize: "https://picsum.photos/1200/1200?random=40",
        dateTaken: "2024-01-22",
        author: {
          name: "Daniel Kim",
          image: "https://i.pravatar.cc/150?img=10",
          userSince: "2021-05-18",
          channel: "@danielkimphoto"
        }
      },
      {
        id: 41,
        title: "Cathedral Interior",
        thumbnail: "https://picsum.photos/400/400?random=41",
        fullsize: "https://picsum.photos/1200/1200?random=41",
        dateTaken: "2024-07-08",
        author: {
          name: "Sarah Chen",
          image: "https://i.pravatar.cc/150?img=1",
          userSince: "2022-01-10",
          channel: "@sarahphotography"
        }
      },
      {
        id: 42,
        title: "Motorcycle Journey",
        thumbnail: "https://picsum.photos/400/400?random=42",
        fullsize: "https://picsum.photos/1200/1200?random=42",
        dateTaken: "2024-08-28",
        author: {
          name: "Michael Torres",
          image: "https://i.pravatar.cc/150?img=2",
          userSince: "2021-08-05",
          channel: "@miketorresphotos"
        }
      },
      {
        id: 43,
        title: "Lavender Fields",
        thumbnail: "https://picsum.photos/400/400?random=43",
        fullsize: "https://picsum.photos/1200/1200?random=43",
        dateTaken: "2024-06-15",
        author: {
          name: "Emma Wilson",
          image: "https://i.pravatar.cc/150?img=3",
          userSince: "2023-02-14",
          channel: "@emmawilsonphoto"
        }
      },
      {
        id: 44,
        title: "Cable Car View",
        thumbnail: "https://picsum.photos/400/400?random=44",
        fullsize: "https://picsum.photos/1200/1200?random=44",
        dateTaken: "2024-04-22",
        author: {
          name: "David Park",
          image: "https://i.pravatar.cc/150?img=4",
          userSince: "2020-11-20",
          channel: "@davidparkphotos"
        }
      },
      {
        id: 45,
        title: "Reflection Pool",
        thumbnail: "https://picsum.photos/400/400?random=45",
        fullsize: "https://picsum.photos/1200/1200?random=45",
        dateTaken: "2024-09-12",
        author: {
          name: "Lisa Rodriguez",
          image: "https://i.pravatar.cc/150?img=5",
          userSince: "2022-06-30",
          channel: "@lisarodphoto"
        }
      },
      {
        id: 46,
        title: "Sunflower Farm",
        thumbnail: "https://picsum.photos/400/400?random=46",
        fullsize: "https://picsum.photos/1200/1200?random=46",
        dateTaken: "2024-07-18",
        author: {
          name: "James Anderson",
          image: "https://i.pravatar.cc/150?img=6",
          userSince: "2021-03-15",
          channel: "@jamesandersonphoto"
        }
      },
      {
        id: 47,
        title: "Train Station at Rush Hour",
        thumbnail: "https://picsum.photos/400/400?random=47",
        fullsize: "https://picsum.photos/1200/1200?random=47",
        dateTaken: "2024-05-28",
        author: {
          name: "Sophia Lee",
          image: "https://i.pravatar.cc/150?img=7",
          userSince: "2023-09-01",
          channel: "@sophialeephoto"
        }
      },
      {
        id: 48,
        title: "Zen Rock Garden",
        thumbnail: "https://picsum.photos/400/400?random=48",
        fullsize: "https://picsum.photos/1200/1200?random=48",
        dateTaken: "2024-03-05",
        author: {
          name: "Ryan Martinez",
          image: "https://i.pravatar.cc/150?img=8",
          userSince: "2020-07-22",
          channel: "@ryanmartinezphoto"
        }
      },
      {
        id: 49,
        title: "Drone Aerial View",
        thumbnail: "https://picsum.photos/400/400?random=49",
        fullsize: "https://picsum.photos/1200/1200?random=49",
        dateTaken: "2024-08-08",
        author: {
          name: "Olivia Taylor",
          image: "https://i.pravatar.cc/150?img=9",
          userSince: "2022-12-10",
          channel: "@oliviataylorphoto"
        }
      },
      {
        id: 50,
        title: "Peaceful Pier",
        thumbnail: "https://picsum.photos/400/400?random=50",
        fullsize: "https://picsum.photos/1200/1200?random=50",
        dateTaken: "2024-09-30",
        author: {
          name: "Daniel Kim",
          image: "https://i.pravatar.cc/150?img=10",
          userSince: "2021-05-18",
          channel: "@danielkimphoto"
        }
      }
    ]
  };

  res.status(200).json(data);
}
