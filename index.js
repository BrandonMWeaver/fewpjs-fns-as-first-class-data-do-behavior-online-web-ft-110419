function handleClick(e)
{
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

function greet(time)
{
  if (time < 12)
  {
    return "Good Morning";
  }
  else if (time >= 12 && time < 5)
  {
    return "Good Afternoon";
  }
  else
  {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
