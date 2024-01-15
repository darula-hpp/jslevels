const yLabels = [...Array(24).keys()].map(
  (i) => `${i % 12 || 12} ${i < 12 ? "am" : "pm"}`
);
