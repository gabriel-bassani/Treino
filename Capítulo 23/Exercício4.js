async function showGitHubUserAndRepos(username) {
    const userPromise = fetchFromGitHub(`/users/${username}`);
      const reposPromise = fetchFromGitHub(`/repos/${username}`);
    
      const user = await userPromise;
      const repos = await reposPromise;
      
      console.log(user.name);
      console.log(respos.length);
  }
  