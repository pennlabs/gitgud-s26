import { Link } from "react-router-dom";
import "./Ryan26HatesKatelin.css";

const stories = [
  {
    headline: "Ryan 拒绝在 Huntsman 与 Katelin 十英尺内就座",
    date: "2024年9月",
    excerpt:
      "据称 Ryan 发现 Katelin 选了同一门早九的课后，要求换座位。据称他对教务说：「我的气场至少需要三排空位。」Katelin 无动于衷：「我根本不知道他在这节课。」",
    icon: "🪑",
  },
  {
    headline: "咖啡车大事件",
    date: "2024年10月",
    excerpt:
      "Katelin 在工院咖啡车拿最后一瓶燕麦奶时，Ryan 据传嘀咕：「有些人可是真有饮食需求。」目击者称他随后从书店买了一加仑，边慢慢喝边与 Katelin 对视。Katelin 改喝杏仁奶。",
    icon: "☕",
  },
  {
    headline: "Slack 表情大战升级",
    date: "2024年11月",
    excerpt:
      "Katelin 用一只 👀 回复了 Ryan 的 PR 后，Ryan 据称把她移出小组项目 Slack，并建了一个叫「懂的人」的频道。该频道目前只有一名成员。Katelin 回应：「我还以为那是默认频道名。」",
    icon: "👀",
  },
  {
    headline: "图书馆自习室对峙",
    date: "2024年12月",
    excerpt:
      "两人都声称期末周预定了 Van Pelt 307。Ryan 没有协商，而是据称每天早上六点去「捍卫自己的预约」。Katelin 在走廊学习拿了 A。Ryan 收到了噪音投诉。",
    icon: "📚",
  },
  {
    headline: "从未发生的 LinkedIn 背书",
    date: "2025年1月",
    excerpt:
      "传言 Ryan 有一份 47 人的「永不背书」LinkedIn 名单。Katelin 据说是第一名，备注是：「commit 消息里感叹号太多！！！」Katelin 从未向 Ryan 要过背书。可能也没想过他。大概吧。",
    icon: "💼",
  },
  {
    headline: "GroupMe 已读不回",
    date: "2025年2月",
    excerpt:
      "在 GroupMe 里，据说 Ryan 对所有人都已读，唯独对 Katelin 从不点开消息，一直显示「已送达」。Katelin 发的通常是「lol」或「same」。Ryan 的心理医生拒绝置评。",
    icon: "📱",
  },
];

const quotes = [
  "我不恨 Katelin。我只是觉得如果她坐在另一个时区，宇宙会更平衡。",
  "我们不是对手。只是两个人的气场不兼容。错的是她的。",
  "我对 Katelin 没意见。我对在 standup 里说「协同」的人有意见。",
];

export default function Ryan26HatesKatelin() {
  return (
    <div className="ryan-page">
      <nav className="ryan-nav">
        <Link to="/">← 返回 Penn Labs</Link>
      </nav>

      <header className="ryan-hero">
        <span className="ryan-badge">独家 • 纯属虚构</span>
        <h1 className="ryan-title">
          Ryan <em>据称</em> 讨厌 Katelin
        </h1>
        <p className="ryan-subtitle">
          故事、八卦、纯属编造。一场肯定不存在的「宿敌」关系的讽刺深挖。
        </p>
      </header>

      <section className="ryan-intro section-narrow">
        <p>
          欢迎来到全网首家（也是唯一）关于 Ryan 和 Katelin 的假新闻站。以上皆未发生，纯属恶搞，仅供娱乐。如果你是 Ryan 或 Katelin：希望你能一笑而过。其他人：同上。
        </p>
      </section>

      <section className="ryan-stories">
        <h2 className="ryan-section-title">编年史（假的）</h2>
        <div className="stories-list">
          {stories.map((story, i) => (
            <article className="story-card" key={i}>
              <span className="story-icon">{story.icon}</span>
              <div className="story-meta">{story.date}</div>
              <h3 className="story-headline">{story.headline}</h3>
              <p className="story-excerpt">{story.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ryan-quotes section-narrow">
        <h2 className="ryan-section-title">Ryan 肯定没说过的话</h2>
        <ul className="quotes-list">
          {quotes.map((q, i) => (
            <li key={i} className="quote-item">
              <span className="quote-mark">"</span>
              {q}
              <span className="quote-mark">"</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="ryan-disclaimer">
        <p>
          <strong>免责声明：</strong>本页为讽刺内容。所有人名、事件与「宿敌」关系均为虚构或夸张，仅供喜剧效果，不暗示任何真实恩怨。出门走走。
        </p>
      </section>

      <footer className="ryan-footer">
        <Link to="/">返回首页</Link>
        <span className="footer-dot">·</span>
        <span>Penn Labs Git Gud · 故事纯属虚构</span>
      </footer>
    </div>
  );
}
