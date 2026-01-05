import Link from 'next/link';
import { URLS } from '@/constants/urls';

const NotFound = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Not Found</h2>
      <p className="mb-4">Could not find requested resource</p>
      <Link
        href={URLS.routes.homepage}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;

