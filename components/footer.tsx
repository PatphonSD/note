import { HelpCircle, MailQuestion } from "lucide-react";
import Container from "./container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="p-2 border-t text-muted-foreground flex justify-between">
          <small className="text-xs" suppressHydrationWarning>
            ©{new Date().getFullYear()}. PatphonSD
          </small>
          <HelpCircle className="w-4 h-4" />
        </div>
      </Container>
    </footer>
  );
}
