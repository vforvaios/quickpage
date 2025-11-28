import React, { type ReactNode } from "react";
import GenericError from "./GenericError";

interface ErrorBoundaryProps {
  children: ReactNode;
  onError?: (error: Error, info: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, info);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    // optional: force reload
    // window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <GenericError
          title="Σφάλμα εφαρμογής"
          message="Κάτι απρόοπτο συνέβη — δοκιμάστε ξανά."
          error={this.state.error?.toString() ?? "Unknown error"}
          onRetry={this.handleRetry}
        />
      );
    }

    return this.props.children;
  }
}
