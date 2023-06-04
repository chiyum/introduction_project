import viviImg from "@/assets/images/portfolio/vivi.png";
import antImg from "@/assets/images/portfolio/ant.png";
import i18n from "@/i18n";
import { getCurrentPathUrl } from "@/tool";
export const articles = {
  vivi: [
    {
      img: viviImg,
      text: i18n.t("pages.project.list.content.2-1"),
    },
    {
      text: i18n.t("pages.project.list.content.2-2"),
    },
    {
      text: i18n.t("pages.project.list.content.2-3"),
      keyword: [
        {
          isLink: true,
          text: i18n.t("pages.project.list.content.keyword.2"),
          url: getCurrentPathUrl("/dist/index.html#/project/animate"),
        },
      ],
    },
  ],
  ant: [
    {
      img: antImg,
      text: i18n.t("pages.project.list.content.1-1"),
      //   keyword: [
      //     {
      //       isLink: true,
      //       text: "專案",
      //       url: "https://pcant-uat.lili77.net/",
      //     },
      //   ],
    },
    {
      text: i18n.t("pages.project.list.content.1-2"),
    },
    {
      text: i18n.t("pages.project.list.content.1-3"),
    },
  ],
};
