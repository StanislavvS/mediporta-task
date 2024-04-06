const Header = (props: React.PropsWithChildren) => {
  const { children } = props;
  return <h1>{children}</h1>;
};

export default Header;
