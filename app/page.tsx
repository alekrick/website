import { redirect } from 'next/navigation';

const RootPage = (): never => {
  redirect('/homepage');
};

export default RootPage;
