import { getUser } from './getUser';

export const indexPage = async () => {
  const indexPath = window.location.href.slice(0, window.location.href.lastIndexOf('/'));
  const index = indexPath + '/';

  if (window.location.href === index) {
    await getUser();
  }
};