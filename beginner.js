let yLabels = [];

for (let i = 0; i < 12; i++) {
  if (i === 0) {
    yLabels.push("12 am");
  } else {
    yLabels.push(i + " am");
  }
}

for (let i = 0; i < 12; i++) {
  if (i === 0) {
    yLabels.push("12 pm");
  } else {
    yLabels.push(i + " pm");
  }
}

console.log(yLabels);
