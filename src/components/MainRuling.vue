<template>
  <section class="main-ruling">
    <article class="main-ruling-article">
      <div class="blur"></div>
      <section class="main-ruling-content">
        <div class="artile-content">
          <p class="article-question">
            What’s your opinion on
          </p>
          <strong class="article-question-strong">Pope Francis?</strong>
          <div class="article-question-description">
            <p>
              He’s talking tough on clergy sexual abuse, but
              is he just another papal pervert protector?
              (thumbs down) or a true pedophile punishing
              pontiff? (thumbs up)
            </p>
            <a
              class="more-information"
              href="http://wikipedia.com"
              target="_blank"
            ><i class="wiki"></i>More information</a>
            <p class="article-question-conclusion">What’s Your Verdict?</p>
          </div>
        </div>
      </section>
      <div class="article-vote">
        <button
          class="thumbs-up"
          :class="{'active' : currentVote == 'up'}"
          v-on:click="thumbsUp()"
        ></button>
        <button
          class="thumbs-down"
          :class="{'active' : currentVote == 'down'}"
          v-on:click="thumbsDown()"
        ></button>
      </div>
    </article>
    <section class="closing-in">
      <span class="closing-in-description">Closing in <i class="triangle-right"></i></span>
      <span class="closing-in-days"><strong>22</strong> days</span>
    </section>
  </section>
</template>

<script>

export default {
  name: 'MainRulling',
  props: {
    msg: String,
  },
  data() {
    return {
      thumnsUpCount: 0,
      thumnsDownCount: 0,
      currentVote: null,
    };
  },
  methods: {
    thumbsUp() {
      this.thumnsUpCount += 1;
      this.currentVote = 'up';
    },
    thumbsDown() {
      this.thumnsDownCount += 1;
      this.currentVote = 'down';
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/variables.scss";

.main-ruling {
  position: relative;
  height: 740px;
  padding: $header-height $margin-right 0 $margin-left;
  background-image: url("~@/assets/images/main_ruling_pope.jpg");
  background-repeat: no-repeat;

  .main-ruling-article {
    position: relative;
    max-width: 500px;
    padding-top: 39px;
    margin-top: 71px;
    overflow: hidden;

    .main-ruling-content {
      padding-left: 33px;
    }

    div.blur {
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      display: block;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      background-color: rgba(90, 90, 90, 0.9);
      -webkit-filter: blur(10px);
      filter: blur(10px);
    }

    div.artile-content {
      position: relative;
      color: $base-color;

      .article-question {
        font-family: "Lato Light";
        font-size: 16px;
      }

      .article-question-strong {
        font-family: "Lato";
        font-size: 60px;
        font-weight: 400;
      }

      .article-question-description {
        max-width: 410px;
        margin-top: 28px;
        font-family: "Lato Light";
        font-size: 21px;

        a.more-information {
          display: inline-flex;
          align-items: center;
          margin-top: 26px;
          font-size: 14px;
          text-decoration: underline;
          text-decoration-color: #a49e9f;
          color: $base-color;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }

          .wiki {
            display: inline-block;
            width: 16px;
            height: 12px;
            margin-right: 6px;
            background-image: url("~@/assets/images/icon_wiki.png");
            background-repeat: no-repeat;
          }
        }

        .article-question-conclusion {
          margin-top: 44px;
          font-family: "Lato";
          font-weight: 900;
          font-size: 20px;
        }
      }
    }

    .article-vote {
      display: flex;
      position: relative;
      z-index: 1;
      width: 100%;
      height: 80px;
      margin-top: 36px;

      button {
        flex-basis: 50%;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        border: none;

        &.thumbs-up {
          background-image: url("~@/assets/images/icon_thumbs_up.png");
          background-color: rgba(47, 190, 184, 0.8);
        }

        &.thumbs-down {
          background-image: url("~@/assets/images/icon_thumbs_down.png");
          background-color: rgba(255, 181, 51, 0.8);
        }

        &.active {
          border: solid 1px $base-color;
        }

        &:hover {
          -webkit-filter: brightness(0.9);
          filter: brightness(0.9);
        }
      }
    }
  }

  .closing-in {
    display: flex;
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0;
    bottom: 0;
    background-color: rgba(112, 112, 112, 0.5);

    .closing-in-description {
      display: flex;
      flex-basis: 35%;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      height: 100%;
      padding-right: 10px;
      font-size: 13px;
      text-transform: uppercase;
      color: $base-color;
    }

    .triangle-right {
      position: absolute;
      right: -9px;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-left: 9px solid rgba(0, 0, 0, 0.311);
      border-bottom: 7px solid transparent;
    }

    .closing-in-days {
      flex-basis: 65%;
      height: 100%;
      padding-left: 16px;
      font-family: "Lato Light";
      font-size: 36.38px;
      background-color: rgba(255, 255, 255, 0.7);
      color: #464646;

      strong {
        font-family: "Lato";
      }
    }
  }
}

@media screen and (max-width: 925px) {
  .main-ruling {
    background-size: cover;
    width: calc(100% - #{$margin-left-tablet} - #{$margin-right-tablet});
    height: auto;
    padding: 100px $margin-right-tablet 100px $margin-left-tablet;

    .main-ruling-article {
      margin-top: 0px;
      padding-top: 16px;
      width: 60%;

      .main-ruling-content {
        padding-left: 16px;
      }

      div.artile-content {
        .article-question {
          font-size: 16px;
        }

        .article-question-strong {
          font-size: 30px;
        }

        .article-question-description {
          margin-top: 16px;
          font-size: 18px;

          a.more-information {
            margin-top: 16px;
            font-size: 14px;
          }

          .article-question-conclusion {
            margin-top: 16px;
            font-family: "Lato";
            font-weight: 900;
            font-size: 20px;
          }
        }
      }

      .article-vote {
        height: 40px;
        margin-top: 20px;

        button {
          background-size: 16px 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 608px) {
  .main-ruling {
    width: calc(100% - #{$margin-left-mobile} - #{$margin-right-mobile});
    padding: 100px $margin-right-mobile 100px $margin-left-mobile;

    .main-ruling-article {
      width: 100%;
      max-width: 100%;

      .main-ruling-content {
        padding-left: 16px;
      }

      div.artile-content {
        .article-question {
          font-size: 14px;
        }

        .article-question-strong {
          font-size: 24px;
        }

        .article-question-description {
          max-width: 90%;
          margin-top: 8px;
          font-size: 16px;

          a.more-information {
            margin-top: 16px;
            font-size: 14px;
          }

          .article-question-conclusion {
            margin-top: 16px;
            font-size: 20px;
          }
        }
      }

      .article-vote {
        height: 40px;
        margin-top: 20px;

        button {
          background-size: 16px 16px;
        }
      }
    }
  }
}
</style>
