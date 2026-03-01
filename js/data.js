const COUNTY_DATA = {
    "Nairobi": {
        subCounties: ["Westlands", "Dagoretti", "Lang'ata", "Kibra", "Roysambu", "Kasarani", "Embakasi", "Makadara", "Starehe"],
        towns: ["CBD", "Upper Hill", "Kilimani", "Karen", "South C", "South B", "Pangani", "Githurai", "Kayole", "Donholm", "Rongai"],
        stations: [
            { name: 'CBD Central Hub (Kencom)', congestion: 'High', distance: '0.2km', helpNeeded: false, company: 'System' },
            { name: 'Westlands Terminal', congestion: 'Low', distance: '4.5km', helpNeeded: true, company: 'Double M' },
            { name: 'Ngong Road Stage', congestion: 'Medium', distance: '3.1km', helpNeeded: false, company: 'StarBus' }
        ],
        fleet: [
            { id: 'KCH 111A', route: '111 (Rongai)', company: 'Super Metro', eta: 4, img: 'assets/super_metro.png' },
            { id: 'KBB 462W', route: '46 (Kawangware)', company: 'Citi Hoppa', eta: 11, img: 'assets/citi_hoppa.png' }
        ]
    },
    "Mombasa": {
        subCounties: ["Nyali", "Mvita", "Kisauni", "Likoni", "Changamwe", "Jomvu"],
        towns: ["Mombasa Island", "Bamburi", "Mtwapa", "Shanzu", "Mikindani", "Nyali Bridge"],
        stations: [
            { name: 'Likoni Ferry Terminal', congestion: 'High', distance: '0.5km', helpNeeded: false, company: 'Coast Bus' },
            { name: 'Nyali Bridge Stage', congestion: 'Medium', distance: '3.2km', helpNeeded: false, company: 'Matatu 14' }
        ],
        fleet: [
            { id: 'KCG 001M', route: 'Bamburi - CBD', company: 'Coast Sacco', eta: 8, img: 'assets/hero.png' }
        ]
    },
    "Nakuru": {
        subCounties: ["Naivasha", "Nakuru Town East", "Nakuru Town West", "Molo", "Gilgil", "Bahati"],
        towns: ["Nakuru CBD", "Naivasha Town", "Gilgil Town", "Molo Town", "Salgaa", "Lanet"],
        stations: [
            { name: 'Nakuru Main Station', congestion: 'Medium', distance: '0.8km', helpNeeded: false, company: 'Mololine' }
        ],
        fleet: [
            { id: 'KCR 002B', route: 'Nakuru - Nairobi', company: 'Mololine', eta: 45, img: 'assets/hero.png' }
        ]
    },
    "Kisumu": {
        subCounties: ["Kisumu Central", "Kisumu East", "Kisumu West", "Seme", "Muhoroni", "Nyakach"],
        towns: ["Kisumu CBD", "Kondele", "Milimani", "Maseno", "Ahero"],
        stations: [
            { name: 'Kisumu Main Terminal', congestion: 'High', distance: '0.1km', helpNeeded: false, company: 'Ena Coach' }
        ],
        fleet: [
            { id: 'KCY 888K', route: 'Kondele - CBD', company: 'Lake Travels', eta: 5, img: 'assets/hero.png' }
        ]
    },
    "Meru": {
        subCounties: ["North Imenti", "South Imenti", "Central Imenti", "Buuri", "Tigania West", "Tigania East", "Igembe South"],
        towns: ["Meru Town", "Nchiru (MUST)", "Maua", "Timau", "Laare", "Mikinduri", "Kianjai"],
        stations: [
            { name: 'Meru Town Main Stage', congestion: 'High', distance: '0.5km', helpNeeded: false, company: 'MeSacco' },
            { name: 'Nchiru (MUST Gate)', congestion: 'Low', distance: '12.4km', helpNeeded: false, company: 'Meru Shuttle' },
            { name: 'Maua Terminal', congestion: 'Medium', distance: '45.1km', helpNeeded: false, company: 'Nyambene Sacco' }
        ],
        fleet: [
            { id: 'KCQ 101M', route: 'Nchiru - Meru Town', company: 'Meru Shuttle', eta: 7, img: 'assets/hero.png' },
            { id: 'KDA 777D', route: 'Maua - Meru', company: 'Nyambene', eta: 15, img: 'assets/hero.png' }
        ]
    },
    "Kiambu": {
        subCounties: ["Thika Town", "Ruiru", "Juja", "Githunguri", "Kiambaa", "Kabete", "Kikuyu", "Limuru", "Gatundu North", "Gatundu South"],
        towns: ["Thika", "Ruiru", "Juja", "Kiambu Town", "Kikuyu", "Limuru", "Gatundu", "Karuri"],
        stations: [
            { name: 'Thika Main Stage', congestion: 'High', distance: '1.2km', helpNeeded: false, company: 'Kenya Mpya' },
            { name: 'Ruiru Flyover', congestion: 'Medium', distance: '4.5km', helpNeeded: false, company: 'Super Metro' },
            { name: 'Kikuyu Terminal', congestion: 'Low', distance: '8.1km', helpNeeded: false, company: 'Metro Trans' }
        ],
        fleet: [
            { id: 'KCH 001K', route: 'Thika - Nairobi', company: 'Kenya Mpya', eta: 5, img: 'assets/hero.png' },
            { id: 'KDB 999S', route: 'Ruiru - CBD', company: 'Super Metro', eta: 3, img: 'assets/super_metro.png' }
        ]
    },
    /* Coastal Region */
    "Kwale": { subCounties: ["Msambweni", "Lunga Lunga", "Kwale", "Kinango"], towns: ["Diani", "Ukunda", "Kwale Town", "Shimoni"], stations: [{ name: "Ukunda Stage", congestion: "Low", distance: "0.5km" }], fleet: [] },
    "Kilifi": { subCounties: ["Malindi", "Kilifi North", "Kilifi South", "Kaloleni", "Rabai", "Ganze", "Magarini"], towns: ["Malindi", "Kilifi Town", "Watamu", "Mtwapa", "Mariakani"], stations: [{ name: "Malindi Terminal", congestion: "Medium", distance: "1.2km" }], fleet: [] },
    "Tana River": { subCounties: ["Garsen", "Galole", "Bura"], towns: ["Hola", "Garsen", "Bura"], stations: [], fleet: [] },
    "Lamu": { subCounties: ["Lamu East", "Lamu West"], towns: ["Lamu Town", "Mpeketoni", "Witu", "Manda"], stations: [], fleet: [] },
    "Taita-Taveta": { subCounties: ["Voi", "Taveta", "Wundanyi", "Mwatate"], towns: ["Voi Town", "Taveta", "Mwatate", "Wundanyi"], stations: [{ name: "Voi Main Station", congestion: "Low" }], fleet: [] },

    /* North Eastern */
    "Garissa": { subCounties: ["Garissa", "Fafi", "Ijara", "Dadaab"], towns: ["Garissa Town", "Dadaab", "Modogashe"], stations: [], fleet: [] },
    "Wajir": { subCounties: ["Wajir East", "Wajir West", "Wajir North", "Wajir South"], towns: ["Wajir Town", "Habaswein"], stations: [], fleet: [] },
    "Mandera": { subCounties: ["Mandera East", "Mandera West", "Banissa", "Lafey"], towns: ["Mandera Town", "El Wak"], stations: [], fleet: [] },

    /* Eastern */
    "Marsabit": { subCounties: ["Saku", "Laisamis", "North Horr", "Moyale"], towns: ["Marsabit Town", "Moyale Town"], stations: [], fleet: [] },
    "Isiolo": { subCounties: ["Isiolo", "Garbatulla", "Merti"], towns: ["Isiolo Town", "Garbatulla"], stations: [], fleet: [] },
    "Tharaka-Nithi": { subCounties: ["Tharaka", "Chuka", "Maara"], towns: ["Chuka", "Chogoria", "Marimanti"], stations: [], fleet: [] },
    "Embu": { subCounties: ["Manyatta", "Runyenjes", "Mbeere North", "Mbeere South"], towns: ["Embu Town", "Siakago", "Ishara"], stations: [], fleet: [] },
    "Kitui": { subCounties: ["Kitui Central", "Kitui West", "Kitui East", "Mwingi Central", "Mwingi West"], towns: ["Kitui Town", "Mwingi", "Mutomo"], stations: [], fleet: [] },
    "Machakos": {
        subCounties: ["Machakos Town", "Mavoko", "Matungulu", "Kangundo", "Kathiani", "Mwala", "Yatta"],
        towns: ["Machakos", "Athi River", "Tala", "Kangundo", "Masii"],
        stations: [{ name: "Machakos Country Bus", congestion: "High", distance: "0.5km" }],
        fleet: [{ id: 'KBC 123M', route: 'Mks - Nairobi', company: 'Mks Sacco', eta: 10, img: 'assets/hero.png' }]
    },
    "Makueni": { subCounties: ["Makueni", "Kaiti", "Kibwezi East", "Kibwezi West", "Kilome"], towns: ["Wote", "Mtito Andei", "Kibwezi"], stations: [], fleet: [] },

    /* Central */
    "Nyandarua": { subCounties: ["Ol Kalou", "Ol Joro Orok", "Ndaragwa", "Kipipiri", "Kinangop"], towns: ["Ol Kalou", "Njabili", "Engineer"], stations: [], fleet: [] },
    "Nyeri": { subCounties: ["Nyeri Central", "Kieni", "Mathira", "Othaya", "Mukurweini", "Tetu"], towns: ["Nyeri Town", "Karatina", "Othaya", "Chaka"], stations: [{ name: "Karatina Market Stage", congestion: "High" }], fleet: [] },
    "Kirinyaga": { subCounties: ["Mwea East", "Mwea West", "Gichugu", "Ndia", "Kirinyaga Central"], towns: ["Kerugoya", "Kutus", "Wanguru", "Sagana"], stations: [], fleet: [] },
    "Murang'a": { subCounties: ["Kiharu", "Kandara", "Gatanga", "Kangema", "Mathioya", "Maragua"], towns: ["Murang'a Town", "Kenol", "Kangari"], stations: [], fleet: [] },

    /* Rift Valley */
    "Turkana": { subCounties: ["Turkana Central", "Turkana West", "Turkana North", "Turkana South"], towns: ["Lodwar", "Kakuma", "Lokichogio"], stations: [], fleet: [] },
    "West Pokot": { towns: ["Kapenguria", "Sigor"], subCounties: ["Kapenguria", "Sigor"], stations: [], fleet: [] },
    "Samburu": { towns: ["Maralal", "Archer's Post"], subCounties: ["Samburu Central", "Samburu North"], stations: [], fleet: [] },
    "Trans-Nzoia": { subCounties: ["Kiminini", "Kwanza", "Endebess", "Saboti", "Cherangany"], towns: ["Kitale Town", "Kiminini"], stations: [], fleet: [] },
    "Uasin Gishu": { subCounties: ["Ainabkoi", "Kapseret", "Kesses", "Moiben", "Soy", "Turbo"], towns: ["Eldoret Town", "Burnt Forest", "Turbo Town"], stations: [{ name: "Eldoret Main Stage", congestion: "High" }], fleet: [] },
    "Elgeyo-Marakwet": { towns: ["Iten", "Kapsowar"], subCounties: ["Keiyo", "Marakwet"], stations: [], fleet: [] },
    "Nandi": { subCounties: ["Emgwen", "Mosop", "Aldai", "Tinderet", "Nandi Hills", "Chesumei"], towns: ["Kapsabet", "Nandi Hills"], stations: [], fleet: [] },
    "Baringo": { towns: ["Kabarnet", "Eldama Ravine", "Marigat"], subCounties: ["Baringo Central", "Koibatek"], stations: [], fleet: [] },
    "Laikipia": { subCounties: ["Laikipia East", "Laikipia West", "Laikipia North"], towns: ["Nanyuki", "Nyahururu Town", "Rumuruti"], stations: [{ name: "Nanyuki Main Stage", congestion: "Medium" }], fleet: [] },
    "Narok": { subCounties: ["Narok North", "Narok South", "Narok East", "Narok West", "Emurua Dikirr", "Kilgoris"], towns: ["Narok Town", "Kilgoris", "Ololulunga"], stations: [], fleet: [] },
    "Kajiado": { subCounties: ["Kajiado North", "Kajiado Central", "Kajiado East", "Kajiado West", "Kajiado South"], towns: ["Kitengela", "Ongata Rongai", "Kajiado Town", "Ngong Town"], stations: [{ name: "Kitengela Stage", congestion: "High" }], fleet: [] },
    "Kericho": { subCounties: ["Ainamoi", "Belgut", "Bureti", "Kipkelion East", "Kipkelion West", "Sigowet/Soin"], towns: ["Kericho Town", "Litein", "Kipkelion"], stations: [], fleet: [] },
    "Bomet": { subCounties: ["Bomet Central", "Bomet East", "Chepalungu", "Konoin", "Sotik"], towns: ["Bomet Town", "Sotik Town"], stations: [], fleet: [] },

    /* Western */
    "Kakamega": { towns: ["Kakamega Town", "Mumias", "Butere"], subCounties: ["Lurambi", "Mumias", "Butere"], stations: [{ name: "Kakamega Stage", distance: "0.2km" }], fleet: [] },
    "Vihiga": { towns: ["Mbale", "Chavakali", "Luanda"], subCounties: ["Vihiga", "Hamisi", "Emuhaya"], stations: [], fleet: [] },
    "Bungoma": { towns: ["Bungoma Town", "Webuye", "Kimilili", "Chwele"], subCounties: ["Kanduyi", "Webuye", "Kimilili"], stations: [{ name: "Bungoma Main Hub", congestion: "Medium" }], fleet: [] },
    "Busia": { towns: ["Busia Town", "Malaba", "Port Victoria"], subCounties: ["Teso North", "Teso South", "Matayos"], stations: [{ name: "Busia Border Terminal", congestion: "High" }], fleet: [] },

    /* Nyanza */
    "Siaya": { towns: ["Siaya Town", "Bondo", "Ugunja"], subCounties: ["Alego Usonga", "Bondo", "Ugunja"], stations: [], fleet: [] },
    "Homa Bay": { towns: ["Homa Bay Town", "Mbita", "Oyugis"], subCounties: ["Homa Bay Town", "Mbita"], stations: [], fleet: [] },
    "Migori": { towns: ["Migori Town", "Kehancha", "Isebania"], subCounties: ["Suna East", "Suna West", "Kuria"], stations: [], fleet: [] },
    "Kisii": { subCounties: ["Kitutu Chache", "Nyaribari Chache", "Nyaribari Masaba", "South Mugirango", "Bomachoge"], towns: ["Kisii Town", "Ogembo", "Suneka"], stations: [{ name: "Kisii Main Stage", congestion: "High" }], fleet: [] },
    "Nyamira": { towns: ["Nyamira Town", "Keroka"], subCounties: ["West Mugirango", "North Mugirango"], stations: [], fleet: [] }
};

