import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createPNG(width, height, r, g, b, text) {
  // Simple uncompressed valid PNG generator
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  
  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // bit depth
  ihdr.writeUInt8(2, 9); // truecolor RGB
  ihdr.writeUInt8(0, 10); // compression
  ihdr.writeUInt8(0, 11); // filter
  ihdr.writeUInt8(0, 12); // interlace

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);
    
    // CRC calculation
    let c = 0xffffffff;
    const bufToCrc = Buffer.concat([typeBuf, data]);
    for (let i = 0; i < bufToCrc.length; i++) {
      c ^= bufToCrc[i];
      for (let j = 0; j < 8; j++) {
        c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
      }
    }
    c = (c ^ 0xffffffff) >>> 0;
    crcBuf.writeUInt32BE(c, 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  const ihdrChunk = makeChunk('IHDR', ihdr);

  // Raw image scanlines
  const rowLength = width * 3 + 1;
  const rawData = Buffer.alloc(height * rowLength);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowLength;
    rawData[rowOffset] = 0; // Filter: None
    const gradient = Math.floor((y / height) * 60);
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 3;
      // Grid effect or gradient
      const isGrid = (x % 30 === 0 || y % 30 === 0) ? 40 : 0;
      rawData[pxOffset] = Math.min(255, Math.max(0, r + isGrid - gradient));
      rawData[pxOffset + 1] = Math.min(255, Math.max(0, g + isGrid - gradient));
      rawData[pxOffset + 2] = Math.min(255, Math.max(0, b + isGrid - gradient));
    }
  }

  const compressedData = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const dirs = [
  path.join(process.cwd(), 'public', 'images'),
  path.join(process.cwd(), 'images')
];

for (const dir of dirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Generate base PNG images
const profilePng = createPNG(600, 600, 15, 75, 145);
const coverPng = createPNG(1200, 450, 10, 25, 60);
const logoPng = createPNG(300, 300, 6, 182, 212);
const proj1 = createPNG(800, 500, 139, 92, 246);
const proj2 = createPNG(800, 500, 6, 182, 212);
const proj3 = createPNG(800, 500, 16, 185, 129);

for (const dir of dirs) {
  fs.writeFileSync(path.join(dir, 'profile.jpg'), profilePng);
  fs.writeFileSync(path.join(dir, 'cover.jpg'), coverPng);
  fs.writeFileSync(path.join(dir, 'logo.png'), logoPng);
  fs.writeFileSync(path.join(dir, 'project1.jpg'), proj1);
  fs.writeFileSync(path.join(dir, 'project2.jpg'), proj2);
  fs.writeFileSync(path.join(dir, 'project3.jpg'), proj3);
}

console.log('Successfully generated placeholder images in both public/images and images/');
