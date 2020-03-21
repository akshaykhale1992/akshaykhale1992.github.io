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

I am using the following simple c-program for calculating the factorial of a number.

\[A simple C-Program for calculating Factorial of a number.\]([https://gist.githubusercontent.com/akshaykhale1992/ee6add9de2c6cf29016288d8da8b0838/raw/7dd350351c422bf2cdd3de9247d561f42c822867/factorial.c](https://gist.githubusercontent.com/akshaykhale1992/ee6add9de2c6cf29016288d8da8b0838/raw/7dd350351c422bf2cdd3de9247d561f42c822867/factorial.c "https://gist.githubusercontent.com/akshaykhale1992/ee6add9de2c6cf29016288d8da8b0838/raw/7dd350351c422bf2cdd3de9247d561f42c822867/factorial.c"))

Simply paste your C language code in the top-left section, click on `build`, which will compile and build the WASM file or return an error if code has any syntax errors.

After building just click on the WASM Download icon to download the WASM file (bytecode / binary code) to be used in the Application.

# 2. Use the WASM file in your Javascript.

Most modern web-browsers execute web-assembly out of the box.

You just need to load the .wasm file and you can start executing functions from the .wasm file directly using Javascript.

\[Using the WASM file in your Javascript.\] ([https://gist.githubusercontent.com/akshaykhale1992/55c441443a7ba140e712b4d6efbd1aa9/raw/e5a24d1c59c059f7210f48b52039d2f86e917267/index.html](https://gist.githubusercontent.com/akshaykhale1992/55c441443a7ba140e712b4d6efbd1aa9/raw/e5a24d1c59c059f7210f48b52039d2f86e917267/index.html "https://gist.githubusercontent.com/akshaykhale1992/55c441443a7ba140e712b4d6efbd1aa9/raw/e5a24d1c59c059f7210f48b52039d2f86e917267/index.html"))

That’s all…

Thank you for reading.