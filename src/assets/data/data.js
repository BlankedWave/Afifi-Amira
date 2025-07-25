export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Muhammad Afifi Bin Ismail',
            child: 'Putera',
            father: 'Ismail Bin Sulaiman',
            mother: 'Rahmah Binti Mamat',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Siti Amira Binti Razaman',
            child: 'Puteri',
            father: 'Razaman',
            mother: 'Zuraida',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'November',
            date: '1',
            day: 'Sabtu',
            hours: {
                start: '10 Pagi',
                finish: '5 Petang'
            }
        },
        // reception: {
        //     year: '2024',
        //     month: 'November',
        //     date: '14',
        //     day: 'Kamis',
        //     hours: {
        //         start: '11.00',
        //         finish: 'Selesai'
        //     }
        // },
        address: 'Alamat Tempat Majlis'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/q1Ask2Jgd4ekiiKBA',
    },
    link2: {
        // calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://www.waze.com/en/live-map/directions?latlng=6.117054248658201%2C102.22460746765138',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    // bank: [
    //     {
    //         id: 1,
    //         name: 'Lorem Ipsum',
    //         icon: './src/assets/images/bca.png',
    //         rekening: '12345678'
    //     },
    //     {
    //         id: 2,
    //         name: 'Ipsum Lorem',
    //         icon: './src/assets/images/bri.png',
    //         rekening: '12345678'
    //     },
    // ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxj3VYYRj27O2NHiKOnJymmVK-fYpk4XXDUdvi4ZfocR3cHy2SPtn02eOc203YX-eJsFg/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Pengantin',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tarikh',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Kehadiran',
            icon: 'bx bxs-envelope-open',
            path: '#wishas',
        },
    ],
}
