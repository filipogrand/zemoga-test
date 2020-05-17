<template>
  <section class="previous-ruling">
    <p class="ruling-main-title">Previous Rullings</p>
    <section class="previous-ruling-content">
      <div
        class="previous-ruling-card"
        v-for="card in previousRulings"
        :key="card.id"
      >
        <div class="ruling-figure">
          <img
            class="picture-background"
            :src="require(`@/assets/images/${card.targetImg}`)"
            alt="kanye west"
          >
          <div class="overlay"></div>
        </div>
        <article>
          <div class="ruling-title">
            <span :class="[
              {'thumbs-up': card.thumbsUp >= card.thumbsDown},
              {'thumbs-down': card.thumbsUp < card.thumbsDown}
            ]"></span>
            <h1 class="ruling-name">{{card.name}}</h1>
            <section class="ruling-history">
              <span class="strong">{{card.historyTime}}</span>
              <span> in {{card.category}}</span>
            </section>
          </div>
          <section class="ruling-description-content">
            <p class="ruling-description">
              <span v-if="card.alreadyVote">Thank you for voting!</span>
              <span v-if="!card.alreadyVote">Vestibulum diam ante, porttitor a odio eget,
                rhoncus neque. Aenean eu velit libero</span>
            </p>
            <div class="ruling-actions">
              <button
                class="thumbs-up"
                v-on:click="thumbsUp(card.id)"
                :class="{'active' : card.currentVote == 'up'}"
              ></button>
              <button
                class="thumbs-down"
                v-on:click="thumbsDown(card.id)"
                :class="{'active' : card.currentVote == 'down'}"
              ></button>
              <button
                class="vote-now"
                v-on:click="voteNow(card.id)"
              >Vote Now</button>
            </div>
          </section>
          <div class="ruling-percentage">
            <span
              class="ruling-percentage-left"
              :style="{width: `${(card.thumbsUp*100) / (card.thumbsUp + card.thumbsDown)}%`}"
            >
              <span class="thumbs-up"></span>
              <span class="percentage-big">
                {{ parseFloat((card.thumbsUp*100) /
                (card.thumbsUp + card.thumbsDown)).toFixed(1) }}
              </span>
              <span class="percentage-sign">%</span>
            </span>
            <span
              class="ruling-percentage-right"
              :style="{width: `${(card.thumbsDown*100) / (card.thumbsUp + card.thumbsDown)}%`}"
            >
              <span class="percentage-big">
                {{ parseFloat((card.thumbsDown*100) /
                (card.thumbsUp + card.thumbsDown)).toFixed(1) }}
              </span>
              <span class="percentage-sign">%</span>
              <span class="thumbs-down"></span>
            </span>
          </div>
        </article>
      </div>
    </section>
    <article class="end-banner">
      <span>Is there anyone else you would want us to add?</span>
      <button>Submit a Name</button>
    </article>
  </section>
</template>

<script>

import json from '@/data.json';

