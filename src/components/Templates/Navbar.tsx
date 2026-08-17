import Link from 'next/link';
import { useRouter } from 'next/router';

import { headerItems } from '@/data/headerItem';

const MyNavbar = () => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <nav
      className='mobile-bottom-nav'
      style={{
        position: 'fixed',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 300,
        alignItems: 'center',
        gap: 4,
        padding: 6,
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: 9999,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
      }}
    >
        {headerItems.map((item, idx) => {
          const isActive = item.link === path;
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.link}
              scroll={false}
              aria-label={item.label}
              title={item.label}
              style={{
                textDecoration: 'none',
                width: 44,
                height: 44,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isActive ? '#ffffff' : 'rgba(255,255,255,0.65)',
                background: isActive
                  ? 'linear-gradient(135deg, rgba(6, 56, 105, 0.75) 0%, rgba(76, 213, 218, 0.35) 100%)'
                  : 'transparent',
                border: isActive
                  ? '1px solid rgba(76, 213, 218, 0.5)'
                  : '1px solid transparent',
                boxShadow: isActive ? '0 0 15px rgba(76, 213, 218, 0.25)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              <Icon size={20} />
            </Link>
          );
        })}
    </nav>
  );
};

export default MyNavbar;
