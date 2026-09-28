// Starter file — add your code here
const fs = require("fs");
//console.log(fs);

const data = fs.readFileSync('assets/poem.txt', { encoding: "utf8" });
//console.log(data);

const fsPromises = require("fs/promises");

async function main() {
  const data = await fsPromises.readFile("assets/poem.txt", {
    encoding: "utf8",
  });
  console.log(data);
}

main();

fs.writeFileSync("assets/output.txt", "Hello, World!");
fs.appendFileSync("assets/output.txt", "\nSecond line");

const exists = fs.existsSync("assets/output.txt");
console.log(exists); // true or false

const entries = fs.readdirSync("assets");
console.log(entries); // [ 'output.txt', 'poem.txt' ]

// const buf = Buffer.from("Hello, Node!");
// console.log(buf); // <Buffer 48 65 6c 6c 6f>
// console.log(buf.toString("hex")); // 48656c6c6f
// console.log(buf.toString("base64")); // SGVsbG8=

const buf = Buffer.alloc(4, 0xab);
console.log(buf); // <Buffer ab ab ab ab>

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w=", "base64").toString("utf8");
console.log(decoded); // Hello

const crypto = require("crypto");
const hash = crypto.createHash("sha256").update('freeCodeCamp!').digest("hex");
console.log(hash); // 2cf24dba...

const random = crypto.randomBytes(16).toString("hex");
console.log(random); // e.g. 4f3a9c1b8e2d7a05

const id = crypto.randomUUID();
console.log(id); // e.g. 110e8400-e29b-41d4-a716-446655440000

const os = require("os");
console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime());
console.log(os.cpus().length);

const path = require("path");
const fullPath = path.join(__dirname, "assets", "poem.txt");
console.log(fullPath);
console.log(path.basename(fullPath));
console.log(path.dirname(fullPath));
console.log(path.extname(fullPath));

console.log(path.join("assets", "..", "server.js")); // assets/../server.js → assets/../server.js (relative)
console.log(path.resolve("assets", "..", "server.js")); // /absolute/path/to/server.js


console.log(path.parse(fullPath));

console.log(process.version);
console.log(process.platform);
console.log(process.env.NODE_ENV);

console.log(process.argv);

process.stdout.write("Hello from stdout\n");
process.stderr.write("Hello from stderr\n");

const readable = fs.createReadStream("assets/poem.txt", { encoding: "utf8" });

// readable.on("data", (chunk) => {
//   console.log(chunk);
// });

// readable.on("end", () => {
//   console.log("Done reading");
// });

const writable = fs.createWriteStream("assets/stream-output.txt");
// writable.write("First chunk\n");
// writable.write("Second chunk\n");
// writable.end();

readable.pipe(writable);