import { ReactNode } from "react";
import Container from "./container";

interface Props {
  title: string;
  endContent?: ReactNode;
}

export default function PageTitle(props: Props) {
  return (
    <Container>
      <div className="flex items-center justify-between py-4 md:py-8 lg:py-16 transition-all duration-1000">
        <h1 className="text-3xl md:text-5xl lg:text-6xl transition-all delay-150 ease-in-out">{props.title}</h1>
        {props.endContent}
      </div>
    </Container>
  );
}
