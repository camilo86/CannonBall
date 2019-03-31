const Express = require('express');
const Peer = require('peer').ExpressPeerServer;

const app = Express();

app.get('/', (req, res) => res.json({ message: 'Cannon Ball v0.1.0' }));

const listener = app.listen(process.env.PORT || 5000 , () => {
  console.log(`Cannon Ball API running in port ${listener.address().port}`);
});

const peerServer = Peer(listener, { debug: process.env.NODE_ENV !== 'production' });

app.use('/p2p', peerServer);
