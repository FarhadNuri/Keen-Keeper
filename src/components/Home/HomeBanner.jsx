import React from "react";
import HomeBannerGrid from "./HomeBannerGrid";

function HomeBanner() {
  return (
    <section className="bg-slate-100 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 sm:text-5xl">
            Friends to keep close in your life
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-[#64748B] sm:text-sm">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.
          </p>
          <button
            type="button"
            className="cursor-pointer mt-6 inline-flex items-center gap-2 rounded bg-[#244D3F] px-4 py-2 text-sm font-medium text-white hover:bg-[#1E4034]"
          >
            <i className="fa-solid fa-plus text-xs" aria-hidden="true"></i>
            <span>Add a Friend</span>
          </button>
        </div>

        <div className="mt-8 sm:mt-10">
          <HomeBannerGrid />
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
