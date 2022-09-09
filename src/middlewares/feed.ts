import Parser from "rss-parser";
import { writeFileSync } from "fs";

const parser = new Parser();

/**
 * npm run build
 * npm run update-rss
 */
(async () => {
  /**
   * rss具体例
   * const feed = await parser.parseURL("http://phiary.me/rss");
   * const feed = await parser.parseURL("https://zenn.dev/<your_zenn_id>/feed");
   * const feed = await parser.parseURL("https://www.reddit.com/.rss");
   */
  try {
    const feed = await parser.parseURL(
      "https://feed.classmethod.jp/blog/daily.rss?_ga=2.224833756.777815598.1662285107-372308359.1648899867"
    );
    let jsonFeed = {};

    const items = feed.items.map((data) => {
      return {
        title: data.title,
        link: data.link,
        author: data.author,
        contentSnippet: data.contentSnippet?.replace(/\n/g, ""),
        pubDate: data.pubDate,
      };
    });

    jsonFeed = items;

    console.log(jsonFeed); // 標準出力

    writeFileSync("src/rss.json", JSON.stringify(jsonFeed)); // jsonファイルへの書き出し
  } catch (error) {
    console.error(error); // 標準エラー出力
  }
})();
