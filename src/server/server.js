// src/server.js
import { createServer, Model } from 'miragejs';
import hotelsData from './hotelsData';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,

    models: {
      hotel: Model,
    },

    seeds(server) {
      for (let i = 0; i < hotelsData.length; i++) {
        server.create('hotel', hotelsData[i]);
      }
    },

    routes() {
      this.namespace = 'api';

      this.get('/hotels', schema => {
        return schema.hotels.all();
      });

      this.get('/hotel/:id', (schema, request) => {
        let id = request.params.id;
        return schema.hotels.find(id);
      });
    },
  });

  return server;
}
