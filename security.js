// --allow-read required
console.log("Reading from the filesystem...");
const file = await Deno.open("license.txt");
await Deno.copy(file, Deno.stdout);
file.close();

// --allow-net required
console.log("Downloading a file from the internet...");
const response = await fetch(
  "https://raw.githubusercontent.com/denoland/deno/master/LICENSE",
);
const body = new Uint8Array(await response.arrayBuffer());

// --allow-write required
console.log("Writing that file to the filesystem...");
const data = new TextDecoder().decode(body);
await Deno.writeTextFile("license.txt", data);
