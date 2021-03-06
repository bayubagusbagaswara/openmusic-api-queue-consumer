# Open Music API Queue Consumer

# Library

- `amqplib` : untuk berinteraksi dengan protokol AMQP dalam menerima pesan dari queue.
- `pg` : untuk berinteraksi dengan Postgres Database.
- `dotenv` : untuk mengelola environment variable di Node.js proyek.
- `nodemailer` : untuk mengirimkan email melalui Node.js.
- Install full : `npm install amqplib pg dotenv nodemailer`

# Struktur Project

- `.env` : berkas yang digunakan untuk menyimpan environment variable.
- `src -> PlaylistsService.js` : berkas yang digunakan untuk menuliskan fungsi dalam mendapatkan data songs dari database.
- `src -> MailSender.js` : berkas yang digunakan untuk menuliskan fungsi dalam mengirim pesan melalui email.
- `src -> listener.js` : berkas yang digunakan untuk menuliskan fungsi callback yang akan dijalankan setiap kali consumer menerima pesan. - - - Fungsi listener ini membutuhkan PlaylistsService dan MailSender untuk mendapatkan catatan dan mengirimnya melalui email.
- `src -> consumer.js` : berkas yang digunakan untuk menuliskan program consumer queue.

# Running Consumer

- `node src/consumer.js`