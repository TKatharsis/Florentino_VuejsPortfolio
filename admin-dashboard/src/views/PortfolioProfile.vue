<template>
  <div class="profile">
    <h1 class="text-center">My Profile</h1>
    <div class="text-center">
      <img src="@/assets/profile.jpeg" alt="Profile Photo" class="profile-photo" />
      <p class="bio">Hello! I’m a passionate developer with a love for creating innovative solutions. Just like Jotaro Kujo, I don’t take 'no' for an answer. When someone says, ‘You can’t code that,’ I respond with my best ORA ORA ORA and prove them wrong! Remember, the only limit is your Stand! If you’re looking for a collaboration that packs a punch, you know who to call! Yare yare daze...</p>
      <div class="social-links">
        <a href="https://twitter.com/tkatharsis" target="_blank" rel="noopener noreferrer" aria-label="Visit my Twitter profile">Twitter</a>
        <a href="https://www.linkedin.com/in/jond-martin-florentino-0ba705324/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile">LinkedIn</a>
        <a href="https://github.com/TKatharsis" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioProfile",
};
</script>

<style scoped>
.profile {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover; /* Ensures the image covers the space without distortion */
}

.bio {
  margin: 15px 0;
  font-size: 1.2em; /* Slightly larger font for the bio */
}

.social-links a {
  margin: 0 10px;
  text-decoration: none;
  color: #A52A2A; /* Match King Crimson color scheme */
  transition: color 0.3s; /* Smooth transition for hover effect */
}

.social-links a:hover {
  color: #DC143C; /* Bright red on hover for interactivity */
}
</style>
