export interface ProjectSettings {
  TEST_BRANCH?: string;
  RC_BRANCH?: string;
  PROD_BRANCH: string;
  FORCED_DRAFT_FLOW: boolean;
  ASSIST_PROJECT_ID?: string;
  SITEMAP?: string;
  FOOTER?: string;
  CDN?: string; // Should ends with "/"
  YANDEX_MAP_API_KEY?: string;
  YANDEX_METRIKA_ID?: string;
}

export const projectSettings = new (class implements ProjectSettings {
  _: ProjectSettings = {
    PROD_BRANCH: 'master',
    FORCED_DRAFT_FLOW: false,
  };

  setup(_: ProjectSettings) {
    this._ = _;
  }

  get TEST_BRANCH() {
    return this._.TEST_BRANCH;
  }
  get RC_BRANCH() {
    return this._.RC_BRANCH;
  }
  get PROD_BRANCH() {
    return this._.PROD_BRANCH;
  }
  get FORCED_DRAFT_FLOW() {
    return this._.FORCED_DRAFT_FLOW;
  }
  get ASSIST_PROJECT_ID() {
    return this._.ASSIST_PROJECT_ID;
  }
  get SITEMAP() {
    return this._.SITEMAP;
  }
  get FOOTER() {
    return this._.FOOTER;
  }
  get CDN() {
    return this._.CDN;
  }
  get YANDEX_MAP_API_KEY() {
    return this._.YANDEX_MAP_API_KEY;
  }
  get YANDEX_METRIKA_ID() {
    return this._.YANDEX_METRIKA_ID;
  }
})();
