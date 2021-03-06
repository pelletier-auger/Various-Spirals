//Triangular spiral
x += cos(t) * pow(cos(t * 3), 1) * (hyp + (j / 50));
y += sin(t) * pow(cos(t * 3), 1) * (hyp + (j / 50));

//Star spiral, 8 points.
x += cos(t) * pow(cos(t * 4), 1) * (hyp + (j / 50));
y += sin(t) * pow(cos(t * 4), 1) * (hyp + (j / 50));

//Star spiral, 5 points
x += cos(t) * pow(cos(t * 5), 1) * (hyp + (j / 50));
y += sin(t) * pow(cos(t * 5), 1) * (hyp + (j / 50));

//5-angle spirangle
x += cos(t) * pow(cos(t * 2.5), 40) * (hyp + (j / 50));
y += sin(t) * pow(cos(t * 2.5), 40) * (hyp + (j / 50));

//Hexagonal spiral
x += cos(t) * cos(t * 3) * cos(t * 3) * (hyp + (j / 50));
y += sin(t) * cos(t * 3) * cos(t * 3) * (hyp + (j / 50));

//Heptagonal Spiral
x += cos(t) * cos(t * 3.5) * cos(t * 3.5) * (hyp + (j / 50));
y += sin(t) * cos(t * 3.5) * cos(t * 3.5) * (hyp + (j / 50));

//Octogonal spiral
x += cos(t) * cos(t * 4) * cos(t * 4) * (hyp + (j / 50));
y += sin(t) * cos(t * 4) * cos(t * 4) * (hyp + (j / 50));

//Square spiral with corners
x += cos(t) * cos(t * 2) * cos(t * 4) * (hyp + (j / 50));
y += sin(t) * cos(t * 2) * cos(t * 4) * (hyp + (j / 50));

//Elliptical spiral with star corners
x += cos(t) * cos(t * 1) * cos(t * 0.5) * (hyp + (j / 50));
y += sin(t) * cos(t * 1) * cos(t * 0.5) * (hyp + (j / 50));

//Pseudo-superelliptical spiral
x += cos(t) * cos(t * 2) * cos(t * 2) * (hyp + (j / 50));
y += sin(t) * cos(t * 2) * cos(t * 2) * (hyp + (j / 50));

//Non-crossing 5-point spiral
x += cos(t) * cos(t * 2) * cos(t * 2) * sin(t * 2) * (hyp + (j / 50));
y += sin(t) * cos(t * 2) * cos(t * 2) * sin(t * 2) * (hyp + (j / 50));

//8-point spiral
x += cos(t) * cos(t * 2) * cos(t * 2) * sin(t * 4) * (hyp + (j / 50));
y += sin(t) * cos(t * 2) * cos(t * 2) * sin(t * 4) * (hyp + (j / 50));

//Tilted square with spiky corners
x += cos(t) * cos(t * 4) * cos(t * 4) * sin(t * 2) * (hyp + (j / 50));
y += sin(t) * cos(t * 4) * cos(t * 4) * sin(t * 2) * (hyp + (j / 50));

//Expanding number 8.
x += cos(t) * cos(t * 4) * cos(t * 4) * sin(t * 0.5) * (hyp + (j / 50));
y += sin(t) * cos(t * 4) * cos(t * 4) * sin(t * 0.5) * (hyp + (j / 50));

//Square with spiky corners
x += cos(t) * cos(t * 4) * cos(t * 6) * (hyp + (j / 50));
y += sin(t) * cos(t * 4) * cos(t * 6) * (hyp + (j / 50));

//Interesting
x += cos(t) * pow(cos(t * 2.5), 40) / sin(cos(t * 2.5), 40) * (hyp + (j / 50));
y += sin(t) * pow(cos(t * 2.5), 40) / sin(cos(t * 2.5), 40) * (hyp + (j / 50));