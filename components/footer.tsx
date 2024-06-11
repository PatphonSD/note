import Container from "./container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="p-2 border-t text-muted-foreground flex justify-between">
          <small className="text-xs" suppressHydrationWarning>
            ©{new Date().getFullYear()}.
          </small>
          <small className="text-xs">PatphonSD</small>
        </div>
      </Container>
    </footer>
  );
}
