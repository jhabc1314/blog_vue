import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
   theme:{
       themes:{
           light:{
            primary: '#607d8b',
            secondary: '#009688',
            accent: '#4caf50',
            error: '#ff5722',
            warning: '#f44336',
            info: '#795548',
            success: '#8bc34a'
            }
       }
   } 
});
