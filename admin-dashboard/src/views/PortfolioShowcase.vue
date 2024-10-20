<template>
  <div class="portfolio-showcase">
    <h1 class="text-center mb-4">Portfolio Showcase</h1>
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col-md-4 mb-4">
        <div class="card">
          <img :src="project.image" class="card-img-top" alt="Project Image" />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.link" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioShowcase",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Stand User: Giorno Giovanna Stand: Gold Experience",
          description: "It is a short-range power-type Stand",
          image: require('@/assets/project1.jpg'), // Use appropriate paths for your images
          link: "https://jojowiki.com/Gold_Experience",
        },
        {
          id: 2,
          title: "Stand User: Bruno Bucciarati Stand: Sticky Fingers",
          description: "Sticky Fingers is a short-range humanoid stand.",
          image: require('@/assets/project2.jpg'),
          link: "https://jojowiki.com/Sticky_Fingers",
        },
        {
          id: 3,
          title: "Stand User: Leone Abbachio Stand: Moody Blues",
          description: "It possesses the ability to imitate the form of individuals",
          image: require('@/assets/project3.jpg'),
          link: "https://jojowiki.com/Moody_Blues",
        },
        // Add more projects as needed
      ],
    };
  },
};
</script>

<style scoped>
.portfolio-showcase {
  max-width: 1200px;
  margin: 0 auto;
}
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
</style>
