// index.mjs
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import path from 'path';
import ejs from 'ejs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Menggunakan __dirname dengan cara yang berbeda
// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename);

// Catatan: Hapus tanda slash (/) di depan 'views'
// const viewsPath = path.join(__dirname, "views");

const app = express();
const port = 3003;

// Mengganti sintaks require dengan import dan menyesuaikan ekstensi file
import homeRouter from './router/beranda.js';

// Setel view engine ke EJS
app.set("view engine", "ejs");
app.set("views", [
    path.join(__dirname, "/views"),
    // path.join(__dirname, "/views/notes"),
    // path.join(__dirname, "/views/studies"),
    // path.join(__dirname, "/views/tasks"),
    // Tambahkan direktori view lainnya jika diperlukan
]);

// Gunakan homeRouter untuk menangani permintaan
app.use('/', homeRouter);

app.listen(port, () => {
    console.log('Berjalan di port ' + port);
});
