const path = require("path");

module.exports = {
   entry: {
      home: "./src/page_scripts/home/home.ts",
      booking: "./src/page_scripts/booking/booking.ts",
      admin: "./src/page_scripts/admin/admin.ts",
      login: "./src/page_scripts/login/login.ts",
      register: "./src/page_scripts/register/register.ts",
   },
   output: {
      filename: "page_scripts/[name]/[name].bundle.js", // This will create home.bundle.js, about.bundle.js, etc.
      path: path.resolve(__dirname, "out"),
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: "ts-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
      ],
   },
};
