// https://github.com/orgs/community/discussions/58062
(async () => {
  let repo = document.location.href.match(
    /github\.com\/([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)\b/iu,
  )?.[1];
  if (repo == null) repo = window.prompt(`Github owner/repo`);

  // TODO: `involves` would be better
  document.location.href = `https://github.com/search?q=is:issue commenter:@me ${
    repo != null ? `repo:${repo}` : ''
  }`;
})();
