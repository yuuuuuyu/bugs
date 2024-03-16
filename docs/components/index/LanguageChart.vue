<template>
  <div class="custom-container">
    <div class="introduce">
      <h2>Language Chart</h2>
      <p>
        This chart shows the languages you have been coding in over the last 7
        days.
      </p>
      <p>
        <a href="https://wakatime.com">Wakatime</a> is a tool that tracks your
        coding activity and provides insights into your coding habits.
      </p>
      <p>
        <a href="https://wakatime.com/share">Create your own chart</a>
      </p>
    </div>
    <div class="language">
      <figure>
        <embed
          src="https://wakatime.com/share/@018e17c8-dd42-4198-81dc-b406f6c3f34b/94ee628a-0983-4407-bfbf-e797537782d0.svg"
        />
      </figure>
    </div>
  </div>
</template>

<script setup name="LanguageChart"></script>

<style scope lang="scss">
.custom-container {
  max-width: 1152px;
  margin: 0 auto;
  display: flex;
  margin-top: 40px;
  .introduce {
    flex: 1;
    padding-right: 16px;
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
  .language {
    flex: 2;
    figure {
      margin: 0;
      embed {
        width: 100%;
      }
    }
  }
}
</style>

