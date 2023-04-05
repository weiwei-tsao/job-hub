import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

interface ErrorBoundaryProps {}

const ErrorBoundary: React.FC = (props: ErrorBoundaryProps) => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 401:
        return <h1>Unauthorized</h1>;
      case 403:
        return <h1>Forbidden</h1>;
      case 404:
        return <h1>Not Found</h1>;
      case 418:
        return <h1>I'm a teapot</h1>;
      case 500:
        return <h1>Internal Server Error</h1>;
      case 503:
        return <h1>Service Unavailable</h1>;
    }
  }
  return <p>Error: something went wrong.</p>;
};
export default ErrorBoundary;
