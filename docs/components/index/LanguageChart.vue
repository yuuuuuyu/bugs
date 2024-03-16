<template>
  <div class="about-me-container">
    <div class="title">关于我</div>
    <div class="content">
      <div class="card-container">
        <div class="e-card playing">
          <div class="image"></div>

          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>

          <div class="infotop">
            <div class="img-container">
              <img
                src="https://foruda.gitee.com/avatar/1690254718937639653/5629053_yu_zhi_yong_1690254718.png!avatar80"
                alt=""
                style="width: 80px; height: 80px; border-radius: 50%"
              />
            </div>
            <br />
            <div style="font-family: 'Lucida Handwriting'">小于</div>
            <div class="name">前端 / 摩托 / 摄影 / 健身</div>
            <div class="name">
              喜欢探索和实践各种效率提升工具，对开源文化、分享精神和创新有着浓厚的兴趣。渴望创造价值，不断地探索新技术的边界，持续输出笔记。
            </div>
            <div class="social-link">
              <div class="card">
                <!-- <el-popover placement="top" trigger="hover">
                  <template #reference>
                    <span class="social-link4">
                      <svg
                        t="1699181349640"
                        class="bi bi-whatsapp"
                        fill="currentColor"
                        viewBox="0 0 1280 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="14538"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M858.148572 309.753124C872.728381 309.753124 887.070474 310.852936 901.491809 312.42409 862.665144 133.155348 669.403428 0 448.725335 0 202.057143 0 0 166.620943 0 378.334024 0 500.491295 67.193905 600.809513 179.553524 678.73878L134.704762 812.522593 291.596191 734.593326C347.696763 745.512852 392.704 756.825165 448.725335 756.825165 462.829716 756.825165 476.775619 756.1967 490.563046 755.17545 481.846856 725.402071 476.696381 694.293212 476.696381 661.848868 476.775619 467.497047 645.077335 309.753124 858.148572 309.753124L858.148572 309.753124ZM616.947809 189.167012C650.861716 189.167012 673.127619 211.241733 673.127619 244.707328 673.127619 278.015805 650.861716 300.3262 616.947809 300.3262 583.430093 300.3262 549.674665 278.015805 549.674665 244.707328 549.674665 211.163177 583.350856 189.167012 616.947809 189.167012L616.947809 189.167012ZM302.927237 300.3262C269.251046 300.3262 235.337143 278.015805 235.337143 244.707328 235.337143 211.241733 269.251046 189.167012 302.927237 189.167012 336.603428 189.167012 358.948572 211.163177 358.948572 244.707328 358.948572 278.015805 336.603428 300.3262 302.927237 300.3262L302.927237 300.3262ZM1267.809526 656.506941C1267.809526 478.652242 1088.256 333.713234 886.595046 333.713234 673.048381 333.713234 504.984381 478.730803 504.984381 656.506941 504.984381 834.832988 673.127619 979.300652 886.595046 979.300652 931.285335 979.300652 976.371809 968.224012 1021.220572 957.068815L1144.277335 1024 1110.521907 912.762255C1200.615619 845.673953 1267.809526 756.825165 1267.809526 656.506941L1267.809526 656.506941ZM762.825144 600.809513C740.559237 600.809513 717.976381 578.813348 717.976381 556.345841 717.976381 534.192558 740.559237 511.882163 762.825144 511.882163 796.897526 511.882163 819.004954 534.192558 819.004954 556.345841 819.004954 578.813348 796.897526 600.809513 762.825144 600.809513L762.825144 600.809513ZM1009.651809 600.809513C987.544381 600.809513 965.040763 578.813348 965.040763 556.345841 965.040763 534.192558 987.465144 511.882163 1009.651809 511.882163 1043.407237 511.882163 1065.831619 534.192558 1065.831619 556.345841 1065.831619 578.813348 1043.407237 600.809513 1009.651809 600.809513L1009.651809 600.809513Z"
                          fill="#ffffff"
                          p-id="14539"
                        ></path>
                      </svg>
                    </span>
                  </template>
                  <div style="height: 160px; width: 117.2px">
                    <img
                      src="https://oss.justin3go.com/weixin.jpg"
                      alt=""
                      style="height: 160px"
                    />
                  </div>
                </el-popover>
                <el-popover placement="top" trigger="hover" :visible="false">
                  <template #reference>
                    <span class="social-link5" @click="goGitee">
                      <svg
                        t="1710578342587"
                        class="icon gitee"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1443"
                        width="128"
                        height="128"
                      >
                        <path
                          d="M966.524718 400.672821H456.520205c-24.497231 0-44.347077 19.954872-44.347077 44.557128v133.540102c0 24.602256 19.849846 44.530872 44.347077 44.530872h288.295385c33.266872 0 44.320821 11.132718 44.347077 44.530872 0.026256 89.035487-50.884923 133.566359-133.041231 133.566359h-376.779487c-24.602256 0-44.530872-19.954872-44.530872-44.530872v-400.67282c0-73.780513 59.575795-133.592615 133.014974-133.592616h598.593641c24.470974 0 44.320821-19.928615 44.320821-44.504615V44.530872C1010.740513 19.928615 990.916923 0 966.419692 0H367.826051C171.979487 0 13.128205 159.455179 13.128205 356.168205v623.32718C13.128205 1004.045128 32.978051 1024 57.475282 1024h598.646154c196.187897 0 352.439795-170.325333 354.619077-367.327179 0.131282-11.106462 0.131282-200.33641 0.131282-211.442872a44.478359 44.478359 0 0 0-44.347077-44.530872z"
                          fill="#ffffff"
                          p-id="1444"
                        ></path>
                      </svg>
                    </span>
                  </template>
                </el-popover> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <figure class="lang-chart-container">
        <iframe class="lang-chart" :src="langChartSrc"></iframe>
      </figure>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useData } from "vitepress"
