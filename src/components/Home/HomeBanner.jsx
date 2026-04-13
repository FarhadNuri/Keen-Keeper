import React from "react";
import HomeBannerGrid from "./HomeBannerGrid";

function HomeBanner() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h1>Friends to keep close in your life</h1>
      <p>
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the
        <span>relationships that matter most.
        </span>
        </p>
      <button><i class="fa-solid fa-plus"></i> Add a Friend</button>
      <HomeBannerGrid />
    </div>
  );
}

export default HomeBanner;
