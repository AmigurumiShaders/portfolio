---
layout: default

title: "Raymarching Tool: Unreal Engine 4"
title-desc: Ongoing Project

image: "./assets/images/raymarcher/just-smoothing.gif"
description: "A tool to put raymarching visuals within the reach of artists" 
tools: "Unreal Engine 4, C++"
---

## Brave Magnet

 Simply put, raymarching is a rendering technique where shapes are defined by mathematical formulas rather than with traditional 3D models. This opens the door for some really interesting and unique effects. I wanted to create a tool that would make these effects more accessible to more artists.

Currently, this tool allows the user to add sphere, torus, and rectangular prism shape primitives. Then, because these shapes are defined by math in the shader, they can be smoothed together with a lerp function.

Working on this project involved a lot of trial and error. After getting started with some tutorials and samples of a basic plugin and raymarching in UE4, the challenge was figuring out how to architect the plugin to give a user UI control over the custom shader code that raymarching requires. This lead to a lot of searching and dead ends due to missing or outdated information, but with much effort I managed to hook up a UI to a custom asset, which automatically updates the underlying shader when it's changed.

After starting this project, I quickly realized just how massive in scope it actually is. However, its also become my favorite pet project to keep coming back to. 
