import Link from 'next/link';
import { ReactNode } from 'react';

interface ProSidebarLinkProps {
  href: string;
  children: ReactNode;
  [key: string]: any; // Esta linha permite que você passe outras props para a tag <a>
}

const ProSidebarLink: React.FC<ProSidebarLinkProps> = ({ href, children, ...props }) => {
  return (
    <Link href={href} {...props}> {children}

    </Link>
  );
}

export default ProSidebarLink;
