import { NavLinkContainer } from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  path: string;
}

const NavLink = ({ title, path }: Props) => {
  const router = useRouter();
  const isActive = router.pathname === path;
  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
};
export default NavLink;
