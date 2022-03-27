import AppbarMold from "./AppbarMold";

export default function Layout(props: any) {
  return (
    <>
      <AppbarMold />
      <main>{props.children}</main>
    </>
  );
}
