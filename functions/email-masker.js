function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstLetter = username[0];
  const lastLetter = username[username.length - 1];
  
  const maskLength = username.length - 2;
  const asterisks = "*".repeat(maskLength);

  return firstLetter + asterisks + lastLetter + domain;
}

const email = "apple.pie@example.com";
console.log(maskEmail(email));