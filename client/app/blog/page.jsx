import React from "react";
import Styles from "./blog.module.css";
import { BsExclamationLg } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import Data from '@/getBlogpost/blog.json'

function Blog() {
  const datas = Data;
  return (
    <>
      <div className={Styles.contain}>
        <h1>BLOG PAGE</h1>
        <div className={Styles.leftSide}>
          {datas.map((data,index) =>
            <div key={index} className={Styles.blogPost}>
            <div className={Styles.title}>{data.title}</div>
            <div className={Styles.text}>{data.text}</div>
          </div>
          )}
        </div>
        <div className={Styles.rightSide}>
          <div className={Styles.rightBox}>
            <div className={Styles.rightTitle}>
              <div className={Styles.icon}>
                <BsExclamationLg />{" "}
              </div>
              <div className={Styles.rightText}>Skill</div>
            </div>
            <div className={Styles.skills}>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>React</li>
                <li>NextJs</li>
                <li>Tailwind</li>
              </ul>
            </div>
          </div>
          <div className={Styles.rightBox}>
            <div className={Styles.rightTitle}>
              <div className={Styles.icon}>
                <TfiWorld />
              </div>
              <div className={Styles.rightText}>Languages</div>
            </div>
            <div className={Styles.skills}>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>React</li>
                <li>NextJs</li>
                <li>Tailwind</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
