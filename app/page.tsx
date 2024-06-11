import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex-1">
      <Container className="h-full container">
        <div className="h-full flex flex-col justify-center gap-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-medium">📒 NoteBeam</h1>
            <p className="text-foreground/80 md:max-w-xl">
              NoteBeam provides a quick and easy way to share your notes across
              different devices without the hassle of logging in. Simply save
              your notes and share them with a unique 6-character token.
            </p>
          </div>
          <Link href={"/note"} className="w-fit">
            <Button className="rounded-full w-fit" size={"lg"}>
              Open NoteBeam <ArrowRight className="w-4 h-4 ms-2" />
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
