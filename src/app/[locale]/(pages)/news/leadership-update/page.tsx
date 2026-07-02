import React from "react";
import { useTranslations } from "next-intl";

export default function LeadershipUpdatePage() {
  const t = useTranslations("News");
  
  return (
    <div className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl prose prose-slate lg:prose-lg">
        <h1 className="text-4xl font-bold tracking-tight text-brand-navy mb-4">
          {t("title")}
        </h1>
        <div className="flex items-center text-brand-gray-muted text-sm mb-8">
          <time dateTime="2026-07-02">{t("date")}</time>
          <span className="mx-2">•</span>
          <span>{t("location")}</span>
        </div>

        <p className="lead text-xl text-brand-gray-text mb-8">
          {t("p1")}
        </p>

        <div className="space-y-6 text-brand-gray-text">
          <p>
            {t("p2")}
          </p>

          <h2 className="text-2xl font-semibold text-brand-navy mt-10 mb-4">{t("h2_1")}</h2>
          <p>
            {t.rich("p3", {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
          <p>
            {t("p4")}
          </p>

          <blockquote className="border-l-4 border-brand-blue pl-4 italic my-8 text-lg">
            "{t("quote")}"
            <br />
            <span className="text-base font-semibold block mt-4 text-brand-navy">{t("quoteAuthor")}</span>
          </blockquote>

          <h2 className="text-2xl font-semibold text-brand-navy mt-10 mb-4">{t("h2_2")}</h2>
          <p>
            {t("p5")}
          </p>
          <p>
            {t("p6")}
          </p>

          <h2 className="text-2xl font-semibold text-brand-navy mt-10 mb-4">{t("h2_3")}</h2>
          <p>
            {t("p7")}
          </p>
          <p>
            {t("p8")} <strong>frank@perlogy.africa</strong>.
          </p>
        </div>
      </article>
    </div>
  );
}
