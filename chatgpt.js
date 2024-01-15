const yLabels = [];
for (let i = 0; i < 24; i++) {
  yLabels.push(`${i % 12 || 12}:${i < 12 ? "am" : "pm"}`);
}
