import React from "react";
import { Gap } from "../Atoms";
import List from "../Atoms/List";

const datas = [
  {
    id: 1,
    company: "Arthena",
    position: "Co-founder, C.T.O.",
    link: "https://arthena.com",
    daterange: "January 2014 - Present",
    points: [
      "Deployed quantitative strategies to predict the value of fine art in various pricing contexts.",
      "Built production, on-line, end-to-end optimized machine learning pipelines with Pandas, Numpy, Scikit, Tensorflow, Dagster, Postgres, etc. on GCP with Kubernetes.",
      "Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.",
      "YC Alumn. Worked on everything. Built a 16-person team. Operated company for 6+ years.",
    ],
  },
  {
    id: 2,
    company: "Skeptical Investments",
    position: "Co-founder",
    link: "http://skepticalinvestments.biz",
    daterange: "April 2017 - Present",
    points: [
      "Founded a micro-vc fund to throw token amounts of money at problems I find interesting.",
      "Created the InstaSafe. Fast, automated investment docs for YC companies.",
    ],
  },
  {
    id: 3,
    company: "Enveritas",
    position: "Consultant",
    link: "http://enveritas.org",
    daterange: "September 2016 - 2018",
    points: [
      "Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.",
      "Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.",
      "Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM’s, and other techniques.",
    ],
  },
];

export default function Experience() {
  return (
    <div>
      <div className="text-lg uppercase tracking-widest font-bold text-center">
        experience
      </div>
      <Gap height={24} />
      {datas.map((data) => {
        return (
          <List
            key={data.id}
            company={data.company}
            daterange={data.daterange}
            points={data.points}
          />
        );
      })}
    </div>
  );
}
