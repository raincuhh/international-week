const path = require('path');

module.exports = {
  entry: {
    home: './src/pages/home/home.ts',
    booking: './src/pages/booking/booking.ts',
    admin: './src/pages/admin/admin.ts',
    login: "./src/pages/[[login]]/login.ts",
    register: "./src/pages/[[register]]/register.ts"
 },
 output: {
    filename: '[name].bundle.js', // This will create home.bundle.js, about.bundle.js, etc.
    path: path.resolve(__dirname, 'out'),
 },
   resolve: {
      extensions: ['.ts', '.js'],
   },
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
           test: /\.css$/,
           use: ['style-loader', 'css-loader'],
         },
      ],
   },
};
