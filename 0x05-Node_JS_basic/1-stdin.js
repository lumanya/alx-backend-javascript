process.stdout.write('Welcome to ALX, what is your name?\n');

// Handle input from stdin
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString().trim()}\n`);
  
  // Check if the input is piped (not interactive)
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }

  process.exit();
});
