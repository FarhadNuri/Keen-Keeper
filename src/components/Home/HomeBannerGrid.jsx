import React, { use } from "react";
import { DataContext } from "./HomeDataContext";

function HomeBannerGrid() {
  const userData = use(DataContext) || [];

  const countOnTrack = userData.filter((user) => user?.status === "on_track").length;
  const needAttention = userData.filter((user) => user?.status === "overdue").length;
  const totalFriends = userData.length;
  const interactionsThisMonth = userData.length;

  const stats = [
    { value: totalFriends, label: "Total Friends" },
    { value: countOnTrack, label: "On Track" },
    { value: needAttention, label: "Need Attention" },
    { value: interactionsThisMonth, label: "Interactions This Month" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-slate-200 bg-white px-6 py-5 text-center"
        >
          <p className="text-3xl font-semibold text-[#244D3F]">{item.value}</p>
          <p className="mt-2 text-sm text-[#64748B]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default HomeBannerGrid;
