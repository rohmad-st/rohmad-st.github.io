export const profile = {
  avatar: 'https://res.cloudinary.com/rohmadst/image/upload/v1533193584/persons/10769688.jpg',
  summary: "Hi, I'm Rohmad Sasmito<br><strong>Web and Mobile Developer</strong>"
  // summary: "Hello, I'm <strong>Rohmad Sasmito</strong>. I'm a Software Engineer from Bojonegoro, East Java - Indonesia. <br>I mostly work on Web Development, focus in Javascript also JS Framework e.g: Vue.js, React.js."
}

export const content = {
  years: [2018, 2017, 2016, 2015, 2014, 2013]
}

export const project = {
  portfolios: [
    {
      year: 2018,
      works: [
        {
          id: 20,
          date: {
            from: '2017',
            to: '2018'
          },
          side: 'right',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1528022531/projects/qiscus_sdkweb.png',
          title: 'Qiscus SDK Web',
          summary: 'Adalah SDK (Software Development Kit) penyedia Chat yang di desain dan di optimasi untuk kemudahan implementasi.',
          description: 'Qiscus SDK Web dibangun dengan mengkombinasikan bahasa pemrograman VanillaJS (JS dasar) dan VueJS. VanilaJS untuk mengembangkan bagian Core-nya sedangkan sisi Interfacenya kami membangunnya menggunakan Vue.JS dengan seminimal mungkun penggunaan library luar, sehingga kami di prioritaskan untuk memakai library buatan sendiri, sehingga ukuran aplikasi SDK tidak terlalu besar. Selain itu penggunaan internal library diharapkan akan meningkatkan realibilitas dan mengurangi kemungkinan library yang deprecated.',
          technologies: ['VueJS', 'VanillaJS', 'MQTT', 'CSS (Stylus)', 'HTML (Jade/Pug)'],
          url: 'https://qiscus.com/documentation/web/latest',
        },
        {
          id: 19,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'left',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1528022183/projects/qiscus_omnichannel.png',
          title: 'Qiscus Omnichannel (QISMO)',
          summary: 'Adalah SAAS yang diperuntukkan untuk keperluan CS sebuah perusahaan. Menyediakan integrasi aplikasi dengan Sosial Media seperti: FB, WhatsApp, Line, Qiscus widget. Juga tersedia integrasi ke AI/Bot Platform misal: Kata.ai, Eva, dsb',
          description: 'QISMO dibangun dengan pemrograman PHP Laravel, dikombinasikan dengan VanillaJS, Jquery dan sedikit Vue.js, sedangkan interface kami membangunnya menggunakan Pure CSS tanpa bantuan CSS Prepocessor seperti SCSS atau Stylus. Sengaja kami menggunakan minimal dependency, agar client yang akan menggunakan Software, tidak akan kesulitan untuk memodifikasinya. Bahkan kami memikirkan supaya programmer yang hanya mengerti PHP/laravel dan JQuery/Javascript tingkat menengah kebawah pun dapat memodifikasi ini sesuai dengan kebutuhan mereka.',
          technologies: ['PHP Laravel', 'VanillaJS', 'Pure CSS', 'JQuery', 'Vue.js'],
          url: 'https://qismo.qiscus.com'
        },
        {
          id: 18,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'right',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1528021294/projects/qiscus_landing_page.png',
          title: 'Qiscus Landing Page',
          summary: 'Adalah sebuah website utama PT Qiscus Tekno Indonesia. Didalamnya meliputi informasi terkait produk perusahaan dan dokumentasi produk.',
          description: 'Qiscus Landing Page dibangun menggunakan PHP Laravel, JQuery, SCSS. Akan tetapi saat ini saya juga tengah menulis ulang website ini dengan menggabungankan Best Practice dari PHP Laravel dan Vue.js.',
          technologies: ['PHP Laravel', 'JQuery', 'CSS', 'Vue.js'],
          url: 'https://qiscus.com'
        },
        {
          id: 17,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'left',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1528021964/projects/qiscus_dashboard.png',
          title: 'Qiscus SDK Dashboard',
          summary: 'Adalah dashboard untuk pengguna Qiscus Chat SDK, disana user dapat melihat statistik, tagihan, dan juga hal-hal lain terkait penggunaan Qiscus Chat SDK.',
          description: 'Qiscus SDK Dashboard dibangun menggunakan PHP Laravel, JQuery, SCSS.',
          technologies: ['PHP Laravel', 'JQuery', 'CSS'],
          url: 'https://rohmad.herokuapp.com/portfolio'
        },
        {
          id: 16,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'right',
          image: 'https://cdn-images-1.medium.com/max/1600/1*W8DmHd7imkd50nwOhdsVQA.png',
          title: 'Kiwari Web Chat',
          summary: 'Merupakan aplikasi berbasis chatting yang menggunakan Qiscus Chat SDK sehingga memungkinkan pengguna dapat berinteraksi dengan pengguna lain via chatting. Tersedia juga di platform lain seperti Android, dan iOS.',
          description: 'Kiwari Web Chat dibangun dengan framework js yaitu Vue.js, dikombinasikan dengan manajemen state Vuex, sehingga setiap proses developmentnya lebih reliable dan juga scalable, sehingga memudahkan proses development. Frontend dalam pengerjaanya fokus ke bagian interface dan sedikit logic dengan JS. Sedangkan untuk logic ke sisi server/ database diserahkan kepada tim Backend yang menyediakan Rest API.',
          technologies: ['Vue.js', 'Vuex', 'SCSS', 'ES5', 'ES6'],
          url: 'https://web.kiwari.id'
        },
        {
          id: 15,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'left',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1534267280/projects/sample-app-sdk-ios.png',
          title: 'Qiscus SDK Sample - iOS',
          summary: 'Adalah sample aplikasi yang menggunakan Qiscus Chat SDK untuk platform mobile iOS. Dengan sample ini diharapkan client kami mendapatkan referensi atau contoh bagaimana kami menggunakan SDK di iOS.',
          description: 'Sample Aplikasi ini dibangun menggunakan bahasa Swift 3 dengan MVVM Architecture.',
          technologies: ['Swift 3', 'MVVM'],
          url: 'https://github.com/rohmad-st/qiscus-sdk-ios-sample-v2'
        },
        {
          id: 14,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'right',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1534267553/projects/cloudsolutely.png',
          title: 'Log Book',
          summary: 'Log book adalah aplikasi berbasis website untuk manajemen karyawan.',
          description: 'Disini saya ikut bekerja untuk mengubah desain dari Zeplin.io menjadi HTML & CSS. Juga di bagian Vue.js akan tetapi kebanyakan di styling.',
          technologies: ['Vue.js', 'HTML5', 'CSS3'],
          url: 'javascript:void(0)'
        },
        {
          id: 13,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'left',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1534267732/projects/teleo_co.jpg',
          title: 'Teleo',
          summary: 'Teleo adalah aplikasi yang membantu pengguna untuk chatting, mencatat event di kalendar, menulis dokumen catatan, membuat todo list pekerjan. Simplenya Teleo adalah kombinasi dari aplikasi Slack + Quip + Trello + Google Kalendar dalam satu aplikasi.',
          description: 'Dibangun dengan bahasa Vue.js sebagai client side, sedangkan server side menggunakan Node.js. Disini saya kebanyakan bekerja di sisi Frontend dan sedikit di Backend.',
          technologies: ['Vue.js', 'Jade/Pug', 'Stylus', 'Node.js'],
          url: 'https://teleo.com'
        }
      ]
    },
    {
      year: 2017,
      works: [
        {
          id: 12,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'right',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1503237506/projects/project_calltodoctorios3.png',
          title: 'Makandi for Consultant - iOS',
          summary: 'Adalah aplikasi penghubung antara dokter dengan pasien, saat ini hanya tersedia di mobile platform Android dan iOS.',
          description: 'Aplikasi ini dibangun dengan bahasa pemrograman Swift 3 dengan Architecture MVVP (Model View View Protocol)',
          technologies: ['Swift 3', 'MVVP'],
          url: 'https://rohmad.herokuapp.com/portfolio'
        },
        {
          id: 11,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'left',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1503236957/projects/project_kiwariios3.png',
          title: 'Kiwari iOS Chat',
          summary: 'Merupakan aplikasi berbasis chatting yang menggunakan Qiscus Chat SDK sehingga memungkinkan pengguna dapat berinteraksi dengan pengguna lain via chatting. Tersedia di platform seperti Android, iOS, dan Website.',
          description: 'Kiwari Web Chat dibangun dengan bahasa Swift 3. Kami sebagai iOS Developer dalam pengerjaanya ini fokus ke bagian interface dan sedikit logic di bagian Swift 3. Sedangkan untuk logic ke sisi server/ database diserahkan kepada tim Backend yang menyediakan Rest API untuk di gunakan oleh Client Side.',
          technologies: ['Javascript', 'CSS'],
          url: 'https://rohmad.herokuapp.com/portfolio'
        },
        {
          id: 9,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'right',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1503231892/projects/project_siemad.png',
          title: 'SIEM - TNI AD',
          summary: 'Security Information and Event Management (SIEM) - TNI AD adalah website untuk memantau dan mentracking serangan-seragan dari luar yang diarahkan ke website TNI AD.',
          description: 'Aplikasi berbasis website ini dibangun dengan menggunakan Laravel dan Socket.io dengan menggunakan database PostgreSQL.',
          technologies: ['Laravel', 'PostgreSQL', 'Socket.io'],
          url: 'https://rohmad.herokuapp.com/portfolio'
        },
      ]
    },
    {
      year: 2016,
      works: [
        {
          id: 8,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'left',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1503203188/projects/projects_ciayo_nnbf2d.jpg',
          title: 'CIAYO - VIRTUAL SOCIAL MEDIA',
          summary: 'Adalah platform social media baru yang menghadirkan visualisasi dalam bentuk karakter lucu, tersedia ribuan aktifitas dalam bentuk animasi yang menyenangkan.',
          description: 'Ciayo - Virtual Social Media pada sisi backend dibangun menggunakan bahasa pemrograman PHP Lumen dengan database Oracle dan SQL, di aplikasi ini saya bekerja untuk menyediakan Restful API.',
          technologies: ['PHP Lumen', 'Oracle', 'SQL'],
          url: 'https://rohmad.herokuapp.com/portfolio'
        },
        {
          id: 7,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'right',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1503203187/projects/project_simdes_diqvsi.jpg',
          title: 'SIMDES - SISTEM MANAJEMEN DESA',
          summary: 'Program aplikasi berbasis website yang dapat digunakan oleh kantor kelurahan maupun kabupaten/kota, untuk mencatat data kependudukan mulai informasi Kartu Keluarga, kematian warga, kelahiran dan surat pengantar.',
          description: 'Aplikasi ini dibangun menggunakan Angular.js untuk bagian frontend. Di project ini saya bekerja pada Backend developer menggunakan PHP Laravel, dan database SQL. Disini saya juga membuat cetak laporan ke bentuk PDF menggunakan FPDF, dan DOMPDF',
          technologies: ['Angular.js', 'PHP Laravel', 'SQL', 'FPDF', 'DOMPDF'],
          url: 'https://rohmad.herokuapp.com/portfolio'
        },
      ]
    },
    {
      year: 2015,
      works: [
        {
          id: 5,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'left',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1503203603/projects/etryout-screenshot-1.jpg',
          title: 'E-TRYOUT',
          summary: 'Adalah aplikasi tryout (latihan soal) untuk SD-SMP-SMA, masuk perguruan tinggi (SBMPTN), test CPNS, test IQ, test bahasa, dll. Untuk SD sampai SMA tersedia lengkap untuk semua pelajaran dan bab sesuai kurikulum Diknas.',
          description: 'Aplikasi ini tersedia untuk platform mobile Android, dan disini saya bekerja untuk interface orang tua siswa yang menyediakan report dari hasil belajar anak/siswa mereka.',
          technologies: ['Java', 'ASP.Net', 'SQL'],
          url: 'https://rohmad.herokuapp.com/portfolio'
        },
        {
          id: 4,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'right',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1539505003/projects/fingerprint-app.png',
          title: 'Fingerprint User Recognizer',
          summary: 'Adalah aplikasi untuk recognize user menggunakan alat fingerprint, sehingga user dapat login ke halaman enotaris.com dan aplikasi yang terintegrasi menggunakan sidik jadi.',
          description: '',
          technologies: ['Javascript', 'CSS'],
          url: 'https://rohmad.herokuapp.com/portfolio'
        },
        {
          id: 3,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'left',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1503205350/projects/fitur-cetak-enotaris-3-lg.png',
          title: 'Tool MS. Addins - eNotaris.com',
          summary: 'Adalah tool Ms.Word yang terintegrasi dengan website eNotaris.com untuk membantu memudahkan proses cetak akta di Microsoft Word.',
          description: '',
          technologies: ['VB.Net', 'SQL', 'Fingeprint SDK'],
          url: 'https://rohmad.herokuapp.com/portfolio'
        },
      ]
    },
    {
      year: 2014,
      works: [
        {
          id: 2,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'right',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1503203189/projects/project_enotaris_pdgtgx.jpg',
          title: 'eNotaris.com',
          summary: 'Adalah aplikasi berbasis website yang diperuntukkan untuk memudahkan pekerjaan notaris dalam membuat akta, administrasi, sampai pengurusan fidusia dan integrasi AHU. Juga mempunyai tool Ms.Word untuk membantu mempercepat cetak akta.',
          description: 'Dibangun menggunakan bahasa pemrograman ASP.Net dan SQL',
          technologies: ['ASP.Net', 'SQL'],
          url: 'https://rohmad.herokuapp.com/portfolio'
        },
        {
          id: 1,
          date: {
            from: 2017,
            to: 2018
          },
          side: 'left',
          image: 'https://res.cloudinary.com/rohmadst/image/upload/v1538243232/projects/No_image_3x4.svg',
          title: 'Tool Crawler',
          summary: 'Adalah satu aplikasi untuk ambil data dari sebuah website teruta e-commerce untuk selanjutnya data disimpan untuk diolah lebih lanjut.',
          description: '',
          technologies: ['VB.Net', 'SQL'],
          url: 'https://rohmad.herokuapp.com/portfolio'
        }
      ]
    },
    {
      year: 2013,
      works: []
    }
  ]
}