const COUNTIES = [
    "Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita-Taveta", "Garissa", "Wajir", "Mandera", "Marsabit",
    "Isiolo", "Meru", "Tharaka-Nithi", "Embu", "Kitui", "Machakos", "Makueni", "Nyandarua", "Nyeri", "Kirinyaga",
    "Murang'a", "Kiambu", "Turkana", "West Pokot", "Samburu", "Trans-Nzoia", "Uasin Gishu", "Elgeyo-Marakwet", "Nandi", "Baringo",
    "Laikipia", "Nakuru", "Narok", "Kajiado", "Kericho", "Bomet", "Kakamega", "Vihiga", "Bungoma", "Busia",
    "Siaya", "Kisumu", "Homa Bay", "Migori", "Kisii", "Nyamira", "Nairobi"
];


function showToast(msg, color) {
    const t = document.getElementById('mainToast');
    if (!t) return;
    t.innerText = msg;
    t.style.background = color;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
}

// Initialize Seats for all fleet items across all counties
Object.values(COUNTY_DATA).forEach(county => {
    if (county.fleet) {
        county.fleet.forEach(f => {
            if (!f.seats) {
                f.seats = Array(14).fill(0).map(() => Math.random() > 0.7 ? 1 : 0);
            }
        });
    }
});

// Flatten Data for Global Access
const STATIONS = Object.values(COUNTY_DATA).flatMap(c => c.stations || []);
const FLEET = Object.values(COUNTY_DATA).flatMap(c => c.fleet || []);


