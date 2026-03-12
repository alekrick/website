import { URLS } from "@/constants/urls";
import { Button } from "@/components/shared/Button";

const NotFound = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Not Found</h2>
      <p className="mb-4">Could not find requested resource</p>
      <Button variant="primary" size="sm" href={URLS.routes.homepage} internal>
        Return Home
      </Button>
    </div>
  );
};

export default NotFound;

