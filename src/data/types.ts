import { ReactNode } from "react";

export interface Article {
  date: string;
  title: string;
  summary: ReactNode;
  image?: {
    src: string;
    className: string;
  };
}

export interface Job {
  company: string;
  role: string;
  dates: string;
}
