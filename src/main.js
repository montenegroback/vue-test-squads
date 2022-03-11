import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import './assets/styles/main.scss';

const app = createApp(App)

app.use(VuesticPlugin, {
  colors: {
    // Default colors
    primary: '#11555F',
    secondary: '#002c85',
    success: '#34C759',
    info: '#2c82e0',
    danger: '#e34b4a',
    warning: '#ffc200',
    gray: '#babfc2',
    dark: '#34495e',
    // Custom colors
  },
})

app.use(router)
app.mount('#app')
