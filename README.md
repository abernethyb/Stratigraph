# Stratigraph

Stratigraph is an application designed to help architectural conservators keep track of their data while preparing a paint analysis.


## Background

#### What is paint analysis?

Paint analysis is a technique used by conservators to discover and study a building’s painted
finishes which are no longer visible to the eye.  Small samples are taken from various architectural elements using a scalpel; the samples are then set in resin, cut into cross-sections, and examined and photographed under a microscope.
This process reveals a sequence of paint layers which is called a stratigraphy.  An individual layer’s position within the stratigraphy is what gives it a place in time and context.

Paint analysis can yield a wealth of information. It can be used to identify paint colors at various
points in time, pigment identification can help to pinpoint dates for specific finishes as well as provide socioeconomic information; the presence of soot and dirt between paint layers can point
to periods of damage, disaster, or neglect, and finishes can give clues as to how a space was used.

## Getting Started

[Firebase](https://console.firebase.google.com/u/0/)

Clone this repository.

Open the SQL directory and run the ```01_Db_MVP_Create.sql ``` and then the ```01_SeedData.sql``` files.  

Open the connection string in your ```appsettings.json``` is pointing to the correct database.

Set up a new [Firebase](https://console.firebase.google.com/u/0/) project and ensure the Firebase projectId is noted in ```appsettings.json```.

Open the ```client``` directory and run ```npm install```