import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
  load: {
    // google api's credentials  keys
    key: 'AIzaSyA7Mt0JVE7PoUon-fvUWxOeuLiUGzOecZ4',
    libraries: 'places'
  }
});
