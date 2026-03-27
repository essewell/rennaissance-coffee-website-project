interface NetlifyIdentity {
  on(event: string, callback: (user?: unknown) => void): void;
  open(): void;
  logout(): void;
}

interface Window {
  netlifyIdentity?: NetlifyIdentity;
}
