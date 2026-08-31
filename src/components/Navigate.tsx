import { useNavigate } from 'react-router'

export const Navigate = ({ to, replace }: { to: string, replace?: boolean }) => {
  const navigate = useNavigate();

  navigate(to, { replace });

  return null;
}