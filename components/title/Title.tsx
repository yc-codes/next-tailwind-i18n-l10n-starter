import { FC, memo } from "react";

export interface PageTitleProps {
  title: string
}

const Title: FC<PageTitleProps> = ({
  title,
}) => {
  return (
    <h2 className="text-5xl font-semibold ">{title}</h2>
  );
}

export default memo(Title);