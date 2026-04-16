import React, { useContext } from "react";
import { DataContext } from "./HomeDataContext";
import { Link } from "react-router";

function getStatusText(status) {
  if (status === "on_track") {
    return "On Track";
  }

  if (status === "almost_due") {
    return "Almost Due";
  }

  if (status === "overdue") {
    return "Overdue";
  }

  return "Unknown";
}

function getStatusClass(status) {
  if (status === "on_track") {
    return "bg-[#244D3F] text-white";
  }

  if (status === "almost_due") {
    return "bg-[#EAA33A] text-white";
  }

  if (status === "overdue") {
    return "bg-[#EF4444] text-white";
  }

  return "bg-slate-400 text-white";
}

function HomeCard() {
  const users = useContext(DataContext);

  return (
    <section className="mt-8 border-t border-slate-200 pt-6 sm:mt-12 sm:pt-8">
      <h2 className="text-3xl font-bold text-slate-800">Your Friends</h2>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <h3 className="mt-4 text-2xl font-semibold text-slate-800">
                  {user.name}
                </h3>
                <p className="mt-1 text-sm text-[#64748B]">
                  {user.days_since_contact}d ago
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {user.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#BDEFD0] px-2 py-1 text-xs font-medium uppercase text-[#244D3F]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  className={`mt-4 rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                    user.status,
                  )}`}
                >
                  {getStatusText(user.status)}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomeCard;
