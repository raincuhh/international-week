import { resolve as _resolve } from "path";

export const entry = {
   home: "./src/page_scripts/home/home.ts",
   booking: "./src/page_scripts/booking/booking.ts",
   admin: "./src/page_scripts/admin/admin.ts",
   login: "./src/page_scripts/login/login.ts",
   register: "./src/page_scripts/register/register.ts",
};
export const output = {
   filename: "pages/[name]/[name].bundle.js", // This will create home.bundle.js, about.bundle.js, etc.
   path: _resolve(__dirname, "out"),
};
export const resolve = {
   extensions: [".ts", ".js"],
};
export const module = {
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
};
