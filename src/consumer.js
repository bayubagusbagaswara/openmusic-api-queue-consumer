require('dotenv').config();
const amqp = require('amqplib');
const PlaylistsService = require('./PlaylistsService');
const MailSender = require('./MailSender');
const Listener = require('./listener');

const init = async () => {
  // instance dari PlaylistsService, MailSender, dan Listener
  const playlistsService = new PlaylistsService();
  const mailSender = new MailSender();
  const listener = new Listener(playlistsService, mailSender);

  // buat koneksi dengan server RabbitMQ
  const connection = await amqp.connect(process.env.RABBITMQ_SERVER);

  // buat channel
  const channel = await connection.createChannel();

  // pastikan queue dengan nama export:songs telah terbuat
  await channel.assertQueue('export:playlists', {
    durable: true,
  });

  // consume queue export:songs dengan menetapkan listener.listen sebagai fungsi callback-nya
  channel.consume('export:playlists', listener.listen, { noAck: true });
};

init();