export default {
  name: 'PreviosRulling',
  props: {
    msg: String,
  },
  data() {
    return {
      previousRulings: json.previousRulings,
    };
  },
  methods: {
    thumbsUp(id) {
      const index = this.getIndex(id);
      const currentCard = this.previousRulings.filter((card) => card.id === id)[0];
      currentCard.currentVote = 'up';
      this.previousRulings.splice(index, 1, currentCard);
    },
    thumbsDown(id) {
      const index = this.getIndex(id);
      const currentCard = this.previousRulings.filter((card) => card.id === id)[0];
      currentCard.currentVote = 'down';
      this.previousRulings.splice(index, 1, currentCard);
    },
    voteNow(id) {
      const index = this.getIndex(id);
      const currentCard = this.previousRulings.filter((card) => card.id === id)[0];
      if (currentCard.currentVote === 'up') { currentCard.thumbsUp += 1; } else { currentCard.thumbsDown += 1; }
      currentCard.alreadyVote = true;
      this.previousRulings.splice(index, 1, currentCard);
      localStorage.setItem('previousRulings', JSON.stringify(this.previousRulings));
    },
    getIndex(id) {
      return this.previousRulings.findIndex((x) => x.id === id);
    },
  },
  created() {
    this.previousRulings = JSON.parse(localStorage.getItem('previousRulings'));
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/variables.scss";

.previous-ruling {
  margin-top: 40px;
  padding: 0 $margin-right 0 $margin-left;

  .ruling-main-title {
    margin-bottom: 48px;
    font-family: "Lato Light";
    font-size: 40px;
    color: #333333;
  }

  .previous-ruling-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .previous-ruling-card + .previous-ruling-card + .previous-ruling-card {
    margin-top: 40px;
  }

  .previous-ruling-card {
    display: flex;
    position: relative;
    height: 550px;
    width: 492px;

    article {
      position: absolute;
      bottom: 0;
      width: 100%;
      max-width: 492px;
    }

    .ruling-figure {
      position: absolute;
      z-index: -1;
      height: 550px;
      .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background: linear-gradient(to top, #111, rgba(0, 0, 0, 0.1));
      }
    }

    .thumbs-up,
    .thumbs-down {
      width: 31px;
      height: 31px;
      background-size: 18px 18px;
    }

    .ruling-title {
      margin-top: 303px;
      font-size: 45px;
      color: $base-color;

      .ruling-name {
        display: inline-block;
        max-width: 90%;
        margin-left: 11px;
        font-size: 45px;
      }

      .ruling-history {
        font-size: 12.01px;
        padding-left: 41px;
        .strong {
          font-weight: 900;
        }
      }

      .thumbs-up {
        background-color: #1cbbb4;
      }

      .thumbs-down {
        background-color: #ffad1d;
      }
    }

    .ruling-description-content {
      padding-left: 41px;
    }

    .ruling-description {
      display: inline-block;
      max-width: 85%;
      margin-top: 12px;
      font-family: "Lato Light";
      font-size: 16px;
      color: $base-color;
    }

    .ruling-actions {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 24px;
      padding-right: 20px;
      color: $base-color;

      button.ruling-report,
      button.vote-now {
        height: 38px;
        border: solid $base-color 1px;
        background-color: rgba(0, 0, 0, 0.1);
        color: $base-color;
        cursor: pointer;
      }

      button.ruling-report {
        width: 154px;
      }

      button.thumbs-up,
      button.thumbs-down {
        border: solid 2px transparent;
        cursor: pointer;
        &.active {
          border: solid 2px $base-color;
        }
      }

      button.thumbs-up {
        background-color: #1cbbb4;
        margin-right: 10px;
      }

      button.thumbs-down {
        background-color: #ffad1d;
        margin-right: 12px;
      }

      button.vote-now {
        width: 97px;
      }
    }

    .ruling-percentage {
      height: 49px;
      margin-top: 32px;
      font-size: 20.4px;
      color: $base-color;

      .thumbs-up,
      .thumbs-down {
        width: 28px;
        height: 28px;
        background-size: 28px 28px;
      }

      .percentage-sign {
        align-self: flex-end;
        height: 34px;
      }

      .ruling-percentage-left {
        display: inline-flex;
        align-items: center;
        height: 100%;
        background-color: rgba(47, 190, 184, 0.8);
        vertical-align: top;

        .thumbs-up {
          margin-left: 10px;
          margin-right: 8px;
        }
      }

      .ruling-percentage-right {
        display: inline-flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        background-color: rgba(255, 181, 51, 0.8);
        vertical-align: top;

        .thumbs-down {
          margin-left: 8px;
          margin-right: 11px;
        }
      }

      .percentage-big {
        font-size: 29.14px;
      }
    }
  }

  .end-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 24px 0 34px;
    margin-top: 33px;
    background-image: url("~@/assets/images/end_banner.jpg");

    span {
      font-family: "Lato Light";
      font-size: 30px;
      color: #333333;
    }

    button {
      width: 204px;
      height: 47px;
      border: solid #333333 3px;
      font-size: 20px;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        filter: opacity(0.5);
      }
    }
  }
}

.thumbs-up,
.thumbs-down {
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
}

.thumbs-up {
  background-image: url("~@/assets/images/icon_thumbs_up.png");
}

.thumbs-down {
  background-image: url("~@/assets/images/icon_thumbs_down.png");
}

button {
  &:hover {
    -webkit-filter: brightness(0.5);
    filter: brightness(0.5);
  }
}

@media screen and (max-width: 1255px) {
  .previous-ruling {
    .previous-ruling-content {
      flex-direction: column;
      align-items: center;
    }

    .previous-ruling-card + .previous-ruling-card {
      margin-top: 40px;
    }
  }
}

@media screen and (max-width: 925px) {
  .previous-ruling {
    padding: 0 $margin-right-tablet 0 $margin-left-tablet;

    .previous-ruling-content {
      flex-direction: column;
      align-items: center;
    }

    .previous-ruling-card {
      overflow: hidden;
    }

    .end-banner {
      flex-direction: column;
      padding-top: 16px;
      padding-bottom: 16px;
      span {
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 525px) {
  .previous-ruling {
    padding: 0 $margin-right-mobile 0 $margin-left-mobile;
  }
}
</style>
