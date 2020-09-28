const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'Green and blue socks here...',
    };
  },
});

const mountApp = app.mount('#app');
