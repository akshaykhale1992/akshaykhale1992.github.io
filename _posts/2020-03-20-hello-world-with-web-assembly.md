---
layout: post
title: Hello world with web-assembly
subtitle: Web-assembly is bytecode understood by your browsers which does all the
  heavy lifting of logic and which can be used in javascript.
date: 2020-03-20 18:30:00 +0000
author: Akshay Khale
header-img: "/uploads/wasm-working.png"

---
Web-assembly is binary code or bytecode which does all the heavy lifting of logic and which can be used in your javascript.

Yes, browsers can understand the binary and since it’s bytecode, written with a statically typed language like Rust or C/C++, it can give you better performance.

I am no expert in Web-Assembly / WAMS, I am also learning, so in this article, I will be sharing a simple example which will help you understand the working of Web-Assembly and get started with it.

Let’s get started:

# 1. Generate the Bytecode or Binary Code:

To generate the WASM bytecode, I am using the following tool: [https://wasdk.github.io/WasmFiddle/](https://wasdk.github.io/WasmFiddle/ "https://wasdk.github.io/WasmFiddle/") which builds .wasm modules for you from a C-Program.

I am using a simple c-program for calculating the factorial of a number.

<pre>

int factorial(int number) {
  if (number == 1 ) { return 1; }
  else { return number * factorial(number -1 ); }
}

int main() {
  return 10;
}

</pre>

Simply paste your C language code in the top-left section, click on `build`, which will compile and build the WASM file or return an error if code has any syntax errors.

After building just click on the WASM Download icon to download the WASM file (bytecode / binary code) to be used in the Application.

# 2. Use the WASM file in your Javascript.

Most modern web-browsers execute web-assembly out of the box.

You just need to load the .wasm file and you can start executing functions from the .wasm file directly using Javascript.

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <input id="number" value="5" />
        <h3>Factorial of <span id="number_span"></span> is: <span id="factorial"></span></h3>
        <input type="button" onclick="test()" value="Calculate">
        <script>
            function handleIo(number, factorial) {
                document.getElementById('number_span').innerHTML = number;
                document.getElementById('factorial').innerHTML = factorial;
            }
            async function test() {
                const response = await fetch("program.wasm");
                const buffer = await response.arrayBuffer();
                const obj = await WebAssembly.instantiate(buffer);
                let number = document.getElementById('number').value;
                let factorial = obj.instance.exports.factorial(number);
                handleIo(number, factorial);
            }
            test();
        </script>
    </body>
    
    </html>

That’s all…

Thank you for reading.

Originally published on <a href="[https://medium.com/@TheAkshayKhale/hello-world-with-web-assembly-33080c2880c7](https://medium.com/@TheAkshayKhale/hello-world-with-web-assembly-33080c2880c7 "https://medium.com/@TheAkshayKhale/hello-world-with-web-assembly-33080c2880c7")" target="_blank">Medium</a>