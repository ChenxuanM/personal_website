<script setup lang="ts">
import DirCompo from '@/components/DirCompo.vue'
import BigText from '@/components/BigText.vue'
import ItaText from '@/components/ItaText.vue'
import { getImg } from '@/utils/getImg.ts'

const BtnList = ref([
  {
    btnText: 'Midjourney',
    title: 'Conceptual exploration:',
    content:
      'Early visual direction; option testing; lighting and material tone tests. Fast iteration for moodboards and concept atmospheres.',
  },
  {
    btnText: 'Prome AI',
    title: 'Massing accuracy:',
    content:
      'Apply reference images to control architectural form. Better follows massing models with strong scene consistency.',
  },
  {
    btnText: 'Nano Banana',
    title: 'Final refinement:',
    content:
      'Excellent at refining images with strong scene/character consistency. Balances aesthetic quality with massing accuracy for presentation-ready outputs.',
  },
])

const botmList = ref([
  {
    img: getImg('work', 'base.png'),
    title: 'Step 1: Base Massing',
    text: 'Simple architectural model with basic geometry and proportions',
  },
  {
    img: getImg('work', 'midjourney.png'),
    title: 'Step 2: Midjourney',
    text: 'Conceptual exploration testing material palettes and atmosphere',
  },
  {
    img: getImg('work', 'prome_AI.png'),
    title: 'Step 3: Prome AI',
    text: 'Massing accuracy enhanced with reference image control',
  },
  {
    img: getImg('work', 'nano_banana.png'),
    title: 'Step 4: Nano Banana',
    text: 'Final refinement achieving photorealistic quality',
  },
])
</script>

