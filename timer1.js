const args = process.argv.slice(2);

for (const timer of args) {
  if (timer > 0 ) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer * 1000);
  }
};
