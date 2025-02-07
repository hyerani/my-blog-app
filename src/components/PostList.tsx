import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation--active" : ""}
          >
            전체
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation--active" : ""}
          >
            나의 글
          </div>
        </div>
      )}

      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">raniia</div>
                <div className="post__date">2025.02.06</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                efficitur vel nunc eget dictum. Nam condimentum nunc dolor, eu
                interdum orci lacinia at. Cras vel lacinia ligula, commodo
                placerat nisi. Vestibulum sed arcu quis nisi semper efficitur.
                Aenean molestie ipsum non orci sagittis, non posuere risus
                consectetur. Quisque vestibulum augue ut porttitor congue. Sed
                eget neque et urna finibus ultricies nec ac sapien. Curabitur
                posuere tellus enim, luctus posuere nisl dictum quis. Quisque
                volutpat orci at maximus gravida. Quisque in consequat nulla.
                Aliquam accumsan sollicitudin sem, eget placerat ipsum bibendum
                id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum euismod luctus lacus a posuere. Proin luctus pretium
                lacinia. Sed vehicula mi turpis, et fermentum magna interdum
                vitae.
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
