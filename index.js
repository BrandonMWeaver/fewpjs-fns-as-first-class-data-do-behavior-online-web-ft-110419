function handleClick(e)
{
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

function greet(time)
{
  let hour = parseInt(time.split(':')[0]);
  let minute = parseInt(time.split(':')[1]) / 100;
  let numTime = hour + minute;
  if (numTime < 12)
  {
    return "Good Morning";
  }
  else if (numTime >= 12 && numTime < 5)
  {
    return "Good Afternoon";
  }
  else
  {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
