exports.helloWorld = (req, res, next) => {
    res.send(`
         <h1>Sinau Digitals API Services</h1>
         <p>Berikut adalah daftar service API tersedia</p>
         <p>
            <ul>
                <li><a href="/listpeserta">Daftar Peserta</a></li>
                <li><a href="/listpelatihan">Daftar Pelatihan</a></li>
            </ul>
         </p>
   `);
};


exports.daftarPeserta = (req, res, next) => {
    res.send({
        nama: 'Budi',
        alamat: 'Bogor',
        pekerjaan: 'guru',
        umur: 54,
    }
    
    );
};

exports.daftarPelatihan = (req, res, next) => {
    res.send({
        id: 1,
        judul: 'Fullstack Developer with Javascript Reactjs',
        deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ',
        harga: 3000000
    }
    
    );
};

