const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',

  use: {
  headless: true,
  screenshot: 'only-on-failure',
  video: 'on',  
  trace: 'on-first-retry'
},

  retries: 1, 
reporter: [
  ['list'], 
  ['html', { open: 'never' }]
]
});