import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@mui/material/Button";

interface Props {
  href: string;
  label: string;
}

export default function NavButton(props: Props) {
  const { href, label } = props;
  const router = useRouter();

  //const color = router.asPath === href ? "success" : "inherit";
  const isActive =
    router.asPath === href ||
    (router.asPath.includes("projects") && href === "/projects");
  const variant = isActive ? "contained" : "text";

  return (
    <Link href={href} passHref>
      <Button component="a" variant={variant}>
        {label}
      </Button>
    </Link>
  );
}
