import type { SocialLabel } from '@/config/Site';
import type { Icon } from '@phosphor-icons/react/lib';
import { GithubLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react/ssr';

const phosphorIcons: Partial<Record<SocialLabel, Icon>> = {
  X: XLogo,
  LinkedIn: LinkedinLogo,
  Github: GithubLogo,
};

function HashnodeLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
    </svg>
  );
}

export default function SocialIcon({ name }: { name: SocialLabel }) {
  const PhosphorIcon = phosphorIcons[name];

  return (
    <span
      aria-hidden="true"
      className="flex size-6 items-center justify-center"
    >
      {PhosphorIcon ? (
        <PhosphorIcon className="size-5" weight="duotone" />
      ) : (
        <HashnodeLogo />
      )}
    </span>
  );
}
