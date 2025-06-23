import imagemin from "imagemin";
import mozjpeg from "imagemin-mozjpeg";
import pngquant from "imagemin-pngquant";
import gifsicle from "imagemin-gifsicle";
import svgo from "imagemin-svgo";
import fs from "fs";
import path from "path";
import { glob } from "glob";

// Find all images in src/assets and subfolders
glob("src/assets/**/*.{jpg,jpeg,png,gif,svg}", async (err, files) => {
  if (err) throw err;
  for (const file of files) {
    const optimized = await imagemin([file], {
      plugins: [
        mozjpeg({ quality: 75 }),
        pngquant({ quality: [0.6, 0.8] }),
        gifsicle(),
        svgo(),
      ],
    });
    if (optimized[0]) {
      fs.writeFileSync(file, optimized[0].data);
      console.log(`Optimized: ${file}`);
    }
  }
  console.log("All images optimized!");
});
