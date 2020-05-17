<template>
  <header>
    <router-link
      to="/"
      class="header-title"
    >Rule of Thumb.</router-link>
    <nav class="header-navigation">
      <router-link to="past-trials">Past Trials</router-link>
      <router-link to="how-it-works">How it Works</router-link>
      <router-link to="login-signin">Log In/Sign Up</router-link>
      <i class="search"></i>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/styles/variables.scss";

header {
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - #{$margin-left} - #{$margin-right});
  height: $header-height;
  padding: 0 $margin-right 0 $margin-left;
  background: linear-gradient(to bottom, #444, rgba(55, 55, 55, 0));
  color: $base-color;

  .header-title {
    font-size: 32px;
    color: $base-color;
    text-decoration: none;
  }

  .header-navigation {
    font-family: "Lato Light";
    font-weight: 400;

    > a {
      margin-right: 50px;
      cursor: pointer;
      color: $base-color;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .search {
      display: inline-block;
      width: 24px;
      height: 26px;
      background-image: url("~@/assets/images/icon_search.png");
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 925px) {
  header {
    flex-direction: column;
    justify-content: flex-start;
    width: calc(100% - #{$margin-left-tablet} - #{$margin-right-tablet});
    padding: 0 $margin-right-tablet 0 $margin-left-tablet;

    .header-navigation {
      > a {
        margin-right: 18px;
      }
    }
  }
}

@media screen and (max-width: 525px) {
  header {
    flex-direction: column;
    justify-content: flex-start;
    width: calc(100% - #{$margin-left-mobile} - #{$margin-right-mobile});
    padding: 0 $margin-right-mobile 0 $margin-left-mobile;

    .header-navigation {
      > a {
        margin-right: 18px;
      }
    }
  }
}
</style>
