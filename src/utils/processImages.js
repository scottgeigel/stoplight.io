const path = require('path');
const sharp = require('sharp');
const fs = require('fs-extra');
const klaw = require('klaw');

const publicImagesDir = path.resolve(process.cwd(), 'public', 'images');
const distImagesDir = path.resolve(process.cwd(), 'dist', 'images');

const sizes = [
  { height: 500, default: true },
  { height: 700, name: 'lg' },
  { height: 400, name: 'md' },
  { height: 130, name: 'sm' },
];

const processImages = async () => {
  await fs.emptyDir(distImagesDir);

  const imagesToProcess = [];
  const promises = [];

  return new Promise(finish => {
    klaw(publicImagesDir)
      .on('data', item => {
        // tslint:disable-next-line:curly
        if (!item.stats.isFile()) return;

        const extname = path.extname(item.path);
        // tslint:disable-next-line:curly
        if (!extname || extname === '.DS_Store') return;

        const outputPath = item.path.replace(publicImagesDir, distImagesDir);

        if (extname === '.svg' || extname === '.gif') {
          // No need to optimize svgs or gif
          promises.push(fs.copyFile(item.path, outputPath));
          return;
        }

        imagesToProcess.push([item.path, outputPath, extname]);
      })
      .on('end', async () => {
        // tslint:disable-next-line:no-console
        console.log(`=> Processing ${imagesToProcess.length} images`);

        for (const [originalImagePath, outputPath, extname] of imagesToProcess) {
          for (const sizeObject of sizes) {
            const destPath = sizeObject.name
              ? outputPath.replace(extname, `-${sizeObject.name}${extname}`)
              : outputPath;

            promises.push(
              sharp(originalImagePath)
                .resize(sizeObject.width, sizeObject.height)
                // .png()
                .toBuffer(destPath)
                .then(data => fs.outputFile(destPath, data))
            );
          }
        }

        await Promise.all(promises);

        finish();
      });
  });
};

module.exports = {
  processImages,
};
