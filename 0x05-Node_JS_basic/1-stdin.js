process.stdout.write('Welcome to Holberton School, what is your name?\r');

// Handle input from stdin
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString().trim()}\r`);
  
  // Check if the input is piped (not interactive)
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\r');
  }

  process.exit();
});