<template>
  <div class="work_AI">
    <dir-compo
      assets-path="work"
      file-name="moon.png"
      :isUseOrigin="false"
      :routerList="[
        {
          path: '/',
          pathName: 'Home',
        },
        {
          path: '/work',
          pathName: 'Work',
        },
        {
          path: '/work/AI',
          pathName: 'AI in Architecture',
        },
      ]"
    >
    </dir-compo>

    <main class="article_body">
      <article class="wow slideInLeft">
        <big-text class="top_title" text="AI in Architecture"></big-text>

        <ita-text
          class="ita_sub_text"
          text="Bridging Design Expertise with Computational Tools"
        ></ita-text>

        <big-text class="sumary_text" text="AI-Assisted Design Workflow"></big-text>

        <big-text
          class="article_item"
          text="My doctoral research (IDEAL project) required rapid visualization of diverse spatial scenarios for active learning environments—leading me to develop a systematic workflow with leading AI visualization tools."
        ></big-text>

        <big-text
          class="article_item"
          text="By combining architectural expertise with tool-specific knowledge, I've established an effective process: Midjourney for conceptual exploration and atmospheric testing, Prome AI for massing accuracy and reference integration, Nano Banana for detail refinement and photorealistic quality."
        ></big-text>

        <big-text
          class="article_item"
          text="This workflow transforms AI from generic generators into precision design instruments—where professional judgment guides computational efficiency."
        ></big-text>

        <big-text
          class="botm_text"
          text="This exploration spans the following projects:"
        ></big-text>

        <div class="btom_text">
          <big-text class="bt_txt" :text="'Technical Proficiency'.toUpperCase()" />

          <big-text class="sm_tit _sm" text="Image Generation:" />

          <big-text class="item_text" text="Midjourney" />

          <big-text class="item_text" text="Prome AI" />

          <big-text class="item_text" text="Nano Banana" />

          <big-text class="item_text" text="Dreamina" />

          <big-text style="margin-top: 16px" class="sm_tit _sm" text="Video Generation:" />

          <big-text class="item_text" text="Dreamina" />

          <big-text class="item_text" text="Sora" />

          <big-text class="item_text" text="Midjourney (experimental)" />
        </div>
      </article>

      <div class="ai_right wow slideInRight">
        <BigText class="right_title" text="My Workflow" />

        <div class="ai_card">
          <big-text class="card_tit" text="Systematic AI-Assisted Design Process" />

          <div class="btn_list">
            <div class="btn_list_item" :key="index" v-for="(item, index) in BtnList">
              <div class="button">{{ item.btnText }}</div>
              <span class="arrow">→</span>
              <div class="content">
                <div class="t">
                  {{ item.title }}
                </div>
                <div class="b">
                  {{ item.content }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <big-text class="botmTitle wow slideInRight" text="From Massing to Presentation" />

        <div class="four_card_wrap">
          <div
            class="card_item wow "
            :class="[index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight']"
            :key="index"
            v-for="(item, index) in botmList"
          >
            <img :src="item.img" :alt="item.title" />

            <big-text class="stepTitle" :text="item.title" />

            <big-text class="stepContent" :text="item.text" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align: 'center', $justContent: 'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.work_AI {
  padding: 104px 218px;
  overflow: hidden;

  * {
    font-family: inter-normal;
  }

  .article_body {
    margin-top: 45px;
    @include flexStyle();

    article {
      margin-right: 315px;

      .top_title {
        height: 49px;
        color: rgba(30, 30, 30, 1);
        font-weight: 500;
        font-size: 44px;
        line-height: 48.4px;
        letter-spacing: -0.7px;
        margin-bottom: 6px;
      }
      .ita_sub_text {
        color: rgba(189, 189, 189, 1);
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.3px;
        height: unset;
        margin-bottom: 40px;
      }

      .sumary_text {
        height: unset;
        color: rgba(68, 68, 68, 0.87);
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.4px;
        margin-bottom: 13px;
      }

      .article_item {
        width: 450px;
        color: rgba(138, 138, 138, 1);
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.3px;
        margin-bottom: 10px;
      }

      .botm_text {
        color: rgba(138, 138, 138, 1);
        font-weight: 300;
        font-size: 14px;
        line-height: 22.4px;
        letter-spacing: -0.2px;
        margin-bottom: 9px;
        margin-top: 5px;
      }

      .sm_tit {
        font-size: 14px;
        height: unset;
        font-weight: 500;
        color: rgb(96, 96, 96);

        &._sm {
          height: unset;
          font-size: 13px;
        }
      }

      .b_ita {
        margin-top: 12px;
        color: rgba(144, 144, 144, 1);
        font-weight: 400;
        font-size: 12px;
        height: unset;
      }

      .btom_text {
        width: 466px;
        padding-top: 9px;
        color: rgba(208, 208, 208, 1);
        font-size: 12px;
        line-height: 16px;
        border-top: 1px solid rgba(26, 26, 26, 1);

        .bt_txt {
          height: unset;
          font-size: 12px;
          font-weight: 600;
          color: rgba(144, 144, 144, 1);
          margin-bottom: 10px;
        }

        .item_text {
          padding-left: 15px;
          margin-top: 15px;
          font-weight: 400;
          font-size: 14px;
          color: rgba(112, 112, 112, 1);
        }
      }
    }

    .ai_right {
      .right_title {
        margin-bottom: 30px;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        text-transform: uppercase;
        letter-spacing: 1.3px;
        color: rgba(144, 144, 144, 1);
      }

      .ai_card {
        width: 740px;
        height: 450px;
        border-radius: 14px;
        border: 1px solid rgba(232, 232, 232, 1);
        background: rgba(255, 255, 255, 0.4);

        .card_tit {
          margin-top: 46px;
          margin-bottom: 47px;
          width: 100%;
          justify-content: center;
          color: rgba(112, 112, 112, 1);
          font-weight: 500;
          font-size: 20px;
          line-height: 30px;
          letter-spacing: -0.7px;
        }

        .btn_list {
          .btn_list_item {
            @include flexStyle(center, center);
            margin-bottom: 20px;
            .button {
              @include flexStyle(center, center);
              font-weight: 600;
              font-size: 15px;
              width: 160px;
              height: 50px;
              border-radius: 25px;
              background: rgba(42, 42, 42, 1);
              color: rgba(255, 255, 255, 1);
            }

            .arrow {
              color: rgba(208, 208, 208, 1);
              font-weight: 400;
              font-size: 24px;
              margin: 0 30px;
            }

            .content {
              .t {
                color: rgba(96, 96, 96, 1);
                font-weight: 700;
                font-size: 14px;
                letter-spacing: -0.2px;
              }
              .b {
                width: 412px;
                margin-top: 4px;
                font-weight: 400;
                font-size: 14px;
                line-height: 22.8px;
                letter-spacing: -0.2px;
                color: rgba(96, 96, 96, 1);
              }
            }
          }
        }
      }

      .botmTitle {
        margin-top: 50px;
        height: unset;
        color: rgba(112, 112, 112, 1);
        font-weight: 500;
        font-size: 28px;
        letter-spacing: -0.1px;
        margin-bottom: 51px;
      }

      .four_card_wrap {
        @include flexStyle();
        flex-wrap: wrap;
      }

      .card_item {
        overflow: hidden;
        width: 355px;
        height: 400px;
        background: rgba(250, 250, 250, 1);
        border-radius: 10px;
        transition: all .3s linear;
        &:hover {
          transform: translateY(-10px);
        }

        &:nth-child(2n + 1) {
          margin-right: 27px;
          margin-bottom: 27px;
        }

        img {
          height: 300px;
          display: block;
          background-color: #eee;
        }

        .stepTitle {
          margin-top: 19px;
          margin-left: 20px;
          color: rgba(74, 74, 74, 1);
          font-weight: 600;
          font-size: 13px;
        }

        .stepContent {
          margin-top: 5px;
          margin-left: 20px;
          width: 314px;
          height: 39px;
          font-weight: 400;
          font-size: 13px;
          line-height: 19.5px;
          letter-spacing: -0.1px;
          color: rgba(112, 112, 112, 1);
        }
      }
    }
  }
}
</style>