import { computed } from "vue"
import { ElPopover, ElButton } from "element-plus"

const { isDark } = useData()

const langChartSrc = computed(() =>
  isDark.value
    ? "https://wakatime.com/share/@018e17c8-dd42-4198-81dc-b406f6c3f34b/5694c8fe-4f61-4b31-8885-8623ede8a3aa.svg"
    : "https://wakatime.com/share/@018e17c8-dd42-4198-81dc-b406f6c3f34b/f6b11c02-b282-4ee2-8ba6-d5a2d4b3b18d.svg"
)

const goGitee = () => {
  window.open("https://gitee.com/yu_zhi_yong")
}
</script>
<style lang="scss" scoped>
.about-me-container {
  max-width: 1152px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  margin-top: 40px;

  iframe {
    border: none;
  }

  .title {
    font-size: 20px;
    font-weight: 900;
  }

  .content {
    display: flex;
    justify-content: left;
    width: 100%;
    height: 100%;
    margin-top: 20px;

    .lang-chart-container {
      flex: 1;
      padding: 20px;
      padding-top: 0;
      border-radius: 6px;
      background-color: var((--vp-c-bg));
      border: 1px solid var(--vp-c-gutter);
      box-shadow: inset 0px 8px 28px -9px rgba(0, 0, 0, 0.1);
      position: relative;

      .chart-title {
        position: absolute;
        left: 40px;
        top: -20px;
        margin-top: 30px;
        letter-spacing: 2px;
        font-size: 12px;
        color: #bbb;

        a {
          text-decoration: underline;
        }
      }

      .lang-chart {
        margin-top: 20px;
        width: 100%;
        height: 440px;
      }
    }
  }

  .card-container {
    margin-right: 16px;

    .e-card {
      background: transparent;
      box-shadow: inset 0px 8px 28px -9px rgba(0, 0, 0, 0.1);
      border: 1px solid var(--vp-c-gutter);
      position: relative;
      width: 340px;
      height: 480px;
      border-radius: 6px;
      overflow: hidden;
    }

    .wave {
      position: absolute;
      width: 600px;
      height: 700px;
      opacity: 0.5;
      left: 0;
      top: 0;
      margin-left: -40%;
      margin-top: 30%;
      background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
    }

    .icon {
      width: 3em;
      margin-top: -1em;
      padding-bottom: 1em;
    }

    .infotop {
      text-align: center;
      font-size: 20px;
      position: absolute;
      top: 4.5em;
      left: 0;
      right: 0;
      color: rgb(255, 255, 255);
      font-weight: 600;

      .img-container {
        display: flex;
        justify-content: center;
      }
    }

    .name {
      padding: 5px 40px;
      font-size: 14px;
      font-weight: 100;
      position: relative;
      top: 1em;
      text-transform: lowercase;
    }

    .wave:nth-child(2),
    .wave:nth-child(3) {
      top: 60px;
    }

    .playing .wave {
      border-radius: 40%;
      animation: wave 3000ms infinite linear;
    }

    .wave {
      border-radius: 40%;
      animation: wave 55s infinite linear;
    }

    .playing .wave:nth-child(2) {
      animation-duration: 4000ms;
    }

    .wave:nth-child(2) {
      animation-duration: 50s;
    }

    .playing .wave:nth-child(3) {
      animation-duration: 5000ms;
    }

    .wave:nth-child(3) {
      animation-duration: 45s;
    }

    @keyframes wave {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    .social-link {
      margin-top: 20px;
      display: flex;
      justify-content: center;

      .card {
        display: flex;
        justify-content: center;
        height: 55px;
        width: 220px;

        svg {
          position: absolute;
          display: flex;
          width: 60%;
          height: 60%;
          font-size: 24px;
          font-weight: 700;
          opacity: 1;
          transition: opacity 0.25s;
          z-index: 2;
          cursor: pointer;
        }

        .social-link1,
        .social-link2,
        .social-link3,
        .social-link4,
        .social-link5 {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 25%;
          color: whitesmoke;
          font-size: 24px;
          text-decoration: none;
          transition: 0.25s;
          border-radius: 50px;
        }

        svg {
          transform: scale(0.6);
        }

        .social-link1:hover {
          background-color: #242c34;
          animation: bounce_613 0.4s linear;
        }

        .social-link2:hover {
          background-color: #00ccff;
          animation: bounce_613 0.4s linear;
        }

        .social-link3:hover {
          background-color: #5865f2;
          animation: bounce_613 0.4s linear;
        }

        .social-link4:hover {
          background-color: #12a50b;
          animation: bounce_613 0.4s linear;
        }
        .social-link5:hover {
          background-color: #c61e23;
          animation: bounce_613 0.4s linear;
        }

        @keyframes bounce_613 {
          40% {
            transform: scale(1.4);
          }

          60% {
            transform: scale(0.8);
          }

          80% {
            transform: scale(1.2);
          }

          100% {
            transform: scale(1);
          }
        }
      }
    }
  }
}

@media (max-width: 1100px) {
  .about-me-container {
    padding: 20px 10px;

    .content {
      justify-content: center;
    }
    .lang-chart-container {
      display: none !important;
    }
  }
}

.gitee {
  top: 50% !important;
  left: 50% !important;
  transform: translateX(-17px) translateY(31px) scale(2) !important;
}
</style>

