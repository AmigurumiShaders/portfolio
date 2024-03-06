---
layout: portfolio-item

title: "Raymarching Tool: Unreal Engine 4"
title-desc: Ongoing Project
proj_type: "Academic and Personal Project"

thumbnail_image: "./assets/images/ue-raymarcher/just-smoothing.gif"
description: "A tool to put raymarching visuals within the reach of artists" 
tools: "Unreal Engine 4, C++"
---

In this project, I wanted to create a tool in Unreal Engine that would make raymarching visuals accessible to artists that don't have experience with shader programming. 

![Demo of decreasing the smoothing factor on a set of shapes](../assets/images/ue-raymarcher/just-smoothing.gif)

Working on this project involved a lot of trial and error, as I was new to both raymarching and Unreal plugins. It was a wildly challenging experience of learning how to seek out and piece together answers from limited information. I often found that the source code of Unreal Engine itself was the place to go for answers, or at least to point myself in the right direction when searching online. After much effort I managed to hook up a UI to a custom asset, which automatically updates the underlying shader when it's changed.

![Screenshot of the UI](../assets/images/ue-raymarcher/ui-screenshot.jpg)

Currently, this tool allows the user to add sphere, torus, and rectangular prism shape primitives. Then, because these shapes are defined by math rather than polygons, they can be smoothed together with a lerp function.

![A torus circling a cube, which is lerped together](../assets/images/ue-raymarcher/square-torus.gif)

## What is raymarching?

 Simply put, raymarching is a rendering technique where elements in the scene are defined by mathematical formulas rather than with traditional 3D models. This opens the door for some really interesting and unique effects.



