import jQuery from "jquery";
import * as helpers from "@/helpers.js";
import { mainShare, whatsAppShare } from "@/share.js";
import NProgress from "nprogress";
window.$ = jQuery;
window.jQuery = jQuery;
NProgress.configure({
  showSpinner: false,
});
const debounce = require("lodash.debounce");
//
const appendForm = function() {
  const nativeForm = document.querySelector("form.en__component--page");
  const enFormWrapper = document.querySelector(".enform__wrapper");
  if (nativeForm && enFormWrapper) {
    enFormWrapper.appendChild(nativeForm);
  }
};
//
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      currentPage: 0,
      PageFn: {
        isMobile: false,
        isLoading: true,
        isResizing: false,
        viewportHeight: 0,
        scrollDepth: 0,
      },
      showMobileForm: false,
      formSubmitted: false,
      value: 0,
      max: 20000,
    };
  },
  methods: {
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    },
    getDocumentHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    },
    getWindowHeight() {
      return (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight
      );
    },
    getScrollTop() {
      return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    },
    checkMobile() {
      this.PageFn.isMobile = helpers.mobilecheck();
      this.$store.commit("SET_MOBILE", helpers.mobilecheck());
    },
    handleResize() {
      this.checkMobile();
      if (!this.PageFn.isMobile && !this.showMobileForm) {
        this.showMobileForm = true;
      }
    },
    handleScroll() {
      let scroll = this.getScrollTop() / this.innerHeight;
      this.PageFn.scrollDepth = Math.round(scroll * 100);
    },
    pageInit() {
      this.handleResize();
      this.PageFn.isLoading = false;
    },
    openPetitionFullSection() {
      if (this.PageFn.isMobile && !this.showMobileForm) {
        this.$store.commit("SET_SCROLLOFF", true);
        this.showMobileForm = true;
      }
    },
    closePetitionFullSection() {
      if (this.PageFn.isMobile && this.showMobileForm) {
        this.$store.commit("SET_SCROLLOFF", false);
        this.showMobileForm = false;
      }
    },
  },
  computed: {
    innerHeight() {
      return this.getDocumentHeight() - this.getWindowHeight();
    },
    scrollDepth() {
      return this.PageFn.scrollDepth;
    },
    scrollOff: function() {
      return this.$store.state.scrollOff;
    },
    mobileBtnText: function() {
      if (this.formSubmitted) {
        return "感謝您加入聯署";
      } else {
        return "立即聯署";
      }
    },
  },
  watch: {
    scrollOff(val) {
      function makeScrollOff() {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.body.classList.add("modal-open");
      }

      function disableScrollOff() {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        document.body.classList.remove("modal-open");
      }
      val ? makeScrollOff() : disableScrollOff();
    },
    formSubmitted(val) {
      if (val) {
        console.log("petition has been signed");
        this.showMobileForm = true;
      }
    },
  },
  created() {
    NProgress.start();
    window.addEventListener("resize", debounce(this.handleResize, 200));
    window.addEventListener("scroll", this.handleScroll);
    //
    const page =
      typeof window.pageJson === "undefined"
        ? window.location.pathname.split("/").slice(-1)[0]
        : window.pageJson.pageNumber;
    this.currentPage = page;
    if (page == 2) {
      this.formSubmitted = true;
      const shareBtn = document.querySelector(".button--share");
      const whatsappBtn = document.querySelector(".button--whatsappshare");
      if (shareBtn) {
        shareBtn.addEventListener("click", mainShare);
      }
      if (whatsappBtn) {
        whatsappBtn.addEventListener("click", whatsAppShare);
      }
    }
  },
  mounted() {
    appendForm();
    if (!this.formSubmitted) {
      helpers.enFormFieldInit();
      helpers.enFormType();
      helpers.createBirthYearList();
      helpers.enFormEmailCheck();
      let setEmailConsent = function() {
        let pageEmailConsent = document.querySelector(
          "#en__field_supporter_questions_7275"
        ).checked
          ? "Y"
          : "N";
        sessionStorage.setItem("pageEmailConsent", pageEmailConsent);
      };
      setEmailConsent();
      document
        .querySelector("#en__field_supporter_questions_7275")
        .addEventListener("change", function() {
          setEmailConsent();
          // console.log(sessionStorage.getItem('pageEmailConsent'))
        });
    }
    fetch(
      "https://act.greenpeace.org/ea-dataservice/data.service?contentType=json&service=EaDataCapture&token=7a06c0fc-32fe-43f1-8a1b-713b3ea496e1&campaignId=149502&resultType=summary"
    )
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => {
        const participants = parseInt(data.rows[0].columns[4].value);
        this.value = participants;
      });
    //
    this.$nextTick(function() {
      NProgress.done();
      this.pageInit();
      this.$store.commit("SET_VIEW_LOADING", false);
    });
  },

  destroyed() {
    document.removeEventListener("resize", this.handleResize);
    document.removeEventListener("scroll", this.handleScroll);
    alert("Please refresh the page");
  },
};
