<template>
  <div class="game">
    <h1 class="text-center">Rock, Paper, Scissors, Lizard, Spock</h1>
    <div class="text-center">
      <div>
        <h3>Your Choice</h3>
        <button @click="play('rock')" class="btn btn-outline-primary">
          <img src="@/assets/rock.png" alt="Rock" class="choice-image" />
        </button>
        <button @click="play('paper')" class="btn btn-outline-primary">
          <img src="@/assets/paper.png" alt="Paper" class="choice-image" />
        </button>
        <button @click="play('scissors')" class="btn btn-outline-primary">
          <img src="@/assets/scissors.png" alt="Scissors" class="choice-image" />
        </button>
        <button @click="play('lizard')" class="btn btn-outline-primary">
          <img src="@/assets/lizard.png" alt="Lizard" class="choice-image" />
        </button>
        <button @click="play('spock')" class="btn btn-outline-primary">
          <img src="@/assets/spock.png" alt="Spock" class="choice-image" />
        </button>
      </div>
      <div class="mt-4">
        <h3>Computer's Choice: {{ computerChoice }}</h3>
        <img v-if="computerChoice" :src="getImage(computerChoice)" alt="Computer Choice" class="choice-image" />
      </div>
      <div class="mt-4">
        <h3 v-if="result">{{ result }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioCreative",
  data() {
    return {
      computerChoice: "",
      result: "",
    };
  },
  methods: {
    play(userChoice) {
      const choices = ["rock", "paper", "scissors", "lizard", "spock"];
      this.computerChoice = choices[Math.floor(Math.random() * choices.length)];

      if (userChoice === this.computerChoice) {
        this.result = "It's a tie!";
      } else if (
        (userChoice === "rock" && (this.computerChoice === "scissors" || this.computerChoice === "lizard")) ||
        (userChoice === "paper" && (this.computerChoice === "rock" || this.computerChoice === "spock")) ||
        (userChoice === "scissors" && (this.computerChoice === "paper" || this.computerChoice === "lizard")) ||
        (userChoice === "lizard" && (this.computerChoice === "spock" || this.computerChoice === "paper")) ||
        (userChoice === "spock" && (this.computerChoice === "scissors" || this.computerChoice === "rock"))
      ) {
        this.result = "You win!";
      } else {
        this.result = "You lose!";
      }
    },
    getImage(choice) {
      return require(`@/assets/${choice}.png`);
    },
  },
};
</script>

<style scoped>
.game {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.btn {
  margin: 0 10px;
}

.choice-image {
  width: 100px; /* Increased width */
  height: 100px; /* Increased height */
}
</style>
