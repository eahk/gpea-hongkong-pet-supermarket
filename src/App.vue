<template>
  <main
    id="app"
    class="main"
  >
    <div class="main-inner">
      <div class="main-bg">
      </div>
      <!-- content -->
      <section class="section--content content site-content">
        <app-header />
        <fade-transition :duration="300">
          <router-view />
        </fade-transition>
        <!-- footer -->
        <app-footer />
      </section>
      <!-- end of content section -->
      <!-- enform -->
      <slide-x-right-transition :duration="600">
        <section
          class="section section--form enform"
          v-show="showMobileForm"
        >
          <div class="container">
            <div class="enform-progress mt-3 mb-3">
              <div class="row mt-1 mb-1">
                <div class="col-6">
                  <p class="p-progress"><span class="font-weight-bold">{{value}}</span> 人已參與聯署</p>
                </div>
                <div class="col-6">
                  <p class="p-target text-right">目標{{max}}個聯署</p>
                </div>
              </div>
              <b-progress
                height="20px"
                :value="value"
                :max="max"
                show-value
                variant="success"
              ></b-progress>
            </div>
          </div>
          <div class="enform-container z-depth-1">
            <div class="enform__header ">
              <h2 class="font-weight--bold">
                <span>拒</span><span>絕</span><span>無</span><span>謂</span><span>包</span><span>裝</span>
              </h2>
              <h2 class="font-weight--bold">
                <span>要</span><span>求</span><span>超</span><span>市</span><span>走</span><span>塑</span>
              </h2>
            </div>
            <div class="enform__wrapper">
            </div>
          </div>
        </section>
      </slide-x-right-transition>
      <!-- end of enform section -->
    </div>
    <!-- end of main inner-->
    <!-- mobile sign now -->
    <div
      class="mobile-sign-now"
      v-show="PageFn.isMobile"
      v-bind:class="{expand: !showMobileForm, collapse: showMobileForm, 'z-depth-1': !showMobileForm}"
    >
      <div
        class="scroll-indicator"
        v-show="!showMobileForm"
      >
        <div
          class="progress-bar"
          v-bind:style="{width: `${this.PageFn.scrollDepth}%` }"
        ></div>
      </div>
      <button
        class="btn"
        v-show="!showMobileForm"
        @click="openPetitionFullSection"
      >
        {{mobileBtnText}}
      </button>
      <button
        class="btn"
        v-show="showMobileForm"
        @click="closePetitionFullSection"
      >
        <i class="material-icons">
          expand_more
        </i>
      </button>
    </div>
    <!-- end of mobile sign -->
  </main>
</template>
<script src="./script.js">
</script>

