
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center p-8 gradient-card rounded-xl shadow-lg max-w-md mx-auto">
        <h1 className="text-6xl font-bold mb-6 gradient-text">404</h1>
        <h2 className="text-2xl font-bold text-gray-100 mb-6">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          We're sorry, but the page you were looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="gradient-primary hover:opacity-90 btn-hover">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
