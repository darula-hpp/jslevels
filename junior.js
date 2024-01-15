let yLabels = [];

for (let i = 0; i < 24; i++)
{
  if(i === 12)
  {
    yLabels.push("12 pm");
  }

  else if(i == 0)
  {
    yLabels.push("12 am");
  }

  else if(i < 12)
  {
    yLabels.push(i % 12 + " am");
  }

  else
  {
    yLabels.push(i % 12 + " pm");
  }
}