import { cn } from "@/lib/utils";

export default function Container(props: JSX.IntrinsicElements["div"]) {
  return <div className={cn(props.className , "container mx-auto max-md:px-4")} {...props} />;
}
